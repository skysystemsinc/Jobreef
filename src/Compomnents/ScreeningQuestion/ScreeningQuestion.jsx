import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { ScreenQuestionTimeline } from "../ScreenQuestionTimeline/ScreenQuestionTimeline";
import BeginBox from "./BeginBox";

const ScreeningQuestion = () => {
  const [isBegin, setIsBegin] = useState(false);
  return (
    <Box
      minH={{ md: "100vh", base:"100vh"}}
      //   display={"flex"}
      justifyContent={"center"}

      //   alignItems={"center"}
    >
      {isBegin ? <ScreenQuestionTimeline /> : <BeginBox  setIsBegin={setIsBegin}/>}
    </Box>
  );
};

export default ScreeningQuestion;
