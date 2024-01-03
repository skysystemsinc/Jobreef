import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import WorkCard from "../WorkCard/WorkCard";
import one from "@/assets/Images/one.svg";
import two from "@/assets/Images/two.svg";
import three from "@/assets/Images/three.svg";
import whitebuilding from "@/assets/Images/whitebuilding.svg";
import bag from "@/assets/Images/bag.svg";
import workprofile from "@/assets/Images/workprofile.svg";

const HowItWork = () => {
  return (
    <Container maxWidth={"5xl"}>
      <Heading
        textAlign={"center"}
        fontWeight={700}
        color={"blue.500"}
        mt={{ md: "40px", base: "30px" }}
        mb={{ md: "60px", base: "30px" }}
        variant={"h2"}
      >
        <Box mr={"10px"} as="span" color={"gray.text"}>
          {" "}
          How It
        </Box>
        Works
      </Heading>

      <Box
        columnGap={{ xl: "60px", base: "20px" }}
        display={"grid"}
        gridTemplateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
      >
        <WorkCard
          icon={whitebuilding.src}
          count={one.src}
          title={"Create Company Profile"}
          decs={
            "Advertise your company to potential jobseekers using a branded page."
          }
        />
        <WorkCard
        iconWidth={{width:{ md: "25px", base:"21px"},}}
          icon={bag.src}
          count={two.src}
          title={"Publish Job Post"}
          decs={
            "Publish job listings and begin receiving applications from qualified candidates."
          }
        />

        <WorkCard
        iconWidth={{width:{ md: "25px", base:"21px"},}}

          count={three.src}
          icon={workprofile.src}
          title={"Track Applications"}
          decs={"Track applications and communicate using instant messaging."}
        />
      </Box>

      <Flex justifyContent={"center"}>
        <Button
          fontWeight={600}
          mt={{ md: "30px", base: "10px" }}
          height={"35px"}
          borderRadius={"5px"}
          width={"max-content"}
          px={{ md: "45px", base: "40px" }}
          variant={"blue-btn"}
        >
          Get Started
        </Button>
      </Flex>
    </Container>
  );
};

export default HowItWork;
