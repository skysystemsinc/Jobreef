import Header from "@/Compomnents/Header/Header";
import JobSearchData from "@/Compomnents/JobSearchData/JobSearchData";
import JobSearchResults from "@/Compomnents/JobSearchData/JobSearchResults";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BottomWaveImage from "../../Compomnents/BottomWaveImage/BottomWaveImage";
import JobSearchEntry from "@/Compomnents/JobSearchData/JobSearchEntry";
import { useState } from "react";

const JobSearch = () => {

  const [company,setCompany] = useState('');
  const [location,setLocation] = useState('');


  var companykeyword = ''
  var locationkeyword = ''

  const searchEntryForCompany = (e) => {
    companykeyword = e
  }

  const SearchEntryForLocation = (e) => {
    locationkeyword = e
  }

  const SearchNow = (e) => {
      setCompany(companykeyword)
      setLocation(locationkeyword)  
      console.log("Search Now Clicked")
  }  

  return (
    <>
      <Header />

      <Box display={"flex"} justifyContent={"center"} mt={"0px"}>
        <Box
          width={"100%"}    
          px={{ md: "20px", base: "10px" }}
        >
          <JobSearchData searchEntryForCompany={searchEntryForCompany} SearchEntryForLocation={SearchEntryForLocation} SearchNow={SearchNow}/>
          {/* <JobSearchEntry/> */}
          <JobSearchResults company={company} location={location}/>
        </Box>
      </Box>
      <BottomWaveImage />
    </>
    
  );
};

export default JobSearch;
