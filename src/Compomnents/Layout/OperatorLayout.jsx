import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import CompanyTabs from "../CompanyDashoardTabs/CompanyDashboardTabs";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";
import OperatorHeader from "../Header/OperatorHeader";
import OperatorSidebar from "../SideBar/OperatorSidebar";

const OperatorLayout = ({ children }) => {
  return (
    <>
      <BottomWaveImage />
      <OperatorSidebar />
      <Box
        // position={"relative"}
        // top={"0px"}
        // zIndex={2}
        ml={{ xl: "250px", base: "55px" }}
      >
        <OperatorHeader />

        {children}
      </Box>
    </>
  );
};

export default OperatorLayout;
