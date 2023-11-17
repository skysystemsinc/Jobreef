import Header from "@/Compomnents/Header/Header";
import MyJobsTabs from "@/Compomnents/MyJobsTab/MyJobsTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import JobSearchCompanyPage from "../../Compomnents/JobSearchData/jobSearchCompanyPage";
import Footer from "@/Compomnents/Footer/Footer";

const jobSearchSelected = () => {
  return (
    <>
      <Header  candidate/>

      <Box display={"flex"} justifyContent={"center"} mt={"43px"}>
        <Box px={{ md: "20px", base: "10px" }}>
          <JobSearchCompanyPage />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default jobSearchSelected;
