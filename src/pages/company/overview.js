import CompanyTabs from "@/Components/CompanyDashoardTabs/CompanyDashboardTabs";

import SideBar from "@/Components/SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import React from "react";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
import DashboardLayout from "@/Components/Layout/DashboardLayout";
import CompanyOverview from "@/Components/CompanyOverview/CompanyOverview";

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
