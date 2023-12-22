import prisma from "@/lib/prisma";

const GET = async (req, res) => {
  const { id } = req.query;
  console.log("companyId", id, req.query);
  try {
    const allUsers = await prisma.User.findMany({
      where: {
        companyAdminId: id,
      },
    });
    res.status(200).json({
      data: allUsers,
      success: true,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      message: "internal server error ",
      success: false,
    });
  }
};
export default GET;
