import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import featurePic from "@/assets/Images/recruitFeature.svg";
const Features = () => {
  const feature = [
    {
      title: "Powerful Candidate Search",
      content:
        "Use search filters and keywords to find candidates that meet your requirements.",
    },
    {
      title: "Manage Talent",
      content:
        "Save candidate profiles and create your company’s talent database.",
    },
    {
      title: "Realtime Communications",
      content: "Use instant messaging to communicate with saved candidates.",
    },
  ];
  return (
    <Container maxW={"55em"}>
      <Heading
        textAlign={"center"}
        fontWeight={700}
        color={"blue.500"}
        mt={{ md: "60px", base: "30px" }}
        mb={{ md: "16px", base: "10px" }}
        variant={"h2"}
      >
        <Box className="sora" mr={"10px"} as="span" color={"gray.text"}>
          {" "}
          Jobreef Recruit
        </Box>
        Features
      </Heading>

      <Box
        alignItems={"flex-end"}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Image width={{ md: "49%", base: "100%" }} src={featurePic.src} />

        <Box width={{ md: "max-content", base: "100%" }}>
          {feature.map((item, index) => {
            return (
              <Box
                pb={{ md: "7px", base: "10px" }}
                mt={{ md: "27px", base:"17px"}}
                width={"90%"}
                borderBottom={index == 2 ? "none" : "1px solid"}
                borderColor={"blue.light"}
              >
                <Heading
                  className="sora"
                  fontWeight={700}
                  variant={"p6"}
                  color={"gray.text"}
                  mb={{ md: "9px",base:"4px" }}
                >
                  {item.title}
                </Heading>
                <Heading
                  className="sora"
                  // fontWeight={700}
                  variant={"p4"}
                  color={"gray.text"}
                  maxW={"370px"}
                >
                  {item.content}
                </Heading>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Features;
