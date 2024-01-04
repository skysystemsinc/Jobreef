import React from "react";
import circle_file from "@/assets/Images/circle_file.svg";
import filled_tick from "@/assets/Images/filled_tick.svg";
import replace from "@/assets/Images/replace.svg";
import { Box, Heading, Image, Progress } from "@chakra-ui/react";
import FileReplaceButton from "../FileReplaceButton/FileReplaceButton";
import PdfViewer from "../PdfViewer/PdfViewer";
import { AiOutlineDelete } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
const AttachmentCard = ({
  uploadProgress,
  crossIcon,
  data,
  boxStyle,
  handleDelete,
  fileSize,
  fileName,
  handleEvent,
  pdfPreview,
}) => {
  const fileSizeInKB = fileSize / 1024;
  const sizeDisplay =
    fileSizeInKB >= 1024
      ? `${parseInt(fileSizeInKB / 1024)} MB`
      : `${parseInt(fileSizeInKB)} KB`;

  return (
    <Box
      border="1px solid "
      borderColor={"white.200"}
      padding={"10px 20px"}
      borderRadius={"12px"}
      bg={"white.100"}
    //   sx={boxStyle}
      boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        // alignItems={"center"}
        // border={"1px solid red"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"15px"}>
          <Image width={"32px"} src={circle_file.src} />

          <Box>
            <Heading  fontWeight={700} variant={"p4"} color={"blue.300"}>
              resume-1.pdf
            </Heading>
            <Heading mb={"2px"} variant={"p1"} color={"blue.300"}>
              200 KB
            </Heading>
          </Box>
        </Box>

        <Box
          cursor={"pointer"}
          onClick={handleDelete}
          color={"blue.500"}
          transition={".5s"}
          _hover={{ color: "blue.600" }}
          fontSize={"22px"}
        >
          <FiDownload />
        </Box>
      </Box>
    </Box>
  );
};

export default AttachmentCard;
