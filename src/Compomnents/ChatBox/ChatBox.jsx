import { Box } from "@chakra-ui/react";
import React from "react";
import Conversations from "./Conversations";
import Messages from "./Messages";

const ChatBox = () => {
  return (
    <Box gap={"30px"} display={"flex"} >
      <Box  flex={"25%"}>
        <Conversations />
      </Box>
      <Box flex={"70%"}>
        <Messages />
      </Box>
    </Box>
  );
};

export default ChatBox;
