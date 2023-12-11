import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import findTalentPerson from "@/assets/Images/findTalentPerson.svg";
const FindTalentHere = () => {
  return (
    <Box
      bg={"blue.500"}
      pb={{ lg: "0px", base: "40px" }}
      pt={{ lg: "10px", base: "40px" }}
    >
      <Container
        display={"flex"}
        maxW={"4xl"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Heading color={"white.100"} className="sora" variant={"h3"}>
            Find Talent Here.
          </Heading>
          <Heading
            mb={{ md: "12px", base: "7px" }}
            color={"white.100"}
            fontWeight={400}
            variant={"p7"}
            fontSize={{ sm: "16px", base: "15px", md: "18px" }}
          >
            Take Talent Finding To The Next Level.
          </Heading>
          <Heading
            mb={{ md: "20px", base: "15px" }}
            color={"white.100"}
            variant={"p11"}
            fontWeight={700}
          >
            Hiring? Post a Free Job
          </Heading>
          <Button variant={"white-btn"}>Get Started</Button>
        </Box>
        <Image
          display={{ lg: "block", base: "none" }}
          src={findTalentPerson.src}
          width={"200px"}
        />
      </Container>
    </Box>
  );
};

export default FindTalentHere;
