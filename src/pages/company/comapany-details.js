import CompanyTabs from "@/Compomnents/CompanyDashoardTabs/CompanyDashboardTabs";

import CompanyDasboard from "@/Compomnents/Layout/DasboardLayout";
import SideBar from "@/Compomnents/SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import React from "react";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";

const comapanyDetails = () => {
  return (
    <>
      <CompanyDasboard disableWaveImage
      >
        <Box display={"flex"} justifyContent={"center"}>
          <CompanyTabs />
        </Box>
        <DashboardFooter waveImage />
      </CompanyDasboard>
     
    </>
  );
};

export default comapanyDetails;
