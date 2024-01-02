import prisma from "@/lib/prisma";

const addCompany = async (req, res) => {
  const data = JSON.parse(req.body);
  
  try {
    const companyCreated = await prisma.Company.create({
      data: {
        companyName: data.companyName,
        location: data.location,
        // userId: data.userId,
        users: {
          connect: {
            id: data.userId,
          },
        },
        telePhone: data.telePhone,
        // country: data.country,
        // city: data.city,
        // address: data.address,
        // province: data.province,
        industry: data.industry,
        directory: data.directory,
        noOfEmployees: data.noOfEmployees,
        yearEstablished: data.yearEstablished,
        description: data.description,
        webUrl: data.webUrl,
        companyLogo: data.companyLogo,
        socialLinks: data.socialLinks,
      },
      include: {
        users: true,
      },
    });

    res.status(201).json({
      message: "Company Created successfully",
      data: companyCreated,
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

const GetAllCompany = async (req, res) => {
  try {
    const companies = await prisma.Company.findMany({
      include: {
        user: true,
      },
      // where: {
      //   socialLinks: [
      //     {
      //       platform: "insta",
      //       // year: 2020,
      //       link: "https",
      //     },
      //   ],
      // },
    });
    res.status(200).json({
      data: companies,
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
const DeleteAllCompany = async (req, res) => {
  try {
    const deleteCompany = await prisma.Company.deleteMany({});
    res.status(200).json({
      data: deleteCompany,
      message: "Company Deleted successfully",
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
      return GetAllCompany(req, res);
    }
    case "DELETE": {
      return DeleteAllCompany(req, res);
    }

    case "POST": {
      return addCompany(req, res);
    }
  }
}
