import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import IconButton from "../IconButton/IconButton";
import grayArrow from "@/assets/Images/gray-arrow-down.svg";

const NextPrevBtn = ({ handleNext,handlePrev }) => {
  return (
    <Flex
      width={"100%"}
      justify="space-between"
      pb={"30px"}
      gap={4}
    >
      <IconButton
        handleEvent={handlePrev}
        iconSize={"21px"}
        icon={grayArrow}
        btnLabel={"Previous"}
        variant={"unstyled"}
      />

      <Button variant={"blue-btn"} onClick={handleNext}>
        {"Next"}
      </Button>
    </Flex>
  );
};

export default NextPrevBtn;
