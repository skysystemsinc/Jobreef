import prisma from "@/lib/prisma";

const POST = async (req, res) => {
  const { id } = req.query;

  const transaction = await prisma.$transaction([
    prisma.Skills.deleteMany({
      where: {
        employeeId: id,
      },
    }),
    prisma.Skills.createMany({
      data: req.body,
    }),
  ]);
  const skills = await prisma.Skills.findMany({
    where: {
      employeeId: id,
    },
  });
  console.log("skills", skills);
  res.status(200).json({
    data: skills,
    message: "Skills added successfully",

    success: true,
  });
};
export default POST;
