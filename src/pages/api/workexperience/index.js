import prisma from "@/lib/prisma";
import moment from "moment";

const addExperience = async (req, res) => {
  const data = req.body;
  let unit;
  let difference;
  const daysDifference = moment(data.startDate).diff(data?.endDate, "days");
  const monthsDifference = moment(data.startDate).diff(data?.endDate, "months");
  const weeksDifference = moment(data.startDate).diff(data?.endDate, "weeks");
  const yearsDifference = moment(data.startDate).diff(data?.endDate, "years");

  if (Math.abs(yearsDifference) >= 1) {
    unit = "y";
    difference = yearsDifference;
  } else if (Math.abs(monthsDifference) >= 1) {
    unit = "mo";
    difference = monthsDifference;
  } else if (Math.abs(weeksDifference) >= 1) {
    unit = "w";
    difference = weeksDifference;
  } else {
    unit = "d";
    difference = daysDifference;
  }
  console.log(`Difference: ${difference} ${unit}`);
  try {
    const experienceCreated = await prisma.WorkExperience.create({
      data: { ...data, experience: `${Math.abs(difference)}${unit}` },
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
