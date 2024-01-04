import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";
import ActiveJobs from "@/Components/CompanyTabs/ActiveJobs";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
import JobPostTimeline from "@/Components/JobPostTimeline/JobPostTimeline";
const index = () => {
  return (
    <OperatorLayout>
      <Box px={"30px"}>
        <JobPostTimeline timeLine={[]} isEdit title="Edit Job Post" />
      </Box>
      <DashboardFooter waveImage />
    </OperatorLayout>
  );
};

export default index;
