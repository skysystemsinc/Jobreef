import { Box, Heading, useMediaQuery, Image } from "@chakra-ui/react";
import React from "react";

import logo from "@/assets/Images/logo.svg";
import cartoon from "@/assets/Images/cartoon.svg";
import leftblue_2 from "@/assets/Images/leftblue_2.png";

import whitetick from "@/assets/Images/white-tick.svg";
import SignUpLayout from "../Layout/SignUpLayout";
import Logo from "@/Components/Logo/Logo";
import { CompanyTimeline } from "../CompanyTimeline/CompanyTimeline";
import { useSteps } from "chakra-ui-steps";

const CompanyRegiteration = () => {
  
  return (
    <Box
      padding={{ md: "65px 30px 40px 30px", base: "45px 15px 30px 15px" }}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >

      <Box
        // border={"1px solid  red"}
        width={{ md: "100%", base: "100%" }}
        ml={{ xl: "600px", base: "0px" }}
      >
        <Box display={"flex"} justifyContent={"center"} mb={{ md:"42px", base:"30px"}}>
          <Logo />
        </Box>
        <CompanyTimeline />
      </Box>
    </Box>
  );
};

export default CompanyRegiteration;
