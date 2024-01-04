import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";


import JobPostsTabs from "@/Components/JobPostsTabs/JobPostsTabs";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
const jobposts = () => {
  return (
< >
  
    <OperatorLayout>
      <Box px={"30px"} pb={"35px"}>
        <Box width={{ sm: "300px", base: "100%" }} my={"25px"}>
          <SearchBox placeholder={"Search jobs"} />
        </Box>
        <JobPostsTabs />
      </Box>
      <DashboardFooter waveImage />

    </OperatorLayout>

    </>
  );
};

export default jobposts;
