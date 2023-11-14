import dbConnect from "@/lib/dbConnection";
import dbConnection from "@/lib/dbConnection";
import companyModel from "@/model/company";

const DeleteCompany = async (req, res) => {
  try {
    const deleteCompany = await companyModel.findOneAndDelete({
      _id: req.query.id,
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
      success: false,
    });
  }
};
const UpdateCompany = async (req, res) => {
  const newObj = { ...req.body };
  try {
    const user = await companyModel.findOneAndUpdate(
      { _id: req.query.id },
      newObj
    );
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
      success: false,
    });
  }
};

const GetSingleCompany = async (req, res) => {
  try {
    const company = await companyModel.findOne({ _id: req.query.id });

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
    console.log("company err",err)
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};

export default async function handler(req, res) {
  // switch the methods
  await dbConnect();

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
