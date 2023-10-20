import Header from "@/Compomnents/Header/Header";
import MyJobsTabs from "@/Compomnents/MyJobsTab/MyJobsTabs";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import JobSearchCompanyPage from "./jobSearchCompanyPage";


const jobSearchSelected = () => {
  return (
    <>
      <Header />

      <Box display={"flex"} justifyContent={"center"} mt={"43px"}>
        <Box
          // width={{ xl: "100%", base: "100%" }}
          width={"100%"}
          px={{ md: "20px", base: "10px" }}
        >
          <JobSearchCompanyPage/>
        </Box>
      </Box>
    </>
    
  );
};

export default jobSearchSelected;
