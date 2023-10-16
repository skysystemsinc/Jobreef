import { Box, Checkbox, Heading } from "@chakra-ui/react";
import React from "react";

const SortBy = () => {
  return (
    <Box
      borderRadius={"8px"}
      width={"281px"}
      border={"1px solid"}
      bg={"bg.800"}
      borderColor={"gray.light"}
    >
      <Box p={"20px"}>
        <Heading variant={"p7"} color={"gray.text"}>
          Sort Candidates By
        </Heading>
        <Box>
          <Box mt={"16px"}>
            <Checkbox
              borderColor={"black.200"}
              borderRadius={"8px"}
              size="md"
              rounded={"sm"}
              colorScheme="blue"
            >
              <Heading color={"blue.500"} variant={"p4"}>Date Applied</Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              borderColor={"black.200"}
              borderRadius={"8px"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Relevance</Heading>
            </Checkbox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SortBy;
