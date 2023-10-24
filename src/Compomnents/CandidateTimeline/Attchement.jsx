import React from "react";
import UploadBox from "../UploadBox/UploadBox";
import { Box } from "@chakra-ui/react";

const Attachments = () => {
  const list = [
    "The acceptable file formats are PDF, Word, PNG, and JPEG files",
    "This will be included in submitted job applications",
  ];
  return (
    <Box>
      <Box sx={{ mb: "10px" }}>
        <UploadBox titie={"Upload Resume File"} list={list} />
      </Box>
      <Box>
        <UploadBox
          list={list}
          titie={"Upload Additional Files (e.g. Cover Letter or ID)"}
        />
      </Box>
    </Box>
  );
};

export default Attachments;
