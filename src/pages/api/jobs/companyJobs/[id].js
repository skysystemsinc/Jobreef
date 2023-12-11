import prisma from "@/lib/prisma";

 const GET = async (req, res) => {
  const { id } = req.query;
  console.log("companyId",id ,req.query);
  try {
    const job = await prisma.Job.findMany({
      where: {
        companyId: id,
      },
    });
    res.status(200).json({
      data: job,
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
export default GET