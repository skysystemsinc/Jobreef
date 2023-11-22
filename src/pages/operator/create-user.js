import CompanyTabs from "@/Compomnents/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Compomnents/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Compomnents/SearchBox/SearchBox";

import UsersTab from "@/Compomnents/UsersTab/UsersTab";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
import UserFrom from "@/Compomnents/UserForm/UserForm";
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