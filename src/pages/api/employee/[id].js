import prisma from "@/lib/prisma";

const DeleteCompany = async (req, res) => {
  try {
    const deleteEmployee = await prisma.Employee.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteEmployee) {
      return res.status(404).json({
        message: `No employee with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "Employee deleted successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: `No Employee with id ${req.query.id}`,
      success: false,
    });
  }
};
const UpdateCompany = async (req, res) => {
  const newObj = { ...req.body };
  try {
    const employee = await prisma.Employee.update({
      where: {
        id: req.query.id,
      },
      data: newObj,
    });
    console.log("employee", employee);
    if (!employee) {
      return res.status(404).json({
        message: `No employee with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "Employee updated successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: `No employee with id ${req.query.id}`,
      success: false,
    });
  }
};

const GetSingleEmployee = async (req, res) => {
  try {
    const employee = await prisma.Employee.findUnique({
      where: {
        id: req.query.id,
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
    case "PATCH": {
      return UpdateCompany(req, res);
    }
    case "DELETE": {
      return DeleteCompany(req, res);
    }
  }
}
