import { Box, Heading, useMediaQuery, Image } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

import logo from "@/assets/Images/logo.svg";
import cartoon from "@/assets/Images/cartoon.svg";
import teamVector from "@/assets/Images/teamVector.svg";
import leftblue_2 from "@/assets/Images/leftblue_2.png";
import whitetick from "@/assets/Images/white-tick.svg";
// import SignUpLayout from "../Layout/SignUpLayout";
import Logo from "@/Components/Logo/Logo";
import { role, roles } from "@/Utils/constant";
import dynamic from "next/dynamic";
import { Role_context } from "@/context/context";
import leftorange from "../../../assets/Images/leftorange.svg";
import SVG09 from "../../../assets/Images/SVG-09.svg";
import SignUpTimeline from "../SignUpTimeLine/SignUpTimeline";
// import SignUpLayout from "@/Components/Layout/SignUpLayout";

const SignUpLayout = dynamic(
  () => import("@/Components/Layout/SignUpLayout"),
  {
    ssr: false,
  }
);

const SignUp = ({ candidate }) => {
  const { company, setCompany } = useContext(Role_context);
  return (
    <Box
      padding={{ md: "75px 30px 0px 30px", base: "75px 0px 0px 0px" }}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      <SignUpLayout
        personVectorW={"400px"}
        bottomCartoon={SVG09.src}
        leftPic={leftorange.src}
      />

      <Box
        width={{ md: "630px", base: "100%" }}
        ml={{ xl: "600px", base: "0px" }}
      >
        <Box display={"flex"} justifyContent={"center"} mb={"52px"}>
          <Logo />
        </Box>
        <SignUpTimeline />
      </Box>
    </Box>
  );
};

export default SignUp;
