import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import UnreadMessage from "../ChatBox/UnreadMessage";
const LeftTextBox = ({ data }) => {
  return (
    <Box mb={"10px"} maxW={"500px"} transition={".5s"} pb="10px">
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

      <Box
        margin={"0px 0px 0px 50px"}
        px={4}
        pt={2}
        borderRadius={"5px"}
        bg={"blue.500"}
        boxShadow={
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
        }
        pb={"10px"}
      >
        <Heading fontWeight={700} color={"white.100"} variant={"p4"}>
          Subject
        </Heading>
        <Divider my={"8px"}/>
        <Heading color={"white.100"} variant={"p12"}>
          {data.text}
        </Heading>
      </Box>
    </Box>
  );
};

export default LeftTextBox;
