import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { ScreenQuestionTimeline } from "../ScreenQuestionTimeline/ScreenQuestionTimeline";

const BeginBox = () => {
  return (

      <Box
        border={"1px solid"}
        borderColor={"gray.700"}
        boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
        width={{md: "70%", base:"98%"}}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        borderRadius={"5px"}
        pt={"70px"}
        mt={"70px"}

        mx={"auto"}
        pb={"70px"}
        bg={"white.100"}
      >
        {/* <ScreenQuestionTimeline /> */}
        <Box textAlign={"center"}>
          <Heading maxW={"480px"} fontWeight={500} variant={"p6"}>
            You are required to complete a quick questionnaire to submit your
            application for this job. Please click Begin when you are ready.
          </Heading>
          <Button mt={'70px'} variant={"blue-btn"}>Begin</Button>
        </Box>
 
    </Box>
  );
};

export default BeginBox;
