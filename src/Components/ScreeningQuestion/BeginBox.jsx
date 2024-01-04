import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { ScreenQuestionTimeline } from "../ScreenQuestionTimeline/ScreenQuestionTimeline";

const BeginBox = ({ setIsBegin }) => {
  return (
    <Box
      border={"1px solid"}
      borderColor={"gray.700"}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
      width={{ md: "70%", base: "90%" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      borderRadius={"5px"}
      pt={{ md: "70px", base:"40px"}}
      pb={{ md: "70px", base:"40px"}}
      
      mt={"70px"}
      px={"20px"}
      mx={"auto"}
      bg={"white.100"}
    >
      {/* <ScreenQuestionTimeline /> */}
      <Box textAlign={"center"}>
        <Heading maxW={"480px"} fontWeight={500} variant={"p6"}>
          You are required to complete a quick questionnaire to submit your
          application for this job. Please click Begin when you are ready.
        </Heading>
        <Button
          onClick={() => setIsBegin(true)}
          mt={{ md: "70px", base:'30px'}}
          variant={"blue-btn"}
        >
          Begin
        </Button>
      </Box>
    </Box>
  );
};

export default BeginBox;
