import globalStyles from "@/styles/globalStyles";
import { Box } from "@chakra-ui/react";
import React from "react";
import LeftTextBox from "./LeftTextBox";
import RightTextBox from "./RightTextBox";

const AllMessages = () => {
  return (
    <Box
      mt={"20px"}
      sx={globalStyles.scrollBar}
      overflowY={"scroll"}
      height={"70vh"}
      border={"1px solid red"}

    >
      <Box>
        <Box>
          <LeftTextBox />
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <RightTextBox />
        </Box>
      </Box>
    </Box>
  );
};

export default AllMessages;
