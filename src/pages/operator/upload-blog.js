import CompanyTabs from "@/Components/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Components/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Components/SearchBox/SearchBox";
import ActiveJobs from "@/Components/CompanyTabs/ActiveJobs";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
import BlogForm from "@/Components/BlogForm/BlogForm";
import { BlogTimeline } from "@/Components/BlogTimeline/BlogTimeline";
const blog = () => {
  return (
    <OperatorLayout >
        {/* <BlogForm/> */}
        <BlogTimeline/>
      <DashboardFooter waveImage />
    </OperatorLayout>
  );
};

export default blog;
