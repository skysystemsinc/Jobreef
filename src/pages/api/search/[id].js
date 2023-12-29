import prisma from "@/lib/prisma";

const GET = async (req, res) => {
  const { id, searchQuery, location } = req.query;
  console.log("location", location, req.query);
  try {
    const job = await prisma.AppliedJobs.findMany({
      where: {
        jobId: id,
        employee: {
          OR: [
            location !== ""
              ? {
                  location: {
                    city: { contains: location, mode: "insensitive" },
                  },
                }
              : {},
            location !== ""
              ? {
                  location: {
                    province: { contains: location, mode: "insensitive" },
                  },
                }
              : {},
            searchQuery !== ""
              ? {
                  workExperience: {
                    some: {
                      experience: { equals: searchQuery },
                    },
                  },
                }
              : {},
            searchQuery !== ""
              ? {
                  skills: {
                    some: {
                      name: { contains: searchQuery, mode: "insensitive" },
                    },
                  },
                }
              : {},
          ],
        },
      },

      include: {
        job: true,
        employee: {
          include: {
            location: true,
            user: true,
          },
        },
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
export default GET;
