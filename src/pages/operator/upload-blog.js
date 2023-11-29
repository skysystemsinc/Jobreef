import CompanyTabs from "@/Compomnents/CompanyTabs/CompanyTabs";
import OperatorLayout from "@/Compomnents/Layout/OperatorLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBox from "@/Compomnents/SearchBox/SearchBox";
import ActiveJobs from "@/Compomnents/CompanyTabs/ActiveJobs";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
import BlogForm from "@/Compomnents/BlogForm/BlogForm";
import { BlogTimeline } from "@/Compomnents/BlogTimeline/BlogTimeline";
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
