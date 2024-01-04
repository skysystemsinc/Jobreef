import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { ScreenQuestionTimeline } from "../ScreenQuestionTimeline/ScreenQuestionTimeline";
import blueclick from "@/assets/Images/blueclick.svg";

const CompleteMsg = () => {
  return (
    <Box
      border={"1px solid"}
      borderColor={"gray.700"}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
      // width={{ md: "70%", base: "98%" }}
      width={{ md: "70%", base: "90%" }}

      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      borderRadius={"5px"}
      pt={{ md: "70px", base:"40px"}}
      pb={{ md: "70px", base:"40px"}}
      px={'20px'}
      mt={"20px"}
      
      mx={"auto"}
      bg={"white.100"}
    >
      <Heading
        maxW={"500px"}
      fontWeight={500}
        textAlign={"center"}
        variant={"p6"}
      >
        Your application has been submitted. You may now close this window.
      </Heading>
      <Image
        width={{ md: "60px", base: "40px" }}
        mt={{ md: "40px", base: "30px" }}
        src={blueclick.src}
      />
    </Box>
  );
};

export default CompleteMsg;
