import dbConnect from "@/lib/dbConnection";
import UserModel from "@/model/user";
import bcrypt from "bcrypt";
const addUser = async (req, res) => {
  const data = req.body;

  const hashPass = await bcrypt.hash(data.password, 10);

  try {
    const userCreated = await UserModel.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashPass,
      phoneNumber: data.phoneNumber,
      role: data.role,
      accountType: data.accountType,
      companyId: data.companyId,
    });

    res.status(201).json({
      message: "user Created successfully",
      data: userCreated,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};

const GetAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({
      data: users,
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
      return GetAllUsers(req, res);
    }

    case "POST": {
      return addUser(req, res);
    }
  }
}
