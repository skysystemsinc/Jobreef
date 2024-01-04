'use client'
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
import JobPostTabs from "@/Compomnents/JobPost/JobPost";
import CompanyDasboard from "@/Compomnents/Layout/DashboardLayout";
import PaginatedTable from "@/Compomnents/PaginatedTable/PaginatedTable";
import TeamMembers from "@/Compomnents/TeamMembers/TeamMembers";

import { Box, Button, Flex } from "@chakra-ui/react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const JobPost = () => {
  const router = useRouter();
  

  return (
    <>
      <CompanyDasboard disableWaveImage>
        <Box
          px={{ md: "20px", base: "10px" }}
          position={"relative"}
          top={"0px"}
          zIndex={2}
          pb={"50px"}
        >
          <JobPostTabs />
        </Box>
        <DashboardFooter waveImage />
      </CompanyDasboard>
      
    </>
  );
};

export default JobPost;
