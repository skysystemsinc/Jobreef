import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { ScreenQuestionTimeline } from "../ScreenQuestionTimeline/ScreenQuestionTimeline";
import CheckBox from "../CheckBox/CheckBox";

const Question = ({ showCheckBox, qNo, nextStep, handlePrevious }) => {
  return (
    <Box
      border={"1px solid"}
      borderColor={"gray.700"}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
      width={{ md: "70%", base: "98%" }}
      mx={"auto"}
      bg={"white.100"}
      borderRadius={"5px"}
      p={{ md: "30px 40px 10px 40px", base: "20px 15px 0px 15px" }}
    >
      <Box>
        <Heading mb={"16px"} variant={"p6"} fontWeight={600}>
          {qNo}. Question #{qNo}
        </Heading>
        {showCheckBox ? (
          <Box ml={"20px"}>
            <Box mb={"10px"}>
              <CheckBox label={"Yes"} />
            </Box>
            <CheckBox label={"No"} />
          </Box>
        ) : (
          <Input
            mt={"40px"}
            variant={"bg-input"}
            placeholder="Enter your response here"
          />
        )}
      </Box>

      <Flex
        width={"100%"}
        justify="space-between"
        pb={"30px"}
        mt={{ md: "100px", base: "50px" }}
      >
        <Button variant={"outline-blue"} onClick={handlePrevious}>
          {"Previous"}
        </Button>
        <Button variant={"blue-btn"} onClick={nextStep}>
          {"Next"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Question;
