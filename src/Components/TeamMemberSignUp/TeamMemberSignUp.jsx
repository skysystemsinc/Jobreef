import { Box, Heading, useMediaQuery, Image } from "@chakra-ui/react";
import React from "react";

import logo from "@/assets/Images/logo.svg";
import cartoon from "@/assets/Images/employeeVector.png";
import leftblue_2 from "@/assets/Images/leftblue_2.png";
import whitetick from "@/assets/Images/white-tick.svg";
import SignUpLayout from "../Layout/SignUpLayout";
import Logo from "@/Components/Logo/Logo";
import { CompanyTimeline } from "../CompanyTimeline/CompanyTimeline";
import SignUpForm from "./SignUpForm";

const TeamMemberSignUp = () => {
  return (
    <Box
      padding={{ md: "65px 30px 60px 30px", base: "45px 15px 30px 15px" }}
      width={"100%"}
    //   border={"1px solid red"}
      display={"flex"}
      justifyContent={"center"}
    >
      <SignUpLayout
        // icon={<Image width={"26px"} src={whitetick.src} />}
        personVectorW={{ "2xl": "450px", base: "350px" }}
        bottomCartoon={cartoon.src}
        leftPic={leftblue_2.src}
        tittle={"Team Member Sign Up"}
        subtitle={""}
      />
      <Box
        // border={"1px solid  red"}
        width={{ md: "100%", base: "100%" }}
        ml={{ xl: "600px", base: "0px" }}
      >
        <Box display={"flex"} justifyContent={"center"} >
          <Logo />
        </Box>
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default TeamMemberSignUp;
