import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import WorkCard from "../WorkCard/WorkCard";
import one from "@/assets/Images/one.svg";
import two from "@/assets/Images/two.svg";
import three from "@/assets/Images/three.svg";
import BlackBuilding from "@/assets/Images/BlackBuilding.svg";
import blackApplication from "@/assets/Images/blackApplication.svg";
import bag from "@/assets/Images/bag.svg";
import workprofile from "@/assets/Images/workprofile.svg";

const HowItWork = () => {
  return (
    <Container maxWidth={"4xl"}>
      <Heading
        textAlign={"center"}
        fontWeight={700}
        color={"blue.500"}
        mt={{ md: "40px", base: "30px" }}
        mb={{ md: "50px", base: "20px" }}
        variant={"h2"}
      >
        <Box mr={"10px"} as="span" color={"gray.text"}>
          {" "}
          How It
        </Box>
        Works
      </Heading>

      <Box
        columnGap={{ lg: "80px", base: "20px" }}
        display={"grid"}
        gridTemplateColumns={{
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
      >
        <WorkCard
          icon={BlackBuilding.src}
          count={"1"}
          title={"Create Company Profile"}
          decs={
            "Advertise your company to potential jobseekers using a branded page."
          }
          boxStyle={{
            backgroundColor: "yellow.100",
            h2: {
              color: "blue.500",
            },
            h5: {
              color: "gray.text",
            },
            p: {
              color: "gray.text",
            },
          }}
        />
        <WorkCard
          icon={blackApplication.src}
          count={"2"}
          title={"Track Applications"}
          decs={"Track applications and communicate using instant messaging."}
          boxStyle={{
            backgroundColor: "yellow.100",
            h2: {
              color: "blue.500",
            },
            h5: {
              color: "gray.text",
            },
            p: {
              color: "gray.text",
            },
          }}
        />
      </Box>

      <Flex justifyContent={"center"}>
        <Button
          fontWeight={700}
          mt={{ md: "30px", base: "10px" }}
          height={"35px"}
          borderRadius={"5px"}
          width={"max-content"}
          px={{ md: "45px", base: "40px" }}
          variant={"yellow-btn"}
          color={"gray.text"}
        >
          Get Started
        </Button>
      </Flex>
    </Container>
  );
};

export default HowItWork;
