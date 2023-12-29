import prisma from "@/lib/prisma";

const POST = async (req, res) => {
  const { id, searchQuery, location } = req.query;
  const data = req.body;
  const employeeFilters = [];
  const filters = [];
  if (location) {
    employeeFilters.push(
      {
        location: {
          city: { contains: location, mode: "insensitive" },
        },
      },
      {
        location: {
          province: { contains: location, mode: "insensitive" },
        },
      }
    );
  }
  if (searchQuery) {
    employeeFilters.push(
      {
        workExperience: {
          some: {
            experience: { equals: searchQuery },
          },
        },
      },
      {
        skills: {
          some: {
            name: { contains: searchQuery, mode: "insensitive" },
          },
        },
      }
    );
  }
  if (data.status) {
    filters.push(
      {
        status: {
          in: data.status,
        },
      },
      {
        status: {
          in: data.status,
        },
      }
    );
  }
  try {
    const job = await prisma.AppliedJobs.findMany({
      where: {
        jobId: id,
        OR: filters,
        employee: {
          OR: employeeFilters,
        },
        // OR: [
        //   {
        //     status: {
        //       in: data.status,
        //     },
        //   },
        //   {
        //     status: {
        //       in: data.status,
        //     },
        //   },
        // ],
        // employee: {
        //   OR: [
        //     location !== ""
        //       ? {
        //           location: {
        //             city: { contains: location, mode: "insensitive" },
        //           },
        //         }
        //       : {},
        //     location !== ""
        //       ? {
        //           location: {
        //             province: { contains: location, mode: "insensitive" },
        //           },
        //         }
        //       : {},
        //     searchQuery !== ""
        //       ? {
        //           workExperience: {
        //             some: {
        //               experience: { equals: searchQuery },
        //             },
        //           },
        //         }
        //       : {},
        //     searchQuery !== ""
        //       ? {
        //           skills: {
        //             some: {
        //               name: { contains: searchQuery, mode: "insensitive" },
        //             },
        //           },
        //         }
        //       : {},
        //   ],
        // },
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
export default POST;
