import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";
import ActiveJobs from "@/Components/CompanyTabs/ActiveJobs";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
import JobPostTimeline from "@/Components/JobPostTimeline/JobPostTimeline";
import { CreateCompanyTimeline } from "@/Components/CreateCompnyTimeline/CreateCompanyTimeline";
const index = () => {
  return (
    <OperatorLayout>
      <CreateCompanyTimeline/>
      <DashboardFooter waveImage/>

    </OperatorLayout>
  );
};

export default index;
