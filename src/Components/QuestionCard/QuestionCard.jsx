import globalStyles from "@/styles/globalStyles";
import { Box, Checkbox, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import squareTick from "@/assets/Images/greenCheck.svg";
import Chip from "../Chip/Chip";
import { RxCross2 } from "react-icons/rx";
const QuestionCard = ({ right, label }) => {
  const [checked, setchecked] = useState(false);
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
        {right ? (
          <Checkbox size="md" colorScheme="green" defaultChecked>
            <Heading
              variant={"p1"}
              
              margin={"0px"}
            >
              {/* Register as Employer{" "} */}
              {label}
            </Heading>
          </Checkbox>
        ) : (
          <Checkbox
            icon={<RxCross2 />}
            _invalid
            size="md"
            colorScheme="red"
            defaultChecked
          >
            <Heading
              variant={"p1"}
              
              margin={"0px"}
            >
              {/* Register as Employer{" "} */}
              {label}
            </Heading>
          </Checkbox>
        )}
      </Box>
    </Box>
  );
};

export default QuestionCard;
