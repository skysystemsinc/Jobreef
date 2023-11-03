import React from "react";
import circle_file from "@/assets/Images/circle_file.svg";
import filled_tick from "@/assets/Images/filled_tick.svg";
import replace from "@/assets/Images/replace.svg";
import { Box, Heading, Image, Progress } from "@chakra-ui/react";
import FileReplaceButton from "../FileReplaceButton/FileReplaceButton";
import PdfViewer from "../PdfViewer/PdfViewer";
import { AiOutlineDelete } from "react-icons/ai";
const UploadedCard = ({
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
      borderColor={"blue.500"}
      padding={"10px 20px"}
      borderRadius={"12px"}
      bg={"white.100"}
      sx={boxStyle}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        // alignItems={"center"}
        // border={"1px solid red"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"15px"}>
          <Image width={"32px"} src={circle_file.src} />

          <Box>
            <Heading mb={"2px"} variant={"p11"} color={"blue.300"}>
              {fileName}
            </Heading>
          </Box>
        </Box>
        {crossIcon ? (
          <Box
            cursor={"pointer"}
            onClick={handleDelete}
            color={"gray.text"}
            transition={".5s"}
            _hover={{ color: "blue.500" }}
            fontSize={"18px"}
          >
            {crossIcon}
          </Box>
        ) : (
          <Box
            cursor={"pointer"}
            onClick={handleDelete}
            color={"blue.500"}
            transition={".5s"}
            _hover={{ color: "blue.600" }}
            fontSize={"22px"}
          >
            <AiOutlineDelete />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UploadedCard;
