import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

const DeleteSingle = async (req, res) => {
  try {
    // const deleteUser = await UserModel.findOneAndDelete({ _id: req.query.id });
    const deleteData = await prisma.AppliedJobs.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteData) {
      return res.status(404).json({
        message: `No data with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "data deleted successfully",
      success: true,
      data: deleteData,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      message: "internal server error ",

      success: false,
    });
  }
};
const UpdateData = async (req, res) => {
  const data = req.body;

  try {
    const updateQuery = await prisma.AppliedJobs.update({
      where: {
        id: req.query.id,
      },
      data: {
        ...data,
      },
      include: {
        employee: {
          include: {
            skills: true,
            workExperience: true,
            education: true,
            certification: true,
            skills: true,
            user: true,
            achievement: true,
            attachment: true,
          },
        }, // Include all location in the returned object
        job: true,
      },
    });

    res.status(200).json({
      message: "data updated successfully",
      data: updateQuery,
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
const GetSingleData = async (req, res) => {
  try {
    // const user = await UserModel.findOne({ _id: req.query.id });
    const singleData = await prisma.AppliedJobs.findUnique({
      include: {
        employee: true,
      },
      where: {
        id: req.query.id,
      },
    });
    if (!singleData) {
      return res.status(404).json({
        message: `No data with id ${req.query.id}`,
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
      return GetSingleData(req, res);
    }
    case "PUT": {
      return UpdateData(req, res);
    }
    case "DELETE": {
      return DeleteSingle(req, res);
    }
  }
}
