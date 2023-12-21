import prisma from "@/lib/prisma";

const add = async (req, res) => {
  const data = req.body;
  const body = {
    jobId: data.jobId,
    employeeId: data.employeeId,
  };

  try {
    const created = await prisma.AppliedJobs.create({
      data: body,
    });

    res.status(201).json({
      message: " successfully applied ",
      data: created,
      success: true,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      message: "internal server error",
      success: false,
    });
  }
};

const GetAll = async (req, res) => {
  try {
    const experience = await prisma.AppliedJobs.findMany({
      include: {
        employee: true,
        job: true,
      },
    });
    res.status(200).json({
      data: experience,
      success: true,
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
const DeleteAll = async (req, res) => {
  try {
    const deleteData = await prisma.AppliedJobs.deleteMany({});
    res.status(200).json({
      data: deleteData,
      message: "certification Deleted successfully",
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
      return GetAll(req, res);
    }
    case "DELETE": {
      return DeleteAll(req, res);
    }

    case "POST": {
      return add(req, res);
    }
  }
}
