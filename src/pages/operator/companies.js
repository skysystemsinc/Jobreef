import CompanyTabs from "@/Compomnents/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Compomnents/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Compomnents/SearchBox/SearchBox";
import ActiveJobs from "@/Compomnents/CompanyTabs/ActiveJobs";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
const companies = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"}>
        <Box width={{ sm: "300px", base: "100%" }} my={"25px"}>
          <SearchBox placeholder={"Search companies"} />
        </Box>
        <CompanyTabs />
      </Box>
      <DashboardFooter waveImage/>

    </OperatorLayout>
  );
};

export default companies;
