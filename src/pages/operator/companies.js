import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";
import ActiveJobs from "@/Components/CompanyTabs/ActiveJobs";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
const companies = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"} pb={'20px'}>
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
