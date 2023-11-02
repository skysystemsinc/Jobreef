import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import UnreadMessage from "../ChatBox/UnreadMessage";
const RightTextBox = ({ data }) => {
  return (
    <Box
      bg={"transparent"}
      mb={"10px"}
      maxW={"500px"}
      transition={".5s"}
      pb="10px"
    >
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Heading fontWeight={700} color={"blue.300"} variant={"p4"}>
          You
        </Heading>

        <Heading color={"blue.300"} variant={"p9"}>
          {data.createdAt}
        </Heading>
      </Box>

      <Heading
        bg={"blue.800"}
        padding={"10px 14px"}
        borderRadius={"8px"}
        color={"blue.300"}
        boxShadow={
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
        }
        variant={"p12"}
      >
        {data.text}
      </Heading>
    </Box>
  );
};

export default RightTextBox;
