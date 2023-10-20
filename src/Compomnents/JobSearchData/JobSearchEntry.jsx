
import { Box, Circle, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiSearch, FiMapPin } from "react-icons/fi";
import ComponentMyChip from "../MyJobsTab/ComponentMyChip";
const JobSearchEntry = () => {
  return (
    <Box style={{ marginTop: 100}}>
    <Heading
    variant={"h1"}
    textAlign={"end"}
    gap={"23px"}
    mb={{ "2xl": "30px", base: "16px" }}
    color={"gray.400"}
    fontSize={40}
    >
        Inspire Careers
    </Heading>
    <Heading
    variant={"h1"}
    textAlign={"end"}
    gap={"23px"}
    mb={{ "2xl": "30px", base: "16px" }}
    color={"gray.700"}
    letterSpacing={-1}
    fontSize={50}
    >
        Unite Opportunities
    </Heading>
</Box>      
  )
}

export default JobSearchEntry