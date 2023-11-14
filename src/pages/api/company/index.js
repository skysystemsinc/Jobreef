import dbConnect from "@/lib/dbConnection";

import Company from "@/model/company";
const addCompany = async (req, res) => {
  const data = req.body;

  try {
    const companyCreated = await Company.create({
      companyName: data.companyName,
      country: data.country,
      city: data.city,
      address: data.address,
      industry: data.industry,
      directory: data.directory,
      noOfEmployees: data.noOfEmployees,
      yearEstablished: data.yearEstablished,
      description: data.description,
      webUrl: data.webUrl,
      socialLinks: data.socialLinks,
    });

    res.status(201).json({
      message: "Company Created successfully",
      data: companyCreated,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};

const GetAllCompany = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json({
      data: companies,
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
  await dbConnect();
  switch (req.method) {
    case "GET": {
      return GetAllCompany(req, res);
    }

    case "POST": {
      return addCompany(req, res);
    }
  }
}
