import { Box, Heading, useMediaQuery, Image } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { SignUpTimeline } from "../SignUpTimeline/SignUpTimeline";
import logo from "@/assets/Images/logo.svg";
import cartoon from "@/assets/Images/cartoon.svg";
import teamVector from "@/assets/Images/teamVector.svg";
import leftblue_2 from "@/assets/Images/leftblue_2.png";
import Logo from "@/Compomnents/Logo/Logo";

import { role, roles } from "@/Utils/role";
import dynamic from "next/dynamic";
import { Role_context } from "@/context/context";
import { CandidateTimeline } from "../CandidateTimeline/CandidateTimeline";
import whitetick from "@/assets/Images/white-tick.svg";

const SignUpLayout = dynamic(() => import("../Layout/SignUpLayout"), {
  ssr: false,
});

const CandidateRegistration = ({ candidate }) => {
  const { company, setCompany } = useContext(Role_context);
  return (
    <Box
      padding={{ md: "75px 30px 0px 30px", base: "75px 10px 0px 10px" }}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      <>
        <SignUpLayout
        icon={<Image width={"26px"} src={whitetick.src} />}

          personVectorW={{ "2xl": "450px", base: "330px" }}
          bottomCartoon={teamVector.src}
          leftPic={leftblue_2.src}
          tittle={"1. About You"}
          subtitle={"2. Your Resume"}
        />
      </>

      <Box
        width={{ md: "840px", base: "100%" }}
        ml={{ xl: "400px", base: "0px" }}
      >
        <Box display={"flex"} justifyContent={"center"} mb={"52px"}>
          <Logo />
        </Box>
        <CandidateTimeline />
      </Box>
    </Box>
  );
};

export default CandidateRegistration;
