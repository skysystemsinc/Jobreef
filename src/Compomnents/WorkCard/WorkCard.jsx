import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import one from "@/assets/Images/one.svg";

const WorkCard = ({ count, icon, title, decs , iconWidth}) => {
  return (
    <Box
      boxShadow={" 0px 6px 4px 0px rgba(0, 0, 0, 0.10)"}
      borderRadius={"5px"}
      padding={"20px"}
      position={"relative"}
      bg={"blue.500"}
      mb={"15px"}
    >
      <Image
        width={{ md: "17px", base: "15px" }}
        top={"29px"}
        right={"45px"}
        position={"absolute"}
        src={count}
        sx={iconWidth}
      />
      <Image mb={"20px"} src={icon} width={{ md: "55px", base: "45px" }} />
      <Heading mb={"5px"} color={"white.100"} fontWeight={700} variant={"p5"}>
        {title}
      </Heading>
      <Heading color={"white.100"} maxW={"200px"} variant={"p5"}>
        {decs}
      </Heading>
    </Box>
  );
};

export default WorkCard;
