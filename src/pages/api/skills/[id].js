import prisma from "@/lib/prisma";
const addMany = async (req, res) => {
  const data = req.body;

  try {
    const created = await prisma.Employee.update({
      where: {
        id: req.query.id,
      },
      //   data: data,
      include: {
        skills: true,
      },
      data: {
        skills: {
          create: data.data,
        },
      },
    });
    console.log("created", created);
    res.status(201).json({
      message: "skills created successfully",
      data: created.skills,
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

const DeleteSingle = async (req, res) => {
  try {
    // const deleteUser = await UserModel.findOneAndDelete({ _id: req.query.id });
    const deleteData = await prisma.Skills.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteData) {
      return res.status(404).json({
        message: `No skills with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "skills deleted successfully",
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
    const user = await prisma.Skills.update({
      where: {
        id: req.query.id,
      },
      data: {
        name: data.name,
        level: data.level,
      },
      include: {
        employee: true, // Include all location in the returned object
      },
    });

    res.status(200).json({
      message: "skills updated successfully",
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
const GetSingleData = async (req, res) => {
  try {
    // const user = await UserModel.findOne({ _id: req.query.id });
    const singleData = await prisma.Skills.findUnique({
      include: {
        employee: true,
      },
      where: {
        id: req.query.id,
      },
    });
    if (!singleData) {
      return res.status(404).json({
        message: `No skills with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      data: singleData,
      success: true,
    });
  } catch (err) {
    console.log("err", err);
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
    case "POST": {
      return addMany(req, res);
    }
  }
}
