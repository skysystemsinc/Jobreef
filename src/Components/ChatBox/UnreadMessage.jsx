import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const UnreadMessage = ({ count }) => {
  return (
    <Box
      borderRadius={"16px"}
      border={"1px solid"}
      borderColor={"blue.500"}
      padding={"2px 8px 3px 8px"}
      width={"max-content"}
    >
      <Heading fontWeight={600} color={"blue.500"} variant={"p9"}>
        {count}
      </Heading>
    </Box>
  );
};

export default UnreadMessage;
