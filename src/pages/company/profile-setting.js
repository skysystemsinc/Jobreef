import BottomWaveImage from "@/Components/BottomWaveImage/BottomWaveImage";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import ProfileSettingTabs from "@/Components/ProfileSettingTabs/ProfileSettingTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const profileSetting = () => {
  return (
    <>
      <Header />
      <Box display={"flex"} justifyContent={"center"} mt={"49px"}>
        <Box
          width={{ xl: "70%", base: "100%" }}
          px={{ md: "20px", base: "10px" }}
        >
          <ProfileSettingTabs company />
        </Box>
      </Box>
      <Footer waveImage />
    </>
  );
};

export default profileSetting;
