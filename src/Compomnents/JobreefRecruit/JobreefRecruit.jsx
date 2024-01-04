import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Target from "@/assets/Images/Target.svg";
const JobreefRecruit = ({
  disableTarget,
  title,
  content,
  amount,
  btnLabel,
  boxStyle
}) => {
  return (
    <Box  position={"relative"} bg={"blue.500"} sx={boxStyle} py={"26px"}>
      <Container
        display={"flex"}
        maxW={"5xl"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box position={"relative"} top={"0px"} zIndex={2}>
          <Heading
            color={"white.100"}
            mb={{ md: "15px", base: "3px" }}
            className="sora"
            variant={"h1"}
            maxWidth={"400px"}
          >
            {/* Search For Local Talent With Jobreef Recruit */}
            {title}
          </Heading>
          <Heading
            mb={{ md: "12px", base: "5px" }}
            color={"white.100"}
            fontWeight={400}
            variant={"p5"}
            maxWidth={"500px"}
            lineHeight={{ md: "27px", base: "23px" }}
          >
            {content}
          </Heading>
        </Box>

        <Box
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          top={"0px"}
          zIndex={2}
        >
          <Heading className="sora" color={"white.100"} variant={"p5"}>
            starting at
          </Heading>
          <Heading
            fontWeight={700}
            color={"white.100"}
            className="sora"
            mb={{ md: "30px", base: "10px" }}
            variant={"h3"}
          >
            {amount}
          </Heading>
          <Button variant={"yellow-btn"}>{btnLabel}</Button>
        </Box>
        {disableTarget ? null : (
          <Image
            position={"absolute"}
            opacity={{ md: 1, base: 0.6 }}
            top={"16px"}
            left={"0px"}
            zIndex={1}
            src={Target.src}
            width={"90px"}
          />
        )}
      </Container>
    </Box>
  );
};

export default JobreefRecruit;
