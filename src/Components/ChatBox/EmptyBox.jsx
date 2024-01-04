import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const EmptyBox = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"596px"}>
      <Heading color={"black.100"} variant={"h1"}>Choose Conversations</Heading>
    </Box>
  );
};

export default EmptyBox;
