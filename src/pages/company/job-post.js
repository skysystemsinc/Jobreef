import JobPostTabs from "@/Compomnents/JobPost/JobPost";
import CompanyDasboard from "@/Compomnents/Layout/DasboardLayout";
import PaginatedTable from "@/Compomnents/PaginatedTable/PaginatedTable";
import TeamMembers from "@/Compomnents/TeamMembers/TeamMembers";

import { Box, Button, Flex } from "@chakra-ui/react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useRouter } from "next/router";
import React, { useState } from "react";

const JobPost = () => {
  const router = useRouter();
  return (
    <>

      <CompanyDasboard>
        <Box px={{ md: "20px" , base:'10px' }} position={"relative"} top={"0px"} zIndex={2} >
          <JobPostTabs />
        </Box>
      </CompanyDasboard>
    </>
  );
};

export default JobPost;
