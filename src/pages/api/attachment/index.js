import prisma from "@/lib/prisma";
import { de } from "date-fns/locale";

const POST = async (req, res) => {
  const data = req.body;
  const body = {
    resume: data.resume,
    additional: data.additional,
    employeeId: data.employeeId,
  };
  try {
    if (data.id) {
      const update = await prisma.Attachment.update({
        where: {
          id: data.id,
        },
        data: body,
      });
      res.status(201).json({
        message: "attachment created successfully",
        data: update,
        success: true,
      });
    } else {
      const created = await prisma.Attachment.create({
        data: body,
      });
      res.status(201).json({
        message: "attachment update successfully",
        data: created,
        success: true,
      });
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err,
      success: false,
      message: "internal server error",
    });
  }
};
export default POST;
