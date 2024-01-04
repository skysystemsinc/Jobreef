import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";

import UsersTab from "@/Components/UsersTab/UsersTab";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
import UserFrom from "@/Components/UserForm/UserForm";
const createUser = () => {
  return (
    <OperatorLayout>
      <Box>
        <UserFrom />
      </Box>
      <DashboardFooter waveImage />
    </OperatorLayout>
  );
};

export default createUser;
