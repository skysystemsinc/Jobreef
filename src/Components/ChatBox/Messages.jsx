import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import MessageHeader from "./MessageHeader";
import AllMessages from "./AllMessagesa";
import ChatTextBox from "./ChatTextBox";
import EmptyBox from "./EmptyBox";
import { useSelector } from "react-redux";

const Messages = () => {
  const activeConversation = useSelector((state) => state.chat.value.active);

  return (
    <Box
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"gray.700"}
      bg={"gray.800"}
      padding={{ lg: "0px 0px 20px 0px", base: "0px 0px 20px 0px" }}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
    >
      {activeConversation ? (
        <>
          <MessageHeader />
          <Box px={"15px"}>
            <AllMessages />
            <ChatTextBox />
          </Box>
        </>
      ) : (
        <EmptyBox />
      )}
    </Box>
  );
};

export default Messages;
