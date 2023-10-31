import React from "react";
import circle_file from "@/assets/Images/circle_file.svg";
import filled_tick from "@/assets/Images/filled_tick.svg";
import replace from "@/assets/Images/replace.svg";
import { Box, Heading, Image, Progress } from "@chakra-ui/react";
import FileReplaceButton from "../FileReplaceButton/FileReplaceButton";
import PdfViewer from "../PdfViewer/PdfViewer";
const UploadedCard = ({
  uploadProgress,
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
      padding={"15px 20px"}
      borderRadius={"12px"}
      bg={"white.100"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        // border={"1px solid red"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"15px"}>
          <Image src={circle_file.src} />
          <Box>
            <Heading mb={"2px"} variant={"p11"} color={"blue.300"}>
              {fileName}
            </Heading>
            <Heading variant={"p4"} color={"blue.300"}>
              {sizeDisplay}
            </Heading>
          </Box>
        </Box>
        <Box>
          <Image width={"22px"} src={filled_tick.src} />
        </Box>
      </Box>

      <Box mt={"10px"}>
        <Box
          justifyContent={"center"}
          display={"flex"}
          alignItems={"flex-start"}
          gap={"14px"}
        >
          <Box mt={"7px"} width={"92%"}>
            {pdfPreview ? (
              <Box>
                <PdfViewer pdfUrl={pdfPreview} />
                {/* <Image
                  // border={"1px solid red"}
                  borderRadius={"7px"}
                  width={"90%"}
                  mx={"auto"}
                  boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
                  src={pdfPreview}
                /> */}
              </Box>
            ) : (
              <Progress
                value={uploadProgress}
                height={"6px"}
                size="xs"
                borderRadius={"8px"}
                colorScheme="blue"
              />
            )}
            <FileReplaceButton
              btnLabelStyle={{ mt: "21px" }}
              uploadIcon={replace}
              handleEvent={handleEvent}
              label={"Replace"}
            />
          </Box>
          {pdfPreview ? null : (
            <Heading fontWeight={700} variant={"p4"} color={"blue.300"}>
              {uploadProgress}%
            </Heading>
          )}
        </Box>

        <Box width={"100%"} display={"flex"} justifyContent={"center"}></Box>
      </Box>
    </Box>
  );
};

export default UploadedCard;
