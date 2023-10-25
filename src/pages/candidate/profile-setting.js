import Header from "@/Compomnents/Header/Header";
import ProfileSettingTabs from "@/Compomnents/ProfileSettingTabs/ProfileSettingTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const profileSetting = () => {
  return (
    <>
      <Header  candidate/>

      <Box display={"flex"} justifyContent={"center"} mt={"49px"}>
        <Box width={{ xl: "70%", base: "100%" }} px={{md:"20px", base:'10px'}}>
          <ProfileSettingTabs />
        </Box>
      </Box>
    </>
  );
};

export default profileSetting;
