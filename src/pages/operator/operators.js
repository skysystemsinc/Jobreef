import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";
import OperatorsTabs from "@/Components/OperatorsTabs/OperatorsTabs";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
const operators = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"} >
        <Box width={{ sm: "300px", base: "100%" }} my={"25px"}>
          <SearchBox placeholder={"Search operators"} />
        </Box>
        <OperatorsTabs />
      </Box>
      <DashboardFooter waveImage />

    </OperatorLayout>
  );
};

export default operators;
