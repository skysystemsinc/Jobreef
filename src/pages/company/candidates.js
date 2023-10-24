import CandiateTabs from "@/Compomnents/CandiateTabs/CandiateTabs";

import CompanyDasboard from "@/Compomnents/Layout/DasboardLayout";

import { Box } from "@chakra-ui/react";
import React from "react";

const index = () => {
  return (
    <>
      <CompanyDasboard>
        <Box px={"20px"}>
          <CandiateTabs />
        </Box>
      </CompanyDasboard>
    </>
  );
};

export default index;
