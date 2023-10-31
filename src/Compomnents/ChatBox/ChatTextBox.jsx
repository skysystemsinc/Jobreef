import { Box, Textarea } from "@chakra-ui/react";
import React from "react";

const ChatTextBox = () => {
  return (
    <Box>
      <Textarea
        // value={state}
        // onChange={setState}

        placeholder={"Send a message"}
        size="sm"
        // readOnly={readOnly}

        variant={"simple"}
        resize={"none"}
      />
    </Box>
  );
};

export default ChatTextBox;
