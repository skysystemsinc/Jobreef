import globalStyles from "@/styles/globalStyles";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CheckBox from "../CheckBox/CheckBox";

const QuestionCard = () => {
  return (
    <Box
      border={"1px solid "}
      borderColor={"white.200"}
      p={"20px"}
      borderRadius={"5px"}
      boxShadow={globalStyles.boxShadowV1}
      mb={"25px"}
    >
      <Heading color={"gray.text"} mb={"16px"} variant={"p5"} fontWeight={600}>
        1. Question 
      </Heading>
      <Box ml={"13px"}>
        <CheckBox label={"Selected Answer"} />
      </Box>
    </Box>
  );
};

export default QuestionCard;
