import { Box, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import Conversations from "./Conversations";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const ChatBox = ({ disableEdit }) => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 992px)");
  
  const activeConversation = useSelector((state) => state.chat.value.active);

  const [toggle, setToggle] = useState(false);
  console.log("activeConversation && isSmallerThe500", activeConversation && isSmallerThe500)
  return (
    <Box
      gap={"30px"}
      display={"flex"}
      // border={"1px solid red"}
      flexDirection={{ lg: "row", base: "column" }}
    >
      {activeConversation && isSmallerThe500 ? (
        <Box
          flex={{ lg: "70%", base: "100%" }}
          display={{ lg: "none", base: "block" }}
        >
          <Messages />
        </Box>
      ) : (
        <Box flex={{ lg: "35%", base: "100%" }}>
          <Conversations disableEdit={disableEdit} />
        </Box>
      )}
      <Box
        flex={{ lg: "70%", base: "100%" }}
        display={{ lg: "block", base: "none" }}
      >
        <Messages />
      </Box>
    </Box>
  );
};

export default ChatBox;
