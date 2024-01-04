import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import findTalentPerson from "@/assets/Images/findTalentPerson.svg";
import jobrecruitHeroImage from "@/assets/Images/jobrecruitHero.svg";
const JobRecruitHero = () => {
  return (
    <Box
      bg={"yellow.100"}
      pb={{ lg: "0px", base: "40px" }}
      pt={{ lg: "10px", base: "40px" }}
    >
      <Container
        display={"flex"}
        maxW={"4xl"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          display={{ lg: "block", base: "none" }}
          src={jobrecruitHeroImage.src}
          width={"200px"}
        />
        <Box textAlign={{ lg: "end", base:"start"}}>
          <Heading color={"gray.text"} fontWeight={400} className="sora" variant={"h3"}>
          Talent Doesn’t Wait.
          </Heading>
          <Heading
          mt={"5px"}
            mb={{ md: "12px", base: "7px" }}
            color={"gray.text"}
            fontWeight={400}
            variant={"p7"}
            maxWidth={"500px"}
            fontSize={{ sm: "16px", base: "15px", md: "18px" }}
          >
            Use Jobreef Recruit to proactively find qualified candidates
          </Heading>
          <Heading
            mb={{ md: "20px", base: "15px" }}
            color={"gray.text"}
            variant={"p11"}
            fontWeight={700}
          >
            Hiring? Start a Free Trial
          </Heading>
          <Button variant={"blue-btn"}>Get Started</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default JobRecruitHero;
