import prisma from "@/lib/prisma";

const addEmployee = async (req, res) => {
  const data = req.body;

  try {
    const employeeCreated = await prisma.Employee.create({
      data: {
        location: data.location,
        phoneNumber: data.phoneNumber,
        summary: data.summary,
        workExperience: data.workExperience,
        education: data.education,
        certification: data.certification,
        skills: data.skills,
        achievement: data.achievement,
        attachment: data.attachment,
      },
    });

    res.status(201).json({
      message: "Company Created successfully",
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