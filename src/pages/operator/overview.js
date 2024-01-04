import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";
import ActiveJobs from "@/Components/CompanyTabs/ActiveJobs";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
import OperatorOverview from "@/Components/OperatorOverview/OperatorOverview";
const overview = () => {
  return (
    <OperatorLayout>
      <OperatorOverview />
      <DashboardFooter waveImage />
    </OperatorLayout>
  );
};

export default overview;
