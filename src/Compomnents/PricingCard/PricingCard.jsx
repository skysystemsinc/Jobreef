import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import blueTick from "@/assets/Images/blueclick.svg";
const PricingCard = () => {
  const feature = [
    "Applicant Tracking",
    "Candidate Screening",
    "Instant Messaging",
    "7-Day Free Trial*",
  ];
  return (
    <Box
      boxShadow={"0px 6px 4px 0px rgba(0, 0, 0, 0.10)"}
      backgroundColor={"white.100"}
      borderRadius={"5px"}
      mb={"20px"}
    >
      <Box
        borderRadius={" 5px 5px 0px 0px"}
        textAlign={"center"}
        bg={"blue.500"}
        py={"16px"}
      >
        <Heading color={"white.100"} fontWeight={600} variant={"p11"}>
          Standard Job Post
        </Heading>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        py={"14px"}
        pb={"18px"}
      >
        <Heading
          color={"blue.500"}
          className="sora"
          variant={"p8"}
          mb={"10px"}
          fontWeight={800}
        >
          4.99
          <Box as="span" fontSize={"12px"}>
            /day
          </Box>
        </Heading>
        <Box
        // display={"flex"}
        // justifyContent={"center"}
        // alignItems={"center"}
        // flexDirection={"column"}
        >
          {feature.map((item) => {
            return (
              <Box
                display={"flex"}
                alignItems={"center"}
                mb={{ md: "7px", base:"9px"}}
                gap={{ md: "20px", base:"10px"}}
              >
                <Image width={{ md: "21px", base:'18px'}} src={blueTick.src} />
                <Box
                  minW={"150px"}
                  // border={"1px solid red"}
                  textAlign={"center"}
                >
                  <Heading
                    className="sora"
                    fontWeight={400}
                    color={"black.100"}
                    variant={"p4"}
                  >
                    {item}
                  </Heading>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Button
          fontWeight={600}
          mt={"20px"}
          height={"35px"}
          borderRadius={"5px"}
          width={"max-content"}
          px={{ md: "45px", base: "40px" }}
          variant={"blue-btn"}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default PricingCard;
