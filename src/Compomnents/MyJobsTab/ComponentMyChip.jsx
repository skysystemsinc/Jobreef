import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const ComponentMyChip = ({ chipStyle, label }) => {
  return (
    <Box
      p={"2px 10px 6px 10px"}
      borderRadius={"5px"}
      background="rgba(44, 165, 195, 0.10)"
      display={"inline-block"}
      
    >
      <Heading fontSize={"12px"} color={"gray.text"} variant={"p9"}>
        {label}
      </Heading>
    </Box>
  );
};

export default ComponentMyChip;
