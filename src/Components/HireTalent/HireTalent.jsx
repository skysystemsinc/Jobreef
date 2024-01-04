import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import talentPerson from "@/assets/Images/talentPerson.svg";
const HireTalent = () => {
  return (
    <Box bg={"blue.500"} mb="40px" mt={{  lg:'80px', base:'30px'}}   py={{md: '45px',base:"38px"}} >
      <Container maxW={"6xl"} position={"relative"}>
        <Box>
          <Heading fontWeight={700} variant={"p6"} color={"white.100"}>
            Looking to hire qualified talent?
          </Heading>
          <Heading variant={"p11"} mt={"5px"} mb={"8px"} color={"white.100"}>
            Reach our unique talent pool candidates.
          </Heading>
          <Heading
            maxWidth={"580px"}
            mb={"26px"}
            variant={"p4"}
            color={"white.100"}
          >
            Jobreef is an all-in-one hub for employers to post job
            opportunities, review applications, and hire qualified candidates.
            Get started using our suite of recruiting and hiring tools and begin
            receiving applications from the best local talent.
          </Heading>
          <Button
            variant={"yellow-btn"}

          >
            Find Your Next Hire
          </Button>
        </Box>
        <Box 
        display={{lg:"block", base:"none"}}
        position={"absolute"} top={"-54%"} width={"200px"} right={"12%"}>
          <Image src={talentPerson.src}  width={"100%"}/>
        </Box>
      </Container>
    </Box>
  );
};

export default HireTalent;
