import Header from "@/Compomnents/Header/Header";
import JobSearchData from "@/Compomnents/JobSearchData/JobSearchData";
import JobSearchResults from "@/Compomnents/JobSearchData/JobSearchResults";
import { Box,Button, Heading } from "@chakra-ui/react";
import React from "react";
import BottomWaveImage from "../../Compomnents/BottomWaveImage/BottomWaveImage";
import { useState } from "react";
import { Role_context } from "../../context/context";
import {useContext} from "react";
import JobSearchEntry from "@/Compomnents/JobSearchData/JobSearchEntry";
const JobSearch = () => {


  //need to be deleted temporarily useState
  const[load,setload] = useState(true)
  const {getToggle} = useContext(Role_context); 

  return (
    <>
      <Header candidate/>
      
      <Box display={"flex"} justifyContent={"center"} mt={"0px"}  minHeight={"90vh"}>
        <Box
          width={"100%"}    
          px={{ md: "20px", base: "10px" }}
        >
          <JobSearchData/>
          {getToggle()?
            (<JobSearchEntry/>):
            (<JobSearchResults />)}
        </Box>
      </Box>
      <BottomWaveImage />
    </>
    
  );
};

export default JobSearch;
