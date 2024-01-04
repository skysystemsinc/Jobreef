import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import UnreadMessage from "../ChatBox/UnreadMessage";
const ConversationCard = ({ data }) => {
  return (
    <Box
      bg={"transparent"}
      transition={".5s"}
      cursor={"pointer"}
      _hover={{
        backgroundColor: "blue.800",
      }}
      padding={"14px 18px 14px 28px"}
      borderBottom={"1px solid"}
      borderColor={"white.200"}
    >
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Box display={"flex"} alignItems={"flex-start"} gap={"10px"}>
          <Image
            src={data.profilePic}
            width={"35px"}
            height={"35px"}
            objectFit={"cover"}
            borderRadius={"100px"}
          />

          <Box>
            <Heading fontWeight={700} color={"blue.300"} variant={"p4"}>
              {data.name}
            </Heading>
            <Heading
              overflow={"hidden"}
              // maxW={"100%"}
              textOverflow={"ellipsis"}
              // whiteSpace={"nowrap"}
              color={"blue.300"}
              variant={"p12"}
              fontWeight={600}
            >
              Job Title
            </Heading>
          </Box>
          <UnreadMessage count={data.unreadCount} />
        </Box>

        <Heading color={"blue.300"} variant={"p12"}>
          {data.date}
        </Heading>
      </Box>
      <Heading
        overflow={"hidden"}
        mt={"9px"}
        maxW={"100%"}
        textOverflow={"ellipsis"}
        // whiteSpace={"nowrap"}
        color={"blue.300"}
        variant={"p12"}
      >
        {data.lastMessage}
      </Heading>
    </Box>
  );
};

export default ConversationCard;
