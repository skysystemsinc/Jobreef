import Header from "@/Compomnents/Header/Header";
import MyJobsTabs from "@/Compomnents/MyJobsTab/MyJobsTabs";
import MessagesData from "@/Compomnents/MyMessages/MessagesData";
import MyResumeTabs from "@/Compomnents/MyResumeTab/MyResumeTabs";
import ProfileSettingTabs from "@/Compomnents/ProfileSettingTabs/ProfileSettingTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const messages = () => {
  return (
    <>
      <Header />

      <Box display={"flex"} justifyContent={"center"} mt={"43px"}>
        <Box
          // width={{ xl: "100%", base: "100%" }}
          width={"100%"}    
          px={{ md: "20px", base: "10px" }}
        >
          <MessagesData/> 
        </Box>
      </Box>
    </>
    
  );
};

export default messages;
