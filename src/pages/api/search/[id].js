import prisma from "@/lib/prisma";

const GET = async (req, res) => {
  const { id, q, location } = req.query;
  console.log("location", location, req.query);
  try {
    const job = await prisma.AppliedJobs.findMany({
      where: {
        jobId: id,

        AND: [
          {
            employee: {
              OR: [
                {
                  location: {
                    city: location,
                    // city: {
                    //   contains: location,
                    //   mode: "insensitive",
                    // },
                  },
                },
                {
                  location: {
                    province: location,
                    // province: { contains: location, mode: "insensitive" },
                  },
                },
                {
                  workExperience: {
                    some: {
                      experience: { equals: q },
                    },
                  },
                },
                {
                  skills: {
                    some: {
                      name: { contains: q, mode: "insensitive" },
                    },
                  },
                },
              ],
            },
          },
          //   {
          //     employee: {
          //       skills: {
          //         some: {
          //           //   name: q,
          //           name: { equals: q },
          //         },
          //       },
          //     },
          //   },
        ],
        // OR: [
        //   {
        //     employee: {
        //       workExperience: {
        //         some: {
        //           experience: { equals: q },
        //         },
        //       },
        //     },
        //   },
        //   {
        //     employee: {
        //       skills: {
        //         some: {
        //           //   name: q,
        //           name: { equals: q },
        //         },
        //       },
        //     },
        //   },
        // ],
      },

      include: {
        job: true,
        employee: {
          include: {
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
