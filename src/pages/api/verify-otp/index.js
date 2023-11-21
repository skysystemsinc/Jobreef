const verifyOtp = async (req, res) => {
  const data =  JSON.parse( req.body);
  const verify = await prisma.User.findUnique({
    where: {
      id: data.userId,
      otp: data.otp,
    },
  });
  if (verify) {
    res.status(200).json({
      message: "Otp verified Successfully",
      success: true,
      data: verify,
    });
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
