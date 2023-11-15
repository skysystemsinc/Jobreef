

import prisma from "@/lib/prisma";


const DeleteCompany = async (req, res) => {
  try {
    const deleteCompany = await prisma.Company.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteCompany) {
      return res.status(404).json({
        message: `No company with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "Company deleted successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: `No company with id ${req.query.id}`,
      success: false,
    });
  }
};
const UpdateCompany = async (req, res) => {
  const newObj = { ...req.body };
  try {
    const user = await prisma.Company.update({
      where: {
        id: req.query.id,
      },
      data: newObj,
    });
    console.log("user", user);
    if (!user) {
      return res.status(404).json({
        message: `No company with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "Company updated successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: `No company with id ${req.query.id}`,
      success: false,
    });
  }
};

const GetSingleCompany = async (req, res) => {
  try {
    const company = await prisma.Company.findUnique({
      where: {
        id: req.query.id,
      },
    });

    if (!company) {
      return res.status(404).json({
        message: `No Company with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      data: company,
      success: true,
    });
  } catch (err) {
    console.log("company err", err);
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
      return GetSingleCompany(req, res);
    }
    case "PATCH": {
      return UpdateCompany(req, res);
    }
    case "DELETE": {
      return DeleteCompany(req, res);
    }
  }
}