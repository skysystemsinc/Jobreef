import React from 'react'
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";

import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Label,
    Image,
    Select,
    useBreakpointValue,
  } from "@chakra-ui/react";
const ShowEmptyResult = () => {
    const pValue = useBreakpointValue({ base: 0, lg: 10 });
  return (
    <Box p={pValue}>
      <Heading letterSpacing={-1} color={"gray.text"} variant={"p3"}>
        We didn’t find any job listings that match your search criteria and
        filters
      </Heading>
      <Box>
        <Heading
          mt={16}
          mb={5}
          display={"flex"}
          color={"gray.text"}
          variant={"p4"}
        >
          1.{" "}
          <Heading color={"gray.text"} variant={"p4"}>
            Expand Your Search Keywords: Try using different or generalised
            keywords that might capture a wider range of job listings in your
            desired field
          </Heading>
        </Heading>
        <Heading mb={5} display={"flex"} color={"gray.text"} variant={"p4"}>
          2.{" "}
          <Heading color={"gray.text"} variant={"p4"}>
            Broaden Your Criteria: To broaden search results, adjust your search
            filters which may lead in search results
          </Heading>
        </Heading>
        <Heading mb={5} display={"flex"} color={"gray.text"} variant={"p4"}>
          3.{" "}
          <Heading color={"gray.text"} variant={"p4"}>
            Check Spelling and Keywords: Ensure that your search terms are
            correctly spelled and that you're using relevant keywords to
            describe the type of job you're looking for
          </Heading>
        </Heading>
      </Box>
    </Box>
  );
};

export default ShowEmptyResult;
