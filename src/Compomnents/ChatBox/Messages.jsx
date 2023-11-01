import { Box } from "@chakra-ui/react";
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
      padding={{ lg:"20px 30px 20px 30px" , base:"20px 13px 20px 13px"}}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
    >
      {activeConversation ? (
        <>
          <MessageHeader />
          <AllMessages />
          <ChatTextBox />
        </>
      ) : (
        <EmptyBox />
      )}
    </Box>
  );
};

export default Messages;
