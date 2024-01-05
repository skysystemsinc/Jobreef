import { Link } from "@chakra-ui/next-js";
import { Box, Heading } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

const HistoryCard = () => {
  return (
    <Box
      padding={"20px"}
      height={"max-content"}
      borderColor={"white.200"}
      boxShadow={
        "0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
      }
      borderRadius={"8px"}
      bg={"rgba(44, 165, 195, 0.10)"}
      mb={"10px"}
    >
      <Heading fontWeight={600} color={"black.100"} variant={"p11"}>
        Previous Application
      </Heading>
      <Heading variant={"p4"} color={"gray.text"} mt={{ md: "8px", base:"3px"}} mb={{ md: "5px", base:"3px"}}>
        Database engineer - {moment().format("YYYY/MM/DD")} - {" "}
        <Link color={"blue.500"} href={"/"}>
          View
        </Link>
      </Heading>
      <Heading variant={"p4"} color={"gray.text"}>
        Database engineer - {moment().format("YYYY/MM/DD")} - {" "}
        <Link color={"blue.500"} href={"/"} textDecoration={"underline"}>
          View
        </Link>
      </Heading>
    </Box>
  );
};

export default HistoryCard;
