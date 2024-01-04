import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";

import UsersTab from "@/Components/UsersTab/UsersTab";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
const users = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"}>
        <Box width={{ sm: "300px", base: "100%" }} my={"25px"}>
          <SearchBox placeholder={"Search users"} />
        </Box>
        <UsersTab />
      </Box>
      <DashboardFooter waveImage/>
    </OperatorLayout>
  );
};

export default users;
