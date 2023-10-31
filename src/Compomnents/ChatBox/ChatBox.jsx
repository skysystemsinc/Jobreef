import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Conversations from "./Conversations";
import Messages from "./Messages";

const ChatBox = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Box
      gap={"30px"}
      display={"flex"}
      flexDirection={{ lg: "row", base: "column" }}
    >
      {toggle ? (
        <Box
          flex={{ lg: "70%", base: "100%" }}
          display={{ lg: "none", base: "block" }}
        >
          <Messages />
        </Box>
      ) : (
        <Box flex={{ lg: "35%", base: "100%" }}>
          <Conversations />
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
