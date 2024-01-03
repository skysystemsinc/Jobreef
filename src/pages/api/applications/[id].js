import prisma from "@/lib/prisma";

const GET = async (req, res) => {
  const { id, saved } = req.query;
  console.log("query", id, req.query,saved);
  try {
    const job = await prisma.AppliedJobs.findMany({
      where: {
        jobId: id,
        ...(saved ? { saved: true } : {}),
      },
      include: {
        employee: {
          include: {
            skills: true,
            workExperience: true,
            education: true,
            certification: true,
            skills: true,
            location: true,
            user: true,
            achievement: true,
            attachment: true,
          },
        },
      },
    });
    console.log("job",job);
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
export default GET;
