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

import { parse, compareAsc, compareDesc } from "date-fns";
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
import MobileSortBy from "./MobileSortBy";

const JobSearchResults = () => {
  const originalArray = DataArray;
  const [selectedValues, setSelectedValues] = useState([]);
  const [temp, settemp] = useState([]);
  const [tempObject, setTempObject] = useState();
  //Temporary Button Later on need to be deleted
  const [toggle, settoggle] = useState("false");
  const [Data, setData] = useState(DataArray);

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const deleteSelectedOptions = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  };

  const DataSort = (e) => {
    if (e) {
      Data.sort((a, b) => {
        const dateA = parse(a.ApplicationDeadline, "MM/dd/yyyy", new Date());
        const dateB = parse(b.ApplicationDeadline, "MM/dd/yyyy", new Date());
        // return compareAsc(dateA, dateB);
        return compareDesc(dateA, dateB);
      });
    } else {
      //need to do work here
      // setData(originalArray)
      Data.sort((a, b) => {
        const dateA = parse(a.ApplicationDeadline, "MM/dd/yyyy", new Date());
        const dateB = parse(b.ApplicationDeadline, "MM/dd/yyyy", new Date());
        // return compareAsc(dateA, dateB);
        return compareAsc(dateA, dateB);
      });
    }
  };

  return (
    <Box>
      <MobileSortBy
        DataSort={DataSort}
        handleCheckboxChange={handleCheckboxChange}
        selectedValues={selectedValues}
      />
      <Box
        // bg={"black.100"}
        // border={"1px solid red"}
        display={"flex"}
        flexDirection={{ lg: "row", base: "column" }}
        // flexWrap={"wrap"}
        margin={{ md: 10, base: "0px" }}
        gap={5}
        // backgroundColor={"yellow"}
      >
        <Box
          flex={2.5}
          display={{ lg: "block", base: "none" }}
          // border={"1px solid red"}
        >
          <ShowCheckBoxes
            selectedValues={selectedValues}
            handleCheckboxChange={handleCheckboxChange}
            temp={temp}
            settemp={settemp}
            DataSort={DataSort}
          />
        </Box>
        <Box
          flex={{ lg: 5, base: "100%" }}
          display={{ lg: "block", base: "none" }}
        >
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            {selectedValues.map((val) => {
              return (
                <ComponentMyChip style={{marginBottom:"10px", p:"5px 12px" , border:'1px solid ',borderColor:'blue.500'}}  label={val}>
                  <Image
                    width={"10px"}
                    src={cross.src}
                    marginRight={2}
                    onClick={() => deleteSelectedOptions(val)}
                    style={{ margin: "1px 0px 0px 10px" }}
                  />
                </ComponentMyChip>
                // </Box>
              );
            })}
          </Box>
          <Box>
            <NewJobSearchBox
              setTempObject={setTempObject}
              selectedValues={selectedValues}
              toggle={toggle}
              settoggle={settoggle}
              Data={Data}
            />
            {/* {toggle ? (<NewJobSearchBox
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
            } */}
          </Box>
        </Box>
        {toggle ? (
          <Box flex={"100%"} display={{ lg: "none", base: "block" }}>
            <Box gap={2} display={"flex"}>
              {selectedValues.map((val) => {
                return (
                  <ComponentMyChip label={val} style={{marginBottom:"10px", p:"5px 12px" , border:'1px solid ',borderColor:'blue.500'}}>
                    
                    <Image
                      width={"10px"}
                      src={cross.src}
                      marginRight={2}
                      onClick={() => deleteSelectedOptions(val)}
                      style={{ margin: "1px 0px 0px 10px" }}
                    />
                  </ComponentMyChip>
                  // </Box>
                );
              })}
            </Box>
            <Box>
              <NewJobSearchBox
                setTempObject={setTempObject}
                selectedValues={selectedValues}
                toggle={toggle}
                settoggle={settoggle}
                Data={Data}
              />
        
            </Box>
          </Box>
        ) : null}

        {toggle ? (
          <Box flex={2.8} display={{ lg: "block", base: "none" }}>
            <ShowPreviousSearches />
          </Box>
        ) : (
          <Box flex={{ lg: 5.6, base: "100%" }}>
            <ShowClickJobSearchBox
              toggle={toggle}
              settoggle={settoggle}
              object={tempObject}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default JobSearchResults;
