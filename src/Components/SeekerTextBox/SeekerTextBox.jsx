import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const SeekerTextBox = ({ title, subTitle, style }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      mb={{ md: "70px", base: "30px" }}
      mt={{ md: "50px", base: "30px" }}
      px={"10px"}
    >
      <Box maxWidth={"490px"} textAlign={{ md: "center", base: "start" }} sx={ style}>
        <Heading
          mb={{ md: "10px", base: "3px" }}
          color={"gray.600"}
          variant={"h3"}
          className="sora"
        >
          {title}
        </Heading>
        <Heading textAlign={"start"} sx={style} color={"gray.600"} variant={"p5"}>
          {subTitle}
        </Heading>
      </Box>
    </Box>
  );
};

export default SeekerTextBox;
