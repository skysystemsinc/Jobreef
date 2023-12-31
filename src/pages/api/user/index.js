import prisma from "@/lib/prisma";

import bcrypt from "bcrypt";
const addUser = async (req, res) => {
  const data = req.body;

  const emailExist = await prisma.User.findUnique({
    where: {
      email: data.email,
    },
  });

  if (emailExist) {
    res.status(400).json({
      message: "Email already exists ",
      success: false,
    });
  } else {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    try {
      // const otp = Math.floor(1000 + Math.random() * 9000);
      const otp = 1234;
      let companyId = null;
      if (data.companyId) {
        companyId = data.companyId;
        // Remove Company Id from data
        delete data.companyId;
      }
      //TODO otp will send on email
      const userCreated = await prisma.User.create({
        data: {
          emailPreferences: {
            create: {
              jobUpdates: true,
              messageThread: true,
              insightfulTips: false,
              promoNewsletter: false,
            },
          },
          ...data,
          ...(companyId ? {
            company: {
              connect: {
                id: companyId,
              },
            },
          } : {}),
          otp: otp,
          otpTimestamp: new Date(),
          // password: data.password,
          // ...(data.employeeId ?? { employeeId: data.employeeId }),
          // firstName: data.firstName,
          // lastName: data.lastName,
          // email: data.email,
          // otp: otp,
          // role: data.role,
          // accountType: data.accountType,
          // companyId: data.companyId,
          // ...(data.employeeId !== undefined && { employeeId: data.employeeId }),
        },
        include: {
          company: true,
          employee: true,
        },
      });

      res.status(201).json({
        message: "user Created successfully",
        data: userCreated,
        success: true,
      });
    } catch (err) {
      console.log("err", err);
      res.status(500).json({
        error: err,
        message: "server error",
        success: false,
      });
    }
  }
};

const GetAllUsers = async (req, res) => {
  try {
    const users = await prisma.User.findMany({
      include: {
        company: true,
      },
    });
    res.status(200).json({
      data: users,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};
const DeleteAllUsers = async (req, res) => {
  try {
    const deleteUsers = await prisma.User.deleteMany({});
    res.status(200).json({
      data: deleteUsers,
      message: "Users Deleted successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};
export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return GetAllUsers(req, res);
    }
    case "DELETE": {
      return DeleteAllUsers(req, res);
    }

    case "POST": {
      return addUser(req, res);
    }
  }
}
