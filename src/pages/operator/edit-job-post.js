import CompanyTabs from "@/Compomnents/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Compomnents/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Compomnents/SearchBox/SearchBox";
import ActiveJobs from "@/Compomnents/CompanyTabs/ActiveJobs";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
import JobPostTimeline from "@/Compomnents/JobPostTimeline/JobPostTimeline";
const index = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"}>
        <JobPostTimeline isEdit title="Edit Job Post" />
      </Box>
      <DashboardFooter waveImage/>

    </OperatorLayout>
  );
};

export default index;
