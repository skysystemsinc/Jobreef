import JobPostTabs from "@/Compomnents/JobPost/JobPost";
import CompanyDasboard from "@/Compomnents/Layout/DasboardLayout";
import PaginatedTable from "@/Compomnents/MembersTable/MembersTable";
import TeamMembers from "@/Compomnents/TeamMembers/TeamMembers";

import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  return (
    <>
      <CompanyDasboard placement="flex-start" >
        <JobPostTabs />
      </CompanyDasboard>
    </>
  );
};

export default index;
