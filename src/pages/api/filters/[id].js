import { sortBy } from "@/Utils/constant";
import prisma from "@/lib/prisma";

const POST = async (req, res) => {
  const { id, searchQuery, location } = req.query;
  const data = req.body;
  const employeeFilters = [];
  const filters = [];
  let sortByDate = {};
  if (data?.sortBy?.includes(sortBy.dateApplied)) {
    sortByDate = {
      orderBy: {
        createdAt: "desc", // or 'desc' based on your needs
      },
    };
  }
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
      // {
      //   workExperience: {
      //     some: {
      //       experience: { equals: searchQuery },
      //     },
      //   },
      // },
      {
        skills: {
          some: {
            name: { contains: searchQuery, mode: "insensitive" },
          },
        },
      }
    );
  }
  if (data?.status?.length > 0) {
    filters.push({
      status: {
        in: data.status,
      },
    });
  }
  if (data?.skills?.length > 0) {
    employeeFilters.push({
      skills: {
        some: {
          name: { contains: data.skills[0], mode: "insensitive" },
        },
      },
    });
  }
  if (data?.educationLevel?.length > 0) {
    employeeFilters.push({
      education: {
        some: {
          educationLevel: {
            in: data.educationLevel,
          },
        },
      },
    });
  }
  console.log("sortByDate", sortByDate, employeeFilters, filters);
  try {
    const job = await prisma.AppliedJobs.findMany({
      ...sortByDate,
      where: {
        jobId: id,

        ...(data.fixedKey ? { [data.fixedKey]: data.fixedValue } : {}),

        AND: [
          ...filters,

          employeeFilters.length > 0
            ? {
                employee: {
                  OR: employeeFilters,
                },
              }
            : {},
        ],
      },

      include: {
        job: true,
        employee: {
          include: {
            skills: true,
            workExperience: true,
            education: true,
            certification: true,
            skills: true,
            user: true,
            achievement: true,
            location: true,
            attachment: true,
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
