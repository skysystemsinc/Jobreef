import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Date = ({ data }) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"15px"} my={"20px"}>
      <Box height={"1px"} bg={"white.200"} width={"100%"}></Box>
      <Heading fontWeight={700} variant={"p4"}>{data}</Heading>
      <Box height={"1px"} bg={"white.200"} width={"100%"}></Box>
    </Box>
  );
};

export default Date;
