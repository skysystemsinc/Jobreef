import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import one from "@/assets/Images/one.svg";

const WorkCard = ({ count, icon, title, decs, iconWidth, boxStyle }) => {
  return (
    <Box
      boxShadow={" 0px 6px 4px 0px rgba(0, 0, 0, 0.10)"}
      borderRadius={"5px"}
      padding={"20px"}
      position={"relative"}
      bg={"blue.500"}
      mb={"15px"}
      sx={boxStyle}
    >
      <Heading
        top={"14px"}
        right={"45px"}
        color={"blue.text"}
        fontWeight={700}
        className="sora"
        position={"absolute"}
        variant={"h4"}
        // as={"h4"}
      >
        {count}
      </Heading>
      <Image mb={"20px"} src={icon} width={{ md: "55px", base: "45px" }} />
      <Heading
        as={"h5"}
        mb={"5px"}
        color={"white.100"}
        fontWeight={700}
        variant={"p5"}
      >
        {title}
      </Heading>
      <Heading as={"p"} color={"white.100"} variant={"p5"}>
        {decs}
      </Heading>
    </Box>
  );
};

export default WorkCard;
