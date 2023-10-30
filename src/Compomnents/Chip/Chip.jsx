import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Chip = ({ label }) => {
  return (
    <Box
      width={"max-content"}
      p={"6px 10px 7px 14px"}
      borderRadius={" 5px"}
      background="rgba(44, 165, 195, 0.10)"
    >
      <Heading fontSize={"11px"} color={"gray.text"} variant={"p9"}>
        {label}
      </Heading>
    </Box>
  );
};

export default Chip;
