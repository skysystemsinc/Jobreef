import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

const DeleteUser = async (req, res) => {
  try {
    // const deleteUser = await UserModel.findOneAndDelete({ _id: req.query.id });
    const deleteUser = await prisma.User.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteUser) {
      return res.status(404).json({
        message: `No user with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};
const UpdateUser = async (req, res) => {
  const data = { ...req.body };

  if (data.email) {
    const emailExist = await prisma.User.findUnique({
      where: {
        // id: { not: req.query.id },
        NOT: {
          id: req.query.id,
        },

        email: data.email,
      },
    });

    if (emailExist) {
      res.status(400).json({
        message: "Email already exists",
        success: false,
      });
      return;
    }
  }

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  try {
    const user = await prisma.User.update({
      where: {
        id: req.query.id,
      },
      data: {
        ...data,
        otpTimestamp: new Date(),
        location: {
          create: data.location,
        },
      },
      include: {
        location: true, // Include all location in the returned object
      },
    });

    res.status(200).json({
      message: "User updated successfully",
      data: user,
      success: true,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      success: false,
      message: `Error!`,
    });
  }
};
const GetSingleUser = async (req, res) => {
  try {
    // const user = await UserModel.findOne({ _id: req.query.id });
    const user = await prisma.User.findUnique({
      include: {
        company: {
          include: {
            users: {
              where: {
                NOT: {
                  id: req.query.id,
                }
              },
            },
          },
        },
        employee: {
          include: {
            skills: true,
            workExperience: true,
            education: true,
            certification: true,
            skills: true,
            achievement: true,
            attachment: true,
          },
        },
        location: true,
        emailPreferences: true,
      },
      where: {
        id: req.query.id,
      },
    });
    if (!user) {
      return res.status(404).json({
        message: `No User with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      data: user,
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
  // switch the methods

  switch (req.method) {
    case "GET": {
      return GetSingleUser(req, res);
    }
    case "PUT": {
      return UpdateUser(req, res);
    }
    case "DELETE": {
      return DeleteUser(req, res);
    }
  }
}
