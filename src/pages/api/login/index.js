import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
  const { email, password } = JSON.parse(req.body);

  const options = {
    secure: true,
    expire: process.env.EXPIRES_TOKEN + Date.now(),
  };

  if (!email || !password) {
    return res.json({ message: "Required field's are missing." });
  }
  try {
    const user = await prisma.User.findUnique({
      where: {
        email: email,
      },
      include: {
        company: true,
        employee: {
          include: {
            skills: true,
            workExperience: true,
            education: true,
            certification: true,
            skills: true,
            achievement: true,
            attachment: true,
          },
        },
        location: true,
        emailPreferences: true,
      },
    });
    if (user) {
      try {
        const passMatch = await bcrypt.compare(password, user.password);
        if (passMatch) {
          const token = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET_KEY
          );

          res.status(200).json({
            data: user,
            token: token,
            message: "User successfully login",
            success: true,
          });
        } else {
          //     res.send({ error: "Invalid Credentials" });
          res.status(403).json({
            data: user,
            message: "Invalid Email and Password",
            success: false,
          });
        }
      } catch (err) {
        console.log("user exist", err);

        res.status(400).json({
          data: err,
          message: "Error",
          success: false,
        });
      }
    } else {
      res.status(404).json({
        data: user,
        message: "Email does not exist",
        success: false,
      });
    }
  } catch (err) {
    console.log("login error", err);
    res.status(400).json({
      data: err,
      message: "Error",
      success: false,
    });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST": {
      return Login(req, res);
    }
  }
}
