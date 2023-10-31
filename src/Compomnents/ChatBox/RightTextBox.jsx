import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import UnreadMessage from "../ChatBox/UnreadMessage";
const RightTextBox = () => {
  return (
    <Box bg={"transparent"} mb={"10px"} maxW={"500px"} transition={".5s"} pb="10px">
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Heading fontWeight={700} color={"blue.300"} variant={"p4"}>
          You
        </Heading>

        <Heading color={"blue.300"} variant={"p9"}>
          Thursday 10:16am
        </Heading>
      </Box>

      <Heading bg={"blue.800"} padding={"10px 14px"} borderRadius={"8px"} color={"blue.300"} variant={"p12"}>
        Hey Jacob. We’re working on a dashboard prototype and love your work.
        Are you open to new projects?
      </Heading>
    </Box>
  );
};

export default RightTextBox;
