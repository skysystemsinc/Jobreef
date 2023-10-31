import globalStyles from "@/styles/globalStyles";
import { Box } from "@chakra-ui/react";
import React from "react";
import LeftTextBox from "./LeftTextBox";
import RightTextBox from "./RightTextBox";
import Date from "./Date";

const AllMessages = () => {
  return (
    <Box
      my={"20px"}
      sx={globalStyles.scrollBar}
      overflowY={"scroll"}
      height={"53vh"}
      // border={"1px solid red"}

    >
      <Box>
        <Box>
          <LeftTextBox />
        </Box>
        <Date data={"Today"}/>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <RightTextBox />
        </Box>
      </Box>
    </Box>
  );
};

export default AllMessages;
