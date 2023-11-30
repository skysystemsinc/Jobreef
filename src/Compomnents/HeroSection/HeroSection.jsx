import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import homePerson from "@/assets/Images/home-person.svg";
import JobSearchBox from "../JobSearchBox/JobSearchBox";
const HeroSection = () => {
  return (
    <Box
      pt={{ lg: "100px", base:"50px"}}
      // pl={"100px"}
      pb={"60px"}
      minH={"400px"}
      bg={"blue.500"}
    >
      <Box
      // border={'1px solid red'}
      position={"relative"}
      mx={"auto"}
      width={{ xl:"max-content", base:"96%"}}
      >
        <Box>
          <Heading
            fontWeight={400}
            mb={{md: "9px", base:'2px'}}
            className="sora"
            variant={"h2"}
            color={"white.100"}
          >
            {" "}
            Find Opportunity Here.{" "}
          </Heading>
          <Heading
            lineHeight={{ sm:  "26px", base:"24px"}}
            maxW={"420px"}
            fontWeight={300}
            className="sora"
            variant={"p11"}
            color={"white.100"}
            mb={"16px"}
          >
            {" "}
            Elevate Your Career With A Personalized Job Search Experience
          </Heading>
          <JobSearchBox />
        </Box>

        <Box
          zIndex={1}
          position={"absolute"}
          right={"0%"}
          width={"400px"}
          top={{xl: "-29%", base:"-20%"}}
          display={{lg:"block", base:"none"}}
        >
          <Image src={homePerson.src} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
