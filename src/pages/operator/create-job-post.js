import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";

import UsersTab from "@/Components/UsersTab/UsersTab";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
import UserFrom from "@/Components/UserForm/UserForm";
import OperatorFrom from "@/Components/OperatorsForm/OperatorsForm";
import JobPostTimeline from "@/Components/JobPostTimeline/JobPostTimeline";
import OperatorJobPost from "@/Components/OperatorJobPost/OperatorJobPost";
const createJobPost = () => {
    const jobTimeline =[
        { label: "Assign Job" },

    ]
  return (
    <OperatorLayout>
      <Box>
        <OperatorJobPost     title="Create a New Job Post" />
      </Box>
      <DashboardFooter waveImage />
    </OperatorLayout>
  );
};

export default createJobPost;
