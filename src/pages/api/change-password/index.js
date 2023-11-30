import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
const changePassword = async (req, res) => {
  const data = JSON.parse(req.body);

  try {
    const user = await prisma.User.findUnique({
      where: {
        id: data.userId,
      },
    });

    // Check if the current password provided matches the stored hashed password
    const passwordMatches = await bcrypt.compare(data.password, user.password);

    if (!passwordMatches) {
      res.status(400).json({
        message: "Current password is incorrect",
        success: false,
      });
      return;
    }

    // Hash the new password before updating it in the database
    const hashedNewPassword = await bcrypt.hash(data.newPassword, 10);

    // Update the user's password in the database
    const updatedUser = await prisma.User.update({
      where: {
        id: data.userId,
      },
      data: {
        password: hashedNewPassword,
      },
    });
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error!",
      error: err,
      success: false,
    });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "PUT": {
      return changePassword(req, res);
    }
  }
}
