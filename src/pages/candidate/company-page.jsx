import CompanyPageData from "@/Components/CompanyPageData/CompanyPageData";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import JobSearchData from "@/Components/JobSearchData/JobSearchData";
import MyJobsTabs from "@/Components/MyJobsTab/MyJobsTabs";
import MessagesData from "@/Components/MyMessages/MessagesData";
import MyResumeTabs from "@/Components/MyResumeTab/MyResumeTabs";
import ProfileSettingTabs from "@/Components/ProfileSettingTabs/ProfileSettingTabs";
import { Box, Heading } from "@chakra-ui/react";

import React from "react";

const CompanyPage = () => {
  return (
    <>
      <Header candidate />

      <Box display={"flex"} justifyContent={"center"} mt={"43px"} mb={{md: "100px", base:"40px"}}>
        <Box width={"100%"} px={{ md: "20px", base: "10px" }}>
          <CompanyPageData />
        </Box>
      </Box>
      <Footer waveImage />
    </>
  );
};

export default CompanyPage;
