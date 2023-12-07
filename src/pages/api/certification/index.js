import prisma from "@/lib/prisma";

const add = async (req, res) => {
  const data = req.body;
  const body = {
    employeeId: data.employeeId,

    certificateName: data.certificateName,
    organizationName: data.organizationName,
    certificateId: data.certificateId,
    issuedOn: data.issuedOn,
    noExpiry: data.noExpiry,
    validUntil: data.validUntil,
    certificateMedia: data.certificateMedia,
  };

  try {
    const created = await prisma.Certification.create({
      data: body,
    });

    res.status(201).json({
      message: "certification created successfully",
      data: created,
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

const GetAll = async (req, res) => {
  try {
    const experience = await prisma.Certification.findMany({
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
      message: "internal server error ",

      success: false,
    });
  }
};
const DeleteAll = async (req, res) => {
  try {
    const deleteData = await prisma.Certification.deleteMany({});
    res.status(200).json({
      data: deleteData,
      message: "certification Deleted successfully",
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
