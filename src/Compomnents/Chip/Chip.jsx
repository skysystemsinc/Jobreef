import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Chip = ({ label }) => {
  return (
    <Box
      width={"max-content"}
      p={{ md: "6px 103px 9px 17px", base: "6px 13px 9px 17px" }}
      borderRadius={" 5px"}
      background="rgba(44, 165, 195, 0.10)"
    >
      <Heading fontSize={"12px"} color={"gray.text"} variant={"p9"}>
        {label}
      </Heading>
    </Box>
  );
};

export default Chip;
