import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import MyJobsTabs from "@/Components/MyJobsTab/MyJobsTabs";
import MyResumeTabs from "@/Components/MyResumeTab/MyResumeTabs";
import ProfileSettingTabs from "@/Components/ProfileSettingTabs/ProfileSettingTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const myJobs = () => {
  return (
    <>
      <Header candidate />

      <Box display={"flex"} justifyContent={"center"} mt={"43px"} mb={"30px"}>
        <Box width={"100%"} px={{ md: "20px", base: "10px" }}>
          <MyJobsTabs />
        </Box>
      </Box>
      <Footer waveImage />
    </>
  );
};

export default myJobs;
