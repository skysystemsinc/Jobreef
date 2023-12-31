import prisma from "@/lib/prisma";

const DeleteEmployee = async (req, res) => {
  try {
    const deleteExp = await prisma.Candidate.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteExp) {
      return res.status(404).json({
        message: `No employee with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "employee deleted successfully",
      success: true,
      data: deleteExp,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: `internal server error `,
      success: false,
    });
  }
};
const UpdateEmployee = async (req, res) => {
  // const data = req.body;
  const data = req.body;
  console.log("data", req.body);

  try {
    const employee = await prisma.Candidate.update({
      where: {
        id: req.query.id,
      },
      data: {
        ...data,
        location: {
          update: {
            ...data.location,
          },
        },
      },
      include: {
        skills: true,
        workExperience: true,
        education: true,
        certification: true,
        skills: true,
        achievement: true,
        attachment: true,
        location: true,
      },
    });

    if (!employee) {
      return res.status(404).json({
        message: `No employee with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "Employee updated successfully",
      data: employee,
      success: true,
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      error: err,
      message: `internal server  error`,
      success: false,
    });
  }
};

const GetSingleEmployee = async (req, res) => {
  try {
    const employee = await prisma.Candidate.findUnique({
      where: {
        id: req.query.id,
      },
      include: {
        skills: true,
        workExperience: true,
        education: true,
        certification: true,
        skills: true,
        achievement: true,
        attachment: true,
        location: true,
      },
    });

    if (!employee) {
      return res.status(404).json({
        message: `No EMployee with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      data: employee,

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
      return GetSingleEmployee(req, res);
    }
    case "PUT": {
      return UpdateEmployee(req, res);
    }
    case "DELETE": {
      return DeleteEmployee(req, res);
    }
  }
}
