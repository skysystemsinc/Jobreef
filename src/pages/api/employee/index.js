import prisma from "@/lib/prisma";

const addEmployee = async (req, res) => {
  const data = req.body;

  try {
    const employeeCreated = await prisma.Employee.create({
      data: {
        location: data.location,
        phoneNumber: data.phoneNumber,
        description: data.description,
        user: {
          connect: {
            id: data.userId,
          },
        },
        // workExperience: data.workExperience,
        // education: data.education,
        // certification: data.certification,
        // skills: data.skills,
        // achievement: data.achievement,
        // attachment: data.attachment,
      },
      include: {
        skills: true,
        workExperience: true,
        education: true,
        certification: true,
        skills: true,
        achievement: true,
        attachment: true,
        user: true
      },
    });

    res.status(201).json({
      message: "Employee created successfully",
      data: employeeCreated,
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

const GetAllEmployee = async (req, res) => {
  try {
    const employees = await prisma.Employee.findMany({
      include: {
        user: true,
      },
    });
    res.status(200).json({
      data: employees,
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
const DeleteAllEmployees = async (req, res) => {
  try {
    const deleteEmployees = await prisma.Employee.deleteMany({});
    res.status(200).json({
      data: deleteEmployees,
      message: "Employees Deleted successfully",
      success: true,
    });
  } catch (err) {
    // console.log("err", err)
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};

const updateObjectById = async (req, res) => {
  const { employeeId, objectId, arrayName, updatedData } = req.body;
  try {
    const updatedEmployee = await prisma.Employee.update({
      where: { id: employeeId },
      data: {
        [arrayName]: {
          updateMany: {
            where: { id: objectId },
            data: updatedData,
          },
        },
      },
      include: {
        [arrayName]: true,
      },
    });

    res.status(200).json({
      data: updatedEmployee,
      message: "Employees update successfully",
      success: true,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      message: "internal server error",
      error: err,
      success: false,
    });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return GetAllEmployee(req, res);
    }
    case "DELETE": {
      return DeleteAllEmployees(req, res);
    }

    case "POST": {
      return addEmployee(req, res);
    }
    case "PUT": {
      return updateObjectById(req, res);
    }
  }
}
// export default async function handler(req, res) {
//   switch (req.method) {
//     case "GET": {
//       return GetAllEmployee(req, res);
//     }
//     case "DELETE": {
//       return DeleteAllCompany(req, res);
//     }

//     case "POST": {
//       return addEmployee(req, res);
//     }

//   }
// }
