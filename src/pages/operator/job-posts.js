import CompanyTabs from "@/Compomnents/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Compomnents/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Compomnents/SearchBox/SearchBox";


import JobPostsTabs from "@/Compomnents/JobPostsTabs/JobPostsTabs";
const jobposts = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"}>
        <Box width={{ sm: "300px", base: "100%" }} my={"25px"}>
          <SearchBox placeholder={"Search jobs"} />
        </Box>
        <JobPostsTabs />
      </Box>
    </OperatorLayout>
  );
};

export default jobposts;
