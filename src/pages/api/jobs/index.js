import prisma from "@/lib/prisma";

const add = async (req, res) => {
  const data = req.body;
  const body = {
    title: data.title,
    companyId: data.companyId,
    employmentType: data.employmentType,
    locationType: data.locationType,
    seniorityLevel: data.seniorityLevel,
    applicationType: data.applicationType,
    externalURL: data.externalURL,
    jobDescription: data.jobDescription,
    opening: data.opening,
    minimumEducation: data.minimumEducation,
    minimumSalary: data.minimumSalary,
    maximumSalary: data.maximumSalary,
    yearsOfExperience: data.yearsOfExperience,
    jobFamily: data.jobFamily,
    rate: data.rate,
    tags: data.tags,
    location: data.location,
    desiredSkills: data.desiredSkills,
    applicationDeadline: data.applicationDeadline,
    draft: data.draft,
    active: data.active,
    status: data.status,
  };

  try {
    const created = await prisma.Job.create({
      data: body,
    });

    res.status(201).json({
      message: "job created successfully",
      data: created,
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

const GetAll = async (req, res) => {
  const data = req.body;
  try {
    const experience = await prisma.Job.findMany({

      include: {
        company: true,
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
    const deleteData = await prisma.Job.deleteMany({});
    res.status(200).json({
      data: deleteData,
      message: "job Deleted successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: "internal server error ",

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
