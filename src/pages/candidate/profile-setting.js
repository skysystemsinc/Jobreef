import BottomWaveImage from "@/Compomnents/BottomWaveImage/BottomWaveImage";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import ProfileSettingTabs from "@/Compomnents/ProfileSettingTabs/ProfileSettingTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const profileSetting = () => {
  return (
    <>
      <Header candidate />
      {/* <BottomWaveImage /> */}

      <Box display={"flex"} justifyContent={"center"} mt={"49px"}>
        <Box
          width={{ xl: "70%", base: "100%" }}
          px={{ md: "20px", base: "10px" }}
        >
          <ProfileSettingTabs />
        </Box>
      </Box>
      <Footer waveImage />
    </>
  );
};

export default profileSetting;
