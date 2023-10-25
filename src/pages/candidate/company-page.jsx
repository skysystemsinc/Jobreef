import CompanyPageData from "@/Compomnents/CompanyPageData/CompanyPageData";
import Header from "@/Compomnents/Header/Header";
import JobSearchData from "@/Compomnents/JobSearchData/JobSearchData";
import MyJobsTabs from "@/Compomnents/MyJobsTab/MyJobsTabs";
import MessagesData from "@/Compomnents/MyMessages/MessagesData";
import MyResumeTabs from "@/Compomnents/MyResumeTab/MyResumeTabs";
import ProfileSettingTabs from "@/Compomnents/ProfileSettingTabs/ProfileSettingTabs";
import { Box, Heading } from "@chakra-ui/react";

import React from "react";

const CompanyPage = () => {
  return (
    <>
      <Header candidate />

      <Box display={"flex"} justifyContent={"center"} mt={"43px"}>
        <Box
          width={"100%"}    
          px={{ md: "20px", base: "10px" }}
        >
          <CompanyPageData/>
        </Box>
      </Box>
    </>
    
  );
};

export default CompanyPage;
