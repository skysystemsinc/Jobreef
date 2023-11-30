import React from "react";
import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import TeamSlider from "../TeamSlider/TeamSlider";

const AboutUs = () => {
  return (
    <Container mt={{ md:"50px", base:'30px'}} maxW={"5xl"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Heading fontWeight={500} className="sora" variant={"h2"}>
          About Jobreef
        </Heading>
        <Heading
          mb={{md: "35px", base:"25px"}}
          fontWeight={400}
          mt={{ md:"25px", base:"15px"}}
          color={"gray.text"}
          maxW={{md: "57%", base:"100%"}}
          textAlign={"center"}
          variant={"p7"}
        >
          Our mission is to improve quality of life through modern technology.
          We believe that everyone is a professional, and that positive change
          can be invoked through workplace transparency.
        </Heading>
      </Box>
      <TeamSlider />
      <Heading
        mx={"auto"}
        mb={{md: "23px", base:"15px"}}
        fontWeight={400}
        mt={"20px"}
        color={"gray.text"}
        maxW={{md: "57%", base:"100%"}}
        textAlign={"center"}
        variant={"p7"}
      >
        Individuals use Jobreef to advance their careers and share experiences.
        Employers may improve their recruiting and hiring practices, and
        increase workplace satisfaction.
      </Heading>
      <Heading
        mx={"auto"}
        mb={{ md: "50px", base:"30px"}}
        fontWeight={400}
        // mt={{md: "20px", base:'0px'}}
        color={"gray.text"}
       
        textAlign={"center"}
        variant={"p7"}
      >
 Founded in 2023, Jobreef is based in Nassau, The Bahamas.
      </Heading>
    </Container>
  );
};

export default AboutUs;
