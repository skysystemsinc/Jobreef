import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
import CompanyDasboard from "@/Compomnents/Layout/DashboardLayout";
import TeamMembers from "@/Compomnents/TeamMembers/TeamMembers";

import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const TeamMemeber = () => {
  const router = useRouter();
  return (
    <>
      <CompanyDasboard  >
        <Box
          // position={"relative"} top={"0px"} zIndex={2}
          display={"flex"}
          px={{ md: "21px", base: "5px" }}
          justifyContent={"center"}
 
        >
          <TeamMembers />
        </Box>
        <DashboardFooter />
      </CompanyDasboard>
    </>
  );
};

export default TeamMemeber;
