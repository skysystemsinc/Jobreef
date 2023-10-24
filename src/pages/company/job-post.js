import JobPostTabs from "@/Compomnents/JobPost/JobPost";
import CompanyDasboard from "@/Compomnents/Layout/DasboardLayout";
import PaginatedTable from "@/Compomnents/MembersTable/MembersTable";
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
        <Box px={"10px"}>
          <JobPostTabs />
        </Box>
      </CompanyDasboard>
    </>
  );
};

export default JobPost;
