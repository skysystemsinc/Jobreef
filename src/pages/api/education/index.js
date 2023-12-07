import prisma from "@/lib/prisma";

const add = async (req, res) => {
  const data = req.body;
  const body = {
    schoolName: data.schoolName,
    employeeId: data.employeeId,
    diploma: data.diploma,
    startDate: data.startDate,
    endDate: data.endDate,
    currentlyEnrolled: data.currentlyEnrolled,
    gpa: data.gpa,
    description: data.description,
    location: {
      country: data.country,
      province: data.province,
      city: data.city,
      address: data.address,
    },
  };

  try {
    const created = await prisma.Education.create({
      data: body,
    });

    res.status(201).json({
      message: "education created successfully",
      data: created,
      success: true,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};

const GetAll = async (req, res) => {
  try {
    const experience = await prisma.Education.findMany({
      include: {
        employee: true,
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
      success: false,
    });
  }
};
const DeleteAll = async (req, res) => {
  try {
    const deleteData = await prisma.Education.deleteMany({});
    res.status(200).json({
      data: deleteData,
      message: "education Deleted successfully",
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
