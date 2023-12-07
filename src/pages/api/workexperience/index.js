import prisma from "@/lib/prisma";

const addExperience = async (req, res) => {
  const data = req.body;

  try {
    const experienceCreated = await prisma.WorkExperience.create({
      data: data,
    });

    res.status(201).json({
      message: "Experience created successfully",
      data: experienceCreated,
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

const GetAllExp = async (req, res) => {
  try {
    const experience = await prisma.WorkExperience.findMany({
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
const DeleteAllExp = async (req, res) => {
  try {
    const deleteExp = await prisma.WorkExperience.deleteMany({});
    res.status(200).json({
      data: deleteExp,
      message: "Experience Deleted successfully",
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
      return GetAllExp(req, res);
    }
    case "DELETE": {
      return DeleteAllExp(req, res);
    }

    case "POST": {
      return addExperience(req, res);
    }
  }
}
