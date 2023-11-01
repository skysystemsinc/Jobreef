import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const SignUpLayout = ({
  bottomCartoon,
  tittle,
  subtitle,
  vectorStyle,
  icon,
  subtitleIcon,
  leftPic,
  personVectorW,
}) => {
  return (
    <Box>
      <Image
        // width={isSmallerThe500 ? "200px" : "250px"}
        width={{ md: "36%", base: "29%" }}
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
        sx={vectorStyle}
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
          gap={"19px"}
          mb={{ "2xl": "30px", base: "16px" }}
        >
          {tittle} {icon ? icon : ""}{" "}
        </Heading>
        <Heading
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          variant={"h1"}
        >
          {subtitle}
          {subtitleIcon ? subtitleIcon : ""}
        </Heading>
      </Box>
    </Box>
  );
};

export default SignUpLayout;
