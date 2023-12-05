import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

const DeleteExperience = async (req, res) => {
  try {
    // const deleteUser = await UserModel.findOneAndDelete({ _id: req.query.id });
    const deleteExp = await prisma.WorkExperience.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteExp) {
      return res.status(404).json({
        message: `No experience with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "experience deleted successfully",
      success: true,
      data:deleteExp
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: "internal server error ",

      success: false,
    });
  }
};
const UpdateExp = async (req, res) => {
  const data = req.body;

  try {
    const user = await prisma.WorkExperience.update({
      where: {
        id: req.query.id,
      },
      data: {
        ...data,
      },
      include: {
        employee: true, // Include all location in the returned object
      },
    });

    res.status(200).json({
      message: "Experience updated successfully",
      data: user,
      success: true,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      success: false,
      message: `internal server error`,
    });
  }
};
const GetSingleExp = async (req, res) => {
  try {
    // const user = await UserModel.findOne({ _id: req.query.id });
    const experience = await prisma.WorkExperience.findUnique({
      include: {
        employee: true,
      },
      where: {
        id: req.query.id,
      },
    });
    if (!experience) {
      return res.status(404).json({
        message: `No experience with id ${req.query.id}`,
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
      message: `internal server error`,

      success: false,
    });
  }
};
export default async function handler(req, res) {
  // switch the methods

  switch (req.method) {
    case "GET": {
      return GetSingleExp(req, res);
    }
    case "PUT": {
      return UpdateExp(req, res);
    }
    case "DELETE": {
      return DeleteExperience(req, res);
    }
  }
}
