import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import blueclick from "@/assets/Images/blueclick.svg";

const ConfirmationBox = ({description}) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      m={{
        "2xl": "100px 0px 100px 0px",
        sm: "30px 0px 30px 0px",
        base: "0px 0px 20px 0px",
      }}
    >
      <Image
        width={{ md: "60px", base: "40px" }}
        mb={{ md: "40px", base: "30px" }}
        src={blueclick.src}
      />
      <Heading
        maxW={"520px"}
        fontSize={{ "2xl": "30px", md: "23px", base: "18px" }}
        lineHeight={{ "2xl": "51px", md: "37px", base: "26px" }}
        textAlign={"center"}
        variant={"p3"}
      >
      {description}
      </Heading>
    </Box>
  );
};

export default ConfirmationBox;
