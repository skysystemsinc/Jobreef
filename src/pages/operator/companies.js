import CompanyTabs from "@/Compomnents/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Compomnents/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Compomnents/SearchBox/SearchBox";
import ActiveJobs from "@/Compomnents/CompanyTabs/ActiveJobs";
const companies = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"}>
        <Box width={"300px"} my={"25px"}>
          <SearchBox />
        </Box>
        {/* <ActiveJobs/> */}
        <CompanyTabs />
      </Box>
    </OperatorLayout>
  );
};

export default companies;
