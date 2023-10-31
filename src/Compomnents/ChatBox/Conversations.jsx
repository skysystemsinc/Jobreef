import {
  Box,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import UnreadMessage from "./UnreadMessage";
import { CiSearch } from "react-icons/ci";
import search from "@/assets/Images/search.svg";

import msg_edit from "@/assets/Images/msg_edit.svg";
import ConversationCard from "../ConversationCard/ConversationCard";
import globalStyles from "@/styles/globalStyles";
const Conversations = () => {
  const conversation = [
    {
      name: "Eva Bond",
      lastMessage:
        "The press release went out! It’s been picked up by a few people... Here’s the link if you...",
      date: "4hr ago",
      unreadCount: "2",
    },
    {
      name: "Eva Bond",
      lastMessage:
        "The press release went out! It’s been picked up by a few people... Here’s the link if you...",
      date: "4hr ago",
      unreadCount: "2",
    },
    {
      name: "Eva Bond",
      lastMessage:
        "The press release went out! It’s been picked up by a few people... Here’s the link if you...",
      date: "4hr ago",
      unreadCount: "2",
    },
    {
      name: "Eva Bond",
      lastMessage:
        "The press release went out! It’s been picked up by a few people... Here’s the link if you...",
      date: "4hr ago",
      unreadCount: "2",
    },
    {
      name: "Eva Bond",
      lastMessage:
        "The press release went out! It’s been picked up by a few people... Here’s the link if you...",
      date: "4hr ago",
      unreadCount: "2",
    },
    {
      name: "Eva Bond",
      lastMessage:
        "The press release went out! It’s been picked up by a few people... Here’s the link if you...",
      date: "4hr ago",
      unreadCount: "2",
    },
  ];
  return (
    <Box
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"gray.700"}
      bg={"gray.800"}
      // height={"100vh"}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
    >
      <Box
        padding={"18px  18px 14px 18px"}
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"9px"}>
          <Heading variant={"p11"} color={"black.400"}>
            Messages
          </Heading>
          <UnreadMessage count={"49"} />
        </Box>
        <Box>
          <Image src={msg_edit.src} width={"30px"} />
        </Box>
      </Box>
      <Box padding={"0px 18px"}>
        <InputGroup>
          <InputLeftElement height={"35px"} pointerEvents="none">
            {/* <CiSearch fontSize={"18px"} color="blue.700" /> */}
            <Image src={search.src} width={"16px"} />
          </InputLeftElement>
          <Input
            type="text"
            color={"blue.700"}
            variant={"bg-input"}
            borderRadius={"5px"}
            placeholder="Search"
            sx={{
              height: "35px",
              _placeholder: {
                fontSize: "16px",
                color: "blue.700",
              },
            }}
            // height={"35px"}
          />
        </InputGroup>
      </Box>

      <Box height={"70vh"} overflowY={"scroll"} sx={globalStyles.scrollBar} mt={"15px"}>
        {conversation.map((item, ind) => {
          return (
            <Box key={ind}>
              <ConversationCard data={item} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Conversations;
