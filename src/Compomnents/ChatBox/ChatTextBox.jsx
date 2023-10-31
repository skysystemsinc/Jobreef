import { Box, Button, Textarea } from "@chakra-ui/react";
import React from "react";

const ChatTextBox = () => {
  return (
    <Box position={"relative"}>
      <Textarea
        placeholder={"Send a message"}
        size="sm"
        variant={"simple"}
        resize={"none"}
      />
      <Button 
      position={"absolute"}
      bottom={"10px"}
      right={"10px"}
      width={"max-content"} variant={"blue-btn"}>Send</Button>
    </Box>
  );
};

export default ChatTextBox;
