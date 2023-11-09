import CandiateTabs from "@/Compomnents/CandiateTabs/CandiateTabs";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";

import CompanyDasboard from "@/Compomnents/Layout/DasboardLayout";

import { Box } from "@chakra-ui/react";
import React from "react";

const index = () => {
  return (
    <>
      <CompanyDasboard disableWaveImage>
        <Box px={"20px"}>
          <CandiateTabs />
        </Box>
      <DashboardFooter waveImage />

      </CompanyDasboard>
    </>
  );
};

export default index;
