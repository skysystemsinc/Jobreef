import CompanyTabs from "@/Compomnents/CompanyDashoardTabs/CompanyDashboardTabs";
import Header from "@/Compomnents/Header/Header";
import CompanyDasboard from "@/Compomnents/Layout/DasboardLayout";
import SideBar from "@/Compomnents/SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import React from "react";

const comapanyDetails = () => {
  return (
    <>
      <CompanyDasboard>
        <Box display={"flex"} justifyContent={"center"}>
          <CompanyTabs />
        </Box>
      </CompanyDasboard>
    </>
  );
};

export default comapanyDetails;
