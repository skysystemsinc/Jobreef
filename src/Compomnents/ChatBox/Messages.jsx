import { Box } from "@chakra-ui/react";
import React from "react";
import MessageHeader from "./MessageHeader";
import AllMessages from "./AllMessagesa";
import ChatTextBox from "./ChatTextBox";

const Messages = () => {
  return (
    <Box
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"gray.700"}
      bg={"gray.800"}
      padding={"20px 30px 20px 30px"}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
    >
      <MessageHeader />
      <AllMessages />
      <ChatTextBox />
    </Box>
  );
};

export default Messages;
