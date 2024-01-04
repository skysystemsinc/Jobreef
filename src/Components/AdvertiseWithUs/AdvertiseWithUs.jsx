import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const AdvertiseWithUs = ({ title, subTitle, style }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      px={"10px"}
      pt={"50px"}
      pb={"180px"}
      bg={"blue.500"}
    >
      <Box
        maxWidth={"490px"}
        textAlign={{ md: "center", base: "start" }}
        sx={style}
      >
        <Heading
          mb={{ md: "10px", base: "3px" }}
          color={"white.100"}
          variant={"h3"}
          fontWeight={500}
          className="sora"
        >
          {title}
        </Heading>
        <Heading
          textAlign={"start"}
          sx={style}
          color={"white.100"}
          fontWeight={400}
          variant={"p11"}
        >
          {subTitle}
        </Heading>
      </Box>
    </Box>
  );
};

export default AdvertiseWithUs;
