import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import homePerson from "@/assets/Images/home-person.svg";
import JobSearchBox from "../JobSearchBox/JobSearchBox";
const HeroSection = () => {
  return (
    <Box pt="100px" pl={"100px"} pb={"60px"} minH={"400px"} position={"relative"} bg={"blue.500"} >
      <Box>
        <Heading fontWeight={400} mb={"9px"} className="sora" variant={"h2"} color={"white.100"}>
          {" "}
          Find Opportunity Here.{" "}
        </Heading>
        <Heading
          lineHeight={"26px"}
          maxW={"420px"}
          fontWeight={300}
          className="sora"
          variant={"p11"}
          color={"white.100"}
          mb={'16px'}
        >
          {" "}
          Elevate Your Career With A Personalized Job Search Experience
        </Heading>
        <JobSearchBox />
      </Box>

      <Box  zIndex={1} position={"absolute"} right={"15%"} width={"400px"} top={"5%"}>

        <Image src={homePerson.src} />
      </Box>
    </Box>
  );
};

export default HeroSection;
