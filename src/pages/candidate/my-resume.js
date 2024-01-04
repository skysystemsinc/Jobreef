import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import MyResumeTabs from "@/Components/MyResumeTab/MyResumeTabs";
import ProfileSettingTabs from "@/Components/ProfileSettingTabs/ProfileSettingTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const myResume = () => {
  return (
    <>
      <Header candidate />

      <Box display={"flex"} justifyContent={"center"} mt={"43px"}>
        <Box
          // width={{ xl: "100%", base: "100%" }}
          width={"100%"}
          px={{ md: "20px", base: "10px" }}
        >
          <MyResumeTabs />
        </Box>
      </Box>
      <Footer waveImage />
    </>
  );
};

export default myResume;
