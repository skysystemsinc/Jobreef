import React from "react";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Components/ComponentMyChip/ComponentMyChip";
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
  const pValue = useBreakpointValue({ base: 0, lg: 5 });
  return (
    <Box p={pValue}>
      <Heading
        letterSpacing={-1}
        color={"gray.text"}
        fontSize={{ md: "32px", lg:'29px', base: "23px" }}
        fontWeight={600}
        lineHeight={{ md: "42px" , base:'35px'}}
        variant={"p3"}
      >
        We didn’t find any job listings that match your search criteria and
        filters
      </Heading>
      <Box>
        <Heading
          mt={{ md:16 , base:5}}
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
