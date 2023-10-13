import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import CompanyTabs from "../CompanyDashoardTabs/CompanyDashboardTabs";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";

const DasboardLayout = ({ children ,placement }) => {
  return (
    <>
      <Header />

      <BottomWaveImage/>
      <SideBar />
      <Box
        display={"flex"}
        justifyContent={placement?placement:"center"}

        ml={{ xl: "290px", base: "70px" }}
        mr={{ md: "0px", base: "9px" }}
        mt={"40px"}
      >
        {/* <CompanyTabs /> */}
        {children}
      </Box>
    </>
  );
};

export default DasboardLayout;
