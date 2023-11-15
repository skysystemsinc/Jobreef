import prisma from "@/lib/prisma";
import UserModel from "@/model/user";
import bcrypt from "bcrypt";
const addUser = async (req, res) => {
  const data = req.body;

  const hashPass = await bcrypt.hash(data.password, 10);

  try {
    const userCreated = await prisma.User.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPass,
        phoneNumber: data.phoneNumber,
        role: data.role,
        accountType: data.accountType,
        companyId: data.companyId,
        employeeId: data.employeeId ?? null,
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
