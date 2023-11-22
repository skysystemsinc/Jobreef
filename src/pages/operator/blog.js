import CompanyTabs from "@/Compomnents/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Compomnents/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Compomnents/SearchBox/SearchBox";

import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";

import BlogTabs from "@/Compomnents/BlogTabs/BlogTabs";
const blog = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"}>
        <Box width={{ sm: "300px", base: "100%" }} my={"25px"}>
          <SearchBox placeholder={"Search blog"} />
        </Box>
        <BlogTabs />
      </Box>
      <DashboardFooter waveImage />

    </OperatorLayout>
  );
};

export default blog;
