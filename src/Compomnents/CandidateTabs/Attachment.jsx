import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { FiDownload } from "react-icons/fi";
import AttachmentCard from "../AttachmentCard/AttachmentCard";

const Attachment = () => {
  return (
    <Box
      bg={"white.100"}
      boxShadow={
        "0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
      }
      borderRadius={"0px 8px 8px 8px"}
      p={{ md: "20px 30px", base: "20px 15px 20px 15px" }}
    >
      <Flex justifyContent={"flex-end"}>
        <Heading
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          fontWeight={500}
          color={"blue.500"}
          as={"p"}
          variant={"p4"}
          mt={"10px"}
          mb={"20px"}
          cursor={"pointer"}
        >
          <FiDownload />
          Download All Attachments
        </Heading>
      </Flex>
      <Box>
        <AttachmentCard/>
      </Box>
    </Box>
  );
};

export default Attachment;
