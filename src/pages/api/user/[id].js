
import UserModel from "@/model/user";

const DeleteUser = async (req, res) => {
  try {
    // const deleteUser = await UserModel.findOneAndDelete({ _id: req.query.id });
    const deleteUser = await prisma.User.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteUser) {
      return res.status(404).json({
        message: `No user with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
};
const UpdateUser = async (req, res) => {
  const newObj = { ...req.body };
  try {
    const user = await prisma.User.update({
      where: {
        id: req.query.id,
      },
      data: newObj,
    });
    if (!user) {
      return res.status(404).json({
        message: `No user with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      message: "User updated successfully",
      success: true,

    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
      message: `No user with id ${req.query.id}`,

    });
  }
};
const GetSingleUser = async (req, res) => {
  try {
    // const user = await UserModel.findOne({ _id: req.query.id });
    const user = await prisma.User.findUnique({
      include: {
        company: true,
      },
      where: {
        id: req.query.id,
      },
    });
    if (!user) {
      return res.status(404).json({
        message: `No User with id ${req.query.id}`,
        success: false,
      });
    }
    res.status(200).json({
      data: user,
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
      return GetSingleUser(req, res);
    }
    case "PATCH": {
      return UpdateUser(req, res);
    }
    case "DELETE": {
      return DeleteUser(req, res);
    }
  }
}
