import prisma from "@/lib/prisma";

const resendOtp = async (req, res) => {
  const data = req.body;
  // const otp = Math.floor(1000 + Math.random() * 9000);
  const otp = 1234;
  try {
    const emailExist = await prisma.User.findUnique({
      where: {
        email: data.email,
        NOT: {
          id: data.userId,
        },
      },
    });
    if (emailExist) {
      res.status(400).json({
        message: "Email already exists ",
        success: false,
      });
      return;
    }
    const user = await prisma.User.update({
      where: {
        id: data.userId,
      },
      data: {
        otp: otp,
        otpTimestamp: new Date()

      },
      // include: {
      //   location: true, // Include all location in the returned object
      // },
    });
    if (user) {
      res.status(200).json({
        message: "Otp send Successfully",
        success: true,
        data: user,
      });
    }
  } catch (err) {
    console.log("resend otp", err);
    res.status(400).json({
      message: "internal server error",
      error: err,
      success: false,
    });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "PUT": {
      return resendOtp(req, res);
    }
  }
}
