'use client'
import DashboardFooter from "@/Components/Footer/DashboardFooter";
import JobPostTabs from "@/Components/JobPost/JobPost";
import CompanyDasboard from "@/Components/Layout/DashboardLayout";
import PaginatedTable from "@/Components/PaginatedTable/PaginatedTable";
import TeamMembers from "@/Components/TeamMembers/TeamMembers";

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
