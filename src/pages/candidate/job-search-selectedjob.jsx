import Header from "@/Components/Header/Header";
import MyJobsTabs from "@/Components/MyJobsTab/MyJobsTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import JobSearchCompanyPage from "../../Components/JobSearchData/jobSearchCompanyPage";
import Footer from "@/Components/Footer/Footer";

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
