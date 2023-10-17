import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const SignUpLayout = ({
  bottomCartoon,
  tittle,
  subtitle,
  icon,
  leftPic,
  personVectorW,
}) => {
  return (
    <Box>
      <Image
        // width={isSmallerThe500 ? "200px" : "250px"}
        width={{ "2xl": "710px", xl: "39%", sm:"33%",  base: "40%" }}
        src={leftPic}
        position={"absolute"}
        top={"0px"}
        left={"0px"}
        zIndex={-1}
        alt="Dan Abramov"
      />
      <Image
        // width={isSmallerThe500 ? "200px" : "250px"}
        // width={"600px"}
        width={personVectorW} 
        zIndex={2}
        display={{ xl: "block", base: "none" }}
        position={"absolute"}
        bottom={"0px"}
        left={"50px"}
        src={bottomCartoon}
        alt="Dan Abramov"
      />
      <Box
        display={{ xl: "block", base: "none" }}
        position={"absolute"}
        top={"65px"}
        left={"53px"}
      >
        <Heading
          variant={"h1"}
          display={"flex"}
          alignItems={"center"}
          gap={"23px"}
          mb={{ "2xl": "30px", base: "16px" }}
        >
          {tittle} {icon ? icon : ""}{" "}
        </Heading>
        <Heading variant={"h1"}>{subtitle}</Heading>
      </Box>
    </Box>
  );
};

export default SignUpLayout;
