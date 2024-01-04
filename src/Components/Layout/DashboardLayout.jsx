import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import CompanyTabs from "../CompanyDashoardTabs/CompanyDashboardTabs";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";

const DashboardLayout = ({ disableWaveImage, children }) => {
  return (
    <>
      <Header />
      {disableWaveImage ? null : <BottomWaveImage />}
      <SideBar />
      <Box ml={{ xl: "250px", base: "55px" }} mt={"40px"} minH={"87vh"}>
        {/* <CompanyTabs /> */}
        {children}
      </Box>
    </>
  );
};

export default DashboardLayout;
