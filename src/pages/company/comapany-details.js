import CompanyTabs from "@/Components/CompanyDashoardTabs/CompanyDashboardTabs";

import CompanyDasboard from "@/Components/Layout/DashboardLayout";
import SideBar from "@/Components/SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import React from "react";
import DashboardFooter from "@/Components/Footer/DashboardFooter";

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
