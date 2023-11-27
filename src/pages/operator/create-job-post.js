import CompanyTabs from "@/Compomnents/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Compomnents/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Compomnents/SearchBox/SearchBox";

import UsersTab from "@/Compomnents/UsersTab/UsersTab";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
import UserFrom from "@/Compomnents/UserForm/UserForm";
import OperatorFrom from "@/Compomnents/OperatorsForm/OperatorsForm";
import JobPostTimeline from "@/Compomnents/JobPostTimeline/JobPostTimeline";
const createJobPost = () => {
    const jobTimeline =[
        { label: "Assign Job" },

    ]
  return (
    <OperatorLayout>
      <Box>
        <JobPostTimeline  assignJob timeLine={jobTimeline}  title="Create a New Job Post" />
      </Box>
      <DashboardFooter waveImage />
    </OperatorLayout>
  );
};

export default createJobPost;
