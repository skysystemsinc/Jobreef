import prisma from "@/lib/prisma";

const  PUT = async (req, res) => {
    const data = req.body
  try {
    const user = await prisma.EmailPreferences.update({
      where: {
        userId: req.query.id,
      },
      data: {
        ...data,
      },
    });

    res.status(200).json({
      message: "Preference updated successfully",
      data: user,
      success: true,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      success: false,
      message: `Error!`,
    });
  }
};

export default PUT