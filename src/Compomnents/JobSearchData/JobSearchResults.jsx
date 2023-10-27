import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiSearch, FiMapPin } from "react-icons/fi";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import Group from "@/assets/Images/Group.svg";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import cross from "../../assets/Images/cross.svg";
import NewJobSearchBox from "./NewJobSearchBox";
import ShowPreviousSearches from "./ShowPreviousSearches";
import { checkboxes, DataArray } from "./tempSchema";

import { parse, compareAsc, compareDesc } from 'date-fns';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Label,
  Image,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";
import ShowClickJobSearchBox from "./ShowClickJobSearchBox";

import ShowCheckBoxes from "./ShowCheckBoxes";


const JobSearchResults = () => {
  const originalArray = DataArray
  const [selectedValues, setSelectedValues] = useState([]);
  const [temp,settemp] = useState([]);
  const [tempObject, setTempObject] = useState();
  //Temporary Button Later on need to be deleted
  const [toggle, settoggle] = useState("false");
  const [Data,setData] = useState(DataArray)

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } 
    else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const deleteSelectedOptions = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  };

  const DataSort = (e) => {
    if (e)
    { 
      Data.sort((a, b) => {
        const dateA = parse(a.ApplicationDeadline, 'MM/dd/yyyy', new Date());
        const dateB = parse(b.ApplicationDeadline, 'MM/dd/yyyy', new Date()); 
        // return compareAsc(dateA, dateB);
        return compareDesc(dateA, dateB);
      });  
    }
    else
    {
      //need to do work here
        // setData(originalArray)
        Data.sort((a, b) => {
          const dateA = parse(a.ApplicationDeadline, 'MM/dd/yyyy', new Date());
          const dateB = parse(b.ApplicationDeadline, 'MM/dd/yyyy', new Date()); 
          // return compareAsc(dateA, dateB);
          return compareAsc(dateA, dateB);
        });
    }
  }

  return (
    <Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        margin={{ md: 10, base: "0px" }}
        gap={5}
        
      >
        <ShowCheckBoxes
          selectedValues={selectedValues} 
          handleCheckboxChange={handleCheckboxChange}
          temp={temp}
          settemp={settemp}
          DataSort={DataSort}
        />

        <Box flex={{base:3, lg:3, md:3}} flexWrap={"wrap"} >
          <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
            {selectedValues.map((val) => {
              return (
                <Box
                  display={"flex"}
                  mr={"20px"}
                  mb={"10px"}
                  key={Math.random()}
                  border="1px solid #2CA5C3"
                  borderRadius={"5px"}
                >
                  <ComponentMyChip label={val}>
                    <Image
                      width={"10px"}
                      src={cross.src}
                      marginRight={2}
                      onClick={() => deleteSelectedOptions(val)}
                      style={{ margin: "1px 0px 0px 10px" }}
                    />
                  </ComponentMyChip>
                </Box>
              );
            })}
          </Box>
          <Box display={{lg:"block",sm:"block",base:"block"}} >
            {toggle ? (<NewJobSearchBox
              setTempObject={setTempObject}
              selectedValues={selectedValues}
              toggle={toggle}
              settoggle={settoggle}
              Data={Data}
            />) : (
              <Box display={{lg:"block",sm:"none",base:"none"}}>
                <NewJobSearchBox
                  setTempObject={setTempObject}
                  selectedValues={selectedValues}
                  toggle={toggle}
                  settoggle={settoggle}
                  Data={Data}
                />
              </Box> 
            )
            }
          </Box>
        </Box>
        {/* <Box flex={{base:0, sm:0, md:0,lg:0}}> */}
          {toggle ? (
            <ShowPreviousSearches />
          ) : (
            <Box display="flex" flex={4} >
              <ShowClickJobSearchBox
                toggle={toggle}
                settoggle={settoggle}
                object={tempObject}
              />
            </Box>
          )}
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default JobSearchResults;
