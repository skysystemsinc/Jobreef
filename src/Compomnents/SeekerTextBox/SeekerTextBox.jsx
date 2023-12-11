import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const SeekerTextBox = () => {
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
      <Box maxWidth={"420px"} textAlign={{ md: "center", base: "start" }}>
        <Heading
          mb={{ md: "10px", base: "3px" }}
          color={"gray.600"}
          variant={"h2"}
        >
          Improve Your Prospects
        </Heading>
        <Heading textAlign={"start"} color={"gray.600"} variant={"p5"}>
          Use our suite of jobseeker tools and resources to take your career to
          the next level!
        </Heading>
      </Box>
    </Box>
  );
};

export default SeekerTextBox;
