
import CandidateTabs from "@/Components/CandiateTabs/CandidateTabs";
import DashboardFooter from "@/Components/Footer/DashboardFooter";

import CompanyDasboard from "@/Components/Layout/DashboardLayout";

import { Box } from "@chakra-ui/react";
import React from "react";

const index = () => {
  return (
    <>
      <CompanyDasboard disableWaveImage>
        <Box px={"20px"} pb={'30px'}>
          <CandidateTabs />
        </Box>
      <DashboardFooter waveImage />

      </CompanyDasboard>
    </>
  );
};

export default index;
