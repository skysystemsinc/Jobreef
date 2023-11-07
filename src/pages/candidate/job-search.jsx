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
import Footer from "@/Compomnents/Footer/Footer";
const JobSearch = () => {


  //need to be deleted temporarily useState
  const {getToggle} = useContext(Role_context); 
  const [isOpen,setIsOpen] = useState(false);

  return (
    <>
      <Header candidate/>
      
      <Box display={"flex"} justifyContent={"center"} mt={"0px"}  minHeight={"90vh"} >
        <Box
          width={"100%"}    
          px={{ md: "20px", base: "10px" }}
        >
          <Box marginTop={'0px'} pt={'0px'} pb={{md:'20px'}} position={{lg:getToggle() ? null : 'sticky'}} top={'65px'} zIndex={1} bg={"white.100"}>
            <JobSearchData setIsOpen={setIsOpen}/>
          </Box>
          {getToggle()?
            (<JobSearchEntry/>):
            (<JobSearchResults isOpen={isOpen} setIsOpen={setIsOpen} />)}
        </Box>
      </Box>
      {/* <BottomWaveImage /> */}
      <Footer waveImage />

    </>
    
  );
};

export default JobSearch;
