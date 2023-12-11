import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import featurePic from "@/assets/Images/featurePic.svg";
const Features = () => {
  const feature = [
    "Applicant Tracking System",
    "Recommended Candidates",
    "Applicant Screening",
    "Branded Company Page",
  ];
  return (
    <Container  maxW={"62em"}>
      <Heading
        textAlign={"center"}
        fontWeight={700}
        color={"blue.500"}
        mt={{ md: "70px", base: "30px" }}
        mb={{ md: "30px", base: "10px" }}
        variant={"h2"}
      >
        <Box className="sora" mr={"10px"} as="span" color={"gray.text"}>
          {" "}
          What’s
        </Box>
        Included
      </Heading>

      <Box
    //   border={"1px solid red"}
      
        // gap={{ md: "120px", base: "0px" }}
        alignItems={"center"}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap-reverse"}
      >
        <Box width={{ md: "max-content", base: "100%" }}>
          {feature.map((item, index) => {
            return (
              <Box
                py={{ md: "17px", base:"10px"}}
                width={"100%"}
                borderBottom={index == 3 ? "none" : "1px solid"}
                borderColor={"blue.500"}
              >
                <Heading className="sora" fontWeight={700} variant={"p8"} color={"gray.text"}>
                  {item}
                </Heading>
              </Box>
            );
          })}
        </Box>

        {/* <Box > */}
          <Image width={{ md: "50%", base: "100%" }} src={featurePic.src} />
        {/* </Box> */}
      </Box>
    </Container>
  );
};

export default Features;
