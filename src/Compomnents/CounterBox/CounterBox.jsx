import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import icon from "@/assets/Images/jobCounter.svg";
const CounterBox = ({icon,counterVal , name}) => {
  return (
    <Box 
    display={"flex"}
    alignItems={"center"}
    gap={"17px"}
    px={"5px"}
    >
      <Image  width={{ md: "65px", base:"50px"}} src={icon} />
      <Box>
        <Heading color={"blue.500"} fontWeight={500} variant={"p4"}> {name}</Heading>
        <Heading color={"blue.500"} fontWeight={700} variant={"p6"}> {counterVal} + </Heading>
      </Box>
    </Box>
  );
};

export default CounterBox;
