import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { ScreenQuestionTimeline } from "../ScreenQuestionTimeline/ScreenQuestionTimeline";
import BeginBox from "./BeginBox";

const ScreeningQuestion = () => {
  return (
    <Box
      minH={"100vh"}
    //   display={"flex"}
      justifyContent={"center"}
      
    //   alignItems={"center"}
    >
      {/* <BeginBox /> */}
        <ScreenQuestionTimeline />

    </Box>
  );
};

export default ScreeningQuestion;
