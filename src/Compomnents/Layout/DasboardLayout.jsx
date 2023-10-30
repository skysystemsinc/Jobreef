import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import CompanyTabs from "../CompanyDashoardTabs/CompanyDashboardTabs";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";

const DasboardLayout = ({ children }) => {
  return (
    <>
      <Header />

      <BottomWaveImage />
      <SideBar />
      <Box
        position={"relative"}
        top={"0px"}
        zIndex={2}
        
        ml={{ xl: "250px", base: "55px" }}
        mt={"40px"}
      >
        {/* <CompanyTabs /> */}
        {children}
      </Box>
    </>
  );
};

export default DasboardLayout;
