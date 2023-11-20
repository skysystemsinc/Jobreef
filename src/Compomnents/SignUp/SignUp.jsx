import { Box, Heading, useMediaQuery, Image } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { SignUpTimeline } from "../SignUpTimeline/SignUpTimeline";
import logo from "@/assets/Images/logo.svg";
import cartoon from "@/assets/Images/cartoon.svg";
import teamVector from "@/assets/Images/teamVector.svg";
import leftblue_2 from "@/assets/Images/leftblue_2.png";
import whitetick from "@/assets/Images/white-tick.svg";
// import SignUpLayout from "../Layout/SignUpLayout";
import Logo from "@/Compomnents/Logo/Logo";
import { role, roles } from "@/Utils/role";
import dynamic from "next/dynamic";
import { Role_context } from "@/context/context";
const SignUpLayout = dynamic(() => import("../Layout/SignUpLayout"), {
  ssr: false,
});

const SignUp = ({ candidate }) => {
  const { company, setCompany } = useContext(Role_context);
  // const company = useSelector((state) => state.authentication.i);
  console.log("isAuthenticated", isAuthenticated);
  
  return (
    <Box
      padding={{ md: "75px 30px 0px 30px", base: "75px 15px 0px 15px" }}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      {company ? (
        <>
          <SignUpLayout
            personVectorW={{ "2xl": "600px", base: "450px" }}
            // icon={<Image src={whitetick.src} width={"26px"} />}
            bottomCartoon={cartoon.src}
            leftPic={leftblue_2.src}
            tittle={"1. About You"}
            subtitle={"2. About Your Company"}
          />
        </>
      ) : (
        <>
          <SignUpLayout
            personVectorW={{ "2xl": "450px", base: "330px" }}
            bottomCartoon={teamVector.src}
            leftPic={leftblue_2.src}
            tittle={"1. About You"}
            subtitle={"2. Your Resume"}
          />
        </>
      )}
      <Box
        width={{ md: "630px", base: "100%" }}
        ml={{ xl: "600px", base: "0px" }}
      >
        <Box display={"flex"} justifyContent={"center"} mb={"52px"}>
          <Logo />
        </Box>
        <SignUpTimeline  />
      </Box>
    </Box>
  );
};

export default SignUp;
