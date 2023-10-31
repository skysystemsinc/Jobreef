import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import UnreadMessage from "../ChatBox/UnreadMessage";
const MessageHeader = () => {
  return (
    <Box
      bg={"transparent"}
      transition={".5s"}
      cursor={"pointer"}
    //   _hover={{
    //     backgroundColor: "blue.800",
    //   }}
      //   padding={"14px 18px 14px 28px"}
      borderBottom={"1px solid"}
      borderColor={"white.200"}
      pb="15px"
    >
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          <Image
            src={profile.src}
            width={"40px"}
            height={"40px"}
            objectFit={"cover"}
            borderRadius={"100px"}
          />
          <Box>
            <Heading fontWeight={700} color={"blue.300"} variant={"p4"}>
              Anita Cruz
            </Heading>
            <Heading color={"blue.300"} variant={"p12"}>
              Auckland, New ZealandF
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageHeader;
