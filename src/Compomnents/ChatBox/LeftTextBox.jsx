import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import UnreadMessage from "../ChatBox/UnreadMessage";
const LeftTextBox = ({ data }) => {
  return (
    <Box
      mb={"10px"}
      bg={"transparent"}
      maxW={"500px"}
      transition={".5s"}
      pb="10px"
    >
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Box display={"flex"} alignItems={"flex-start"} gap={"10px"}>
          <Image
            src={data.avatar}
            width={"30px"}
            height={"30px"}
            objectFit={"cover"}
            borderRadius={"100px"}
          />

          <Heading fontWeight={700} color={"blue.300"} variant={"p4"}>
            {data.name}
          </Heading>
        </Box>
        <Heading color={"blue.300"} variant={"p9"}>
          {data.createdAt}
        </Heading>
      </Box>

      <Heading margin={"0px 0px 0px 50px"} color={"blue.300"} variant={"p12"}>
        {data.text}
      </Heading>
    </Box>
  );
};

export default LeftTextBox;
