import React from "react";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import endQuote from "@/assets/Images/endQuote.svg";
import startQuote from "@/assets/Images/startQuote.svg";
import profile from "@/assets/Images/profile.svg";
const TestimonialCard = () => {
  return (
    <Box
      borderRadius={"5px"}
      backgroundColor={"white.100"}
      boxShadow="0px 6px 4px 0px rgba(0, 0, 0, 0.05)"
      width={"100%"}
      padding={"40px 40px"}
    >
      <Box px={"0px"} position={"relative"}>
        <Image
          position={"absolute"}
          top={"-3px"}
          left={"-25px"}
          width={"20px"}
          src={startQuote.src}
        />
        <Image
          position={"absolute"}
          bottom={"-3px"}
          width={"20px"}
          right={"-1px"}
          src={endQuote.src}
        />
        <Heading variant={"p4"}>
          Love the simplicity of the service and the prompt customer support. We
          can’t imagine working without it.
        </Heading>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"16px"} mt={"20px"}>
        <Image
          width={"40px"}
          height={"40px"}
          borderRadius={"100px"}
          objectFit={"cover"}
          src={profile.src}
        />
        <Box>
          <Heading mb="3px" fontWeight={600} variant={"p4"}>
            {" "}
            Renee Wells
          </Heading>
          <Heading lineHeight={"none"} variant={"p12"}>
            {" "}
            Product Designer, Quotient
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
