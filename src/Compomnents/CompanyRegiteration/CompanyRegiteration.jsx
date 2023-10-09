import { Box, Heading, useMediaQuery, Image } from "@chakra-ui/react";
import React from "react";
import { Timeline } from "../SignUpTimeline/SignUpTimeline";
import logo from "@/assets/Images/logo.svg";
import cartoon from "@/assets/Images/cartoon.svg";
import leftblue_2 from "@/assets/Images/leftblue_2.png";
import whitetick from "@/assets/Images/white-tick.svg";
import SignUpLayout from "../Layout/SignUpLayout";
import Logo from "@/Compomnents/Logo/Logo";
import { CompanyTimeline } from "../CompanyTimeline/CompanyTimeline";

const CompanyRegiteration = () => {
  return (
    <Box
      padding={{ md: "75px 30px 40px 30px", base: "75px 15px 30px 15px" }}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      <SignUpLayout
        icon={<Image src={whitetick.src} />}
        bottomCartoon={cartoon.src}
        leftPic={leftblue_2.src}
        tittle={"1. About You"}
        subtitle={"2. About Your Comapny"}
      />
      <Box
      // border={"1px solid  red"}
        width={{ md: "100%",  base: "100%" }}
        ml={{ xl: "600px", base: "0px" }}
      >
        <Box display={"flex"} justifyContent={"center"} mb={"52px"}>
          <Logo />
        </Box>
        <CompanyTimeline />
      </Box>
    </Box>
  );
};

export default CompanyRegiteration;
