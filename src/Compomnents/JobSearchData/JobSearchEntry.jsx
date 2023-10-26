
import { Box, Circle, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiSearch, FiMapPin } from "react-icons/fi";
import ComponentMyChip from "../MyJobsTab/ComponentMyChip";
const JobSearchEntry = () => {
  return (
    <Box style={{ marginTop: 100}} mr={20}>
    <Heading
    variant={"h1"}
    textAlign={"end"}
    gap={"23px"}
    // mb={{ "2xl": "30px", base: "16px" }}
    color={"gray.400"}
    fontWeight={400}
    fontSize={{lg:'70px', md:'50px',base:'30px'}}
    
    >
        Inspire Careers
    </Heading>
    <Heading
    variant={"h1"}
    textAlign={"end"}
    gap={"23px"}
    mb={{ "2xl": "30px", base: "16px" }}
    color={"gray.700"}
    fontSize={{lg:'70px', md:'50px',base:'30px'}}
    fontWeight={700}
    letterSpacing={-1}
    >
        Unite Opportunities
    </Heading>
</Box>      
  )
}

export default JobSearchEntry