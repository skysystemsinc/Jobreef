import CompanyTabs from "@/Compomnents/CompanyDashoardTabs/CompanyDashboardTabs";
import Header from "@/Compomnents/Header/Header";
import SideBar from "@/Compomnents/SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import React from "react";

const comapanyDetails = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Box
    //    border={"1px solid black"}
        display={"flex"} justifyContent={"center"} ml={"230px"}   mt={"40px"} >

        <CompanyTabs />
      </Box>
    </>
  );
};

export default comapanyDetails;
