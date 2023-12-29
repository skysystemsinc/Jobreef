import prisma from "@/lib/prisma";

const addEmployee = async (req, res) => {
  const data = req.body;
console.log("|data.location",data.location);
  try {
    const employeeCreated = await prisma.Candidate.create({
      data: {
        phoneNumber: data.phoneNumber,
        description: data.description,
        location:{
          create:{
            ...data.location
          }
        },
        user: {
          connect: {
            id: data.userId,
            // location: data.location,
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
        user: true,
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
    const employees = await prisma.Candidate.findMany({
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
    const deleteEmployees = await prisma.Candidate.deleteMany({});
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
    const updatedEmployee = await prisma.Candidate.update({
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
