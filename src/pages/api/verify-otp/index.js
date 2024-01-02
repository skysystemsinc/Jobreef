import prisma from "@/lib/prisma";
const verifyOtp = async (req, res) => {
  const data = req.body
  const verify = await prisma.User.findUnique({
    where: {
      id: data.userId,
      otp: data.otp,
    },
  });

  // const duration = 5 * 60 * 1000;
  const duration =5 * 60 * 1000;
  console.log("duration",duration);
  const currentTimestamp = Date.now();
  console.log("verify",verify);
  const startingTimestamp = verify?.otpTimestamp;
  console.log("currentTimestamp - startingTimestamp",currentTimestamp - startingTimestamp);
  if (currentTimestamp - startingTimestamp >duration) {
    res.status(400).json({
      message: "OTP expired",
      success: false,
    });
    return;
  }

  if (verify) {
    const user = await prisma.User.update({
      where: {
        id: data.userId,
      },
      data: {
        verified: true,
        ...(data.email && { email: data.email }),
      },
      // include: {
      //   location: true, // Include all location in the returned object
      // },
    });
    if (user) {
      res.status(200).json({
        message: "Email verified Successfully",
        success: true,
        data: user,
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid otp",
      success: false,
    });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST": {
      return verifyOtp(req, res);
    }
  }
}
