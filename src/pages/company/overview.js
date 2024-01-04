import CompanyTabs from "@/Compomnents/CompanyDashoardTabs/CompanyDashboardTabs";

import SideBar from "@/Compomnents/SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import React from "react";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
import DashboardLayout from "@/Compomnents/Layout/DashboardLayout";
import CompanyOverview from "@/Compomnents/CompanyOverview/CompanyOverview";

const index = () => {
  return (
    <>
      <DashboardLayout disableWaveImage>
        <CompanyOverview />
        <DashboardFooter waveImage />
      </DashboardLayout>
    </>
  );
};

export default index;
