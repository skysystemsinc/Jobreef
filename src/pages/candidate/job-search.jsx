import Header from "@/Compomnents/Header/Header";
import JobSearchData from "@/Compomnents/JobSearchData/JobSearchData";
import JobSearchResults from "@/Compomnents/JobSearchData/JobSearchResults";
import { Box,Button, Heading } from "@chakra-ui/react";
import React from "react";
import BottomWaveImage from "../../Compomnents/BottomWaveImage/BottomWaveImage";
import JobSearchEntry from "@/Compomnents/JobSearchData/JobSearchEntry";
import { useState } from "react";

const JobSearch = () => {

  const [company,setCompany] = useState('');
  const [location,setLocation] = useState('');

  //need to be deleted temporarily useState
  const[load,setload] = useState(true)


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
          {load?
            (<JobSearchEntry/>):
            (<JobSearchResults company={company} location={location}/>)}
        </Box>
      </Box>
      <Button
        onClick={()=>{load?setload(false):setload(true)}}
        style={{padding:"20px 40px 20px 40px"}}
        variant="blue-btn"
        marginLeft="43%"  // Add margin to the button for space
      >
        Toggle
      </Button>
      <BottomWaveImage />
    </>
    
  );
};

export default JobSearch;
