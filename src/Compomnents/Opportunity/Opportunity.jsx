import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

const Opportunity = () => {
  return (
    <Box
      py={{md: "40px", base:"30px"}}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      bg={"blue.200"}
    >
      <Heading
        className="sora"
        mb="5px"
        fontWeight={700}
        color={"gray.text"}
        variant={"h1"}
      >
        Find Opportunity
        <Box mx={"10px"} as="span" color={"blue.500"}>
          Here
        </Box>
      </Heading>
      <Heading
        maxW={"390px"}
        lineHeight={"25px"}
        color={"gray.text"}
        fontWeight={400}
        textAlign={"center"}
        mt={"5px"}
        mb={"13px"}
        variant={"p11"}
      >
        Elevate Your Career With A Personalized Job Search Experience
      </Heading>
      <Button
        width={"max-content"}
        px={{md: "50px", base:"35px"}}
        variant={"blue-btn"}
        fontWeight={700}
      >
        Search Jobs
      </Button>
    </Box>
  );
};

export default Opportunity;
