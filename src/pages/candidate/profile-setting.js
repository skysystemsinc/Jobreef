import BottomWaveImage from "@/Compomnents/BottomWaveImage/BottomWaveImage";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import ProfileSettingTabs from "@/Compomnents/ProfileSettingTabs/ProfileSettingTabs";
import { setLoginUser } from "@/Reudx/slices/LoginUser";
import endPoints from "@/Utils/endpoints";
import { BACKEND_URL } from "@/Utils/urls";
import { httpRequest } from "@/helper/httpRrequest";
import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const profileSetting = () => {

  return (
    <>
      <Header candidate />

      <Box display={"flex"} justifyContent={"center"} mt={"49px"}>
        <Box
          width={{ xl: "70%", base: "100%" }}
          px={{ md: "20px", base: "10px" }}
        >
          <ProfileSettingTabs candidate/>
        </Box>
      </Box>
      <Footer waveImage />
    </>
  );
};

export default profileSetting;
