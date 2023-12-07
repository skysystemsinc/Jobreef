import prisma from "@/lib/prisma";

const addSingle = async (req, res) => {
  const data = req.body;

  try {
    const created = await prisma.Skills.create({
      data: data,
    });
    res.status(201).json({
      message: "skills created successfully",
      data: created,
      success: true,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      success: false,
      message: "internal server error ",
    });
  }
};

const GetAll = async (req, res) => {
  try {
    const experience = await prisma.Skills.findMany({
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
      message: "internal server error ",
    });
  }
};
const DeleteAll = async (req, res) => {
  try {
    const deleteData = await prisma.Skills.deleteMany({});
    res.status(200).json({
      data: deleteData,
      message: "skills Deleted successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
      message: "internal server error ",
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
      return addSingle(req, res);
    }
  }
}
