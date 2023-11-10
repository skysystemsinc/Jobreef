import React from "react";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import { useState, useEffect, useContext } from "react";
import cross from "../../assets/Images/cross.svg";
import NewJobSearchBox from "./NewJobSearchBox";
import ShowPreviousSearches from "./ShowPreviousSearches";
import { DataArray } from "./tempSchema";

import { parse, compareAsc, compareDesc } from "date-fns";
import { Icon, Box, Image, Button,Heading } from "@chakra-ui/react";
import ShowClickJobSearchBox from "./ShowClickJobSearchBox";

import ShowCheckBoxes from "./ShowCheckBoxes";
import MobileSortBy from "./MobileSortBy";
import { FaTimes } from "react-icons/fa";

import { Role_context } from "../../context/context";

const JobSearchResults = ({ isOpen, setIsOpen }) => {
  const originalArray = DataArray;
  const [selectedValues, setSelectedValues] = useState([]);
  const [temp, settemp] = useState([]);
  const [tempObject, setTempObject] = useState();
  const [toggle, settoggle] = useState("false");
  const [Data, setData] = useState(DataArray);
  const screenWidth = window.screen.width; // Total screen width
  const screenHeight = window.screen.height; // Total screen height

  const {
    searchEntryLocation,
    searchEntryCompany,
} = useContext(Role_context);

  const filterData = (object) => {

     //Search by Company Name
     const foundCompanyName = searchEntryCompany === '' ? true : object.name.toLowerCase().includes(searchEntryCompany.toLowerCase())
     //Search by Location
     const foundLocationName = searchEntryLocation === '' ? true : object.location.toLowerCase().includes(searchEntryLocation.toLowerCase());
     // Search by Job Model
     const foundJobModel = selectedValues.includes(object.JobModel)
     // Search by Employement Type
     const foundEmploymentType = selectedValues.length === 0 || selectedValues.includes(object.EmploymentType);
     // Search by Experience Type
     const foundExpType = selectedValues.some((Experience) => {
       const match = Experience.match(/(\d+) - (\d+) Years/);
       if (match) {
         const startYear = parseInt(match[1], 10);
         const endYear = parseInt(match[2], 10);
         return startYear <= object.Experience && object.Experience < endYear;
       }
     });
     // Search by Salary Type
     const foundSalType = selectedValues.some((selectedValue) => {
       const salary = object.Salary;
       const numericSalary = parseFloat(salary.replace(/[^0-9.]+/g, ''));
     
       if (selectedValue === "Fixed Salary") {
         return true;
       }
       if (selectedValue === "$50000 - $70000 Annual") {
         const minValue = 50000;
         const maxValue = 70000;
         return numericSalary >= minValue && numericSalary <= maxValue;
       }
       if (selectedValue === "$70000 - $100,000 Annual") {
         const minValue = 70000;
         const maxValue = 100000;
         return numericSalary >= minValue && numericSalary <= maxValue;
       }
       if (selectedValue === "$100,000 + Annual") {
         const minValue = 100000;
         return numericSalary >= minValue;
       }
     
       return false;
     });

    //  console.log(foundEmploymentType,foundExpType, foundSalType,foundJobModel,(selectedValues.length === 1 && selectedValues[0] === "Date Posted"), "I am Job Model")
    //  console.log(foundCompanyName, foundLocationName,searchEntryCompany,searchEntryLocation,"Company name and location" ) 
     return (foundCompanyName && foundLocationName) && (foundEmploymentType || foundExpType || foundSalType || foundJobModel || (selectedValues.length === 1 && selectedValues[0] === "Date Posted"));

    }

  useEffect(() => {
    setData(DataArray.filter((e) => filterData(e)))
  },[selectedValues,searchEntryCompany,searchEntryLocation])

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
      {Data.length &&<Box display={"flex"} gap={'4px'} ml={{lg:"40px",md:'40px',base:'2px'}} mb={{lg:'-30px',md:'-30px',base:'0px'}} >
        <Heading variant="p5">Shown Results:</Heading>
        <Heading variant="p5" color={'blue.500'}>{Data.length}</Heading>
      </Box>}
      <Box
        display={"flex"}
        flexDirection={{ lg: "row", base: "column" }}
        margin={{ md: 10, base: "0px" }}
        gap={5}
      >
        <Box
          flex={{ lg: 5, base: "100%" }}
          display={{ lg: "block", base: "none" }}
        >
          <Box
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {selectedValues.map((val) => {
              return (
                <ComponentMyChip
                  style={{
                    marginBottom: "10px",
                    p: "5px 12px",
                    border: "1px solid ",
                    borderColor: "blue.500",
                  }}
                  label={val}
                >
                  <Image
                    width={"10px"}
                    src={cross.src}
                    marginRight={2}
                    onClick={() => deleteSelectedOptions(val)}
                    style={{ margin: "1px 0px 0px 10px" }}
                  />
                </ComponentMyChip>
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
        {toggle ? (
          <Box flex={"100%"} display={{ lg: "none", base: "block" }}>
            {/* need to do work from here */}
            {isOpen ? (
              <Box
                gap={2}
                display={{ sm: "none", base: "flex" }}
                flexWrap={"wrap"}
                position="fixed"
                top={12}
                left={0}
                width={"100vw"}
                height={"100vh"}
                backgroundColor="white"
                transition="right 0.3s"
                justifyContent={"center"}
              >
                <ShowCheckBoxes
                  selectedValues={selectedValues}
                  handleCheckboxChange={handleCheckboxChange}
                  temp={temp}
                  settemp={settemp}
                  DataSort={DataSort}
                  setIsOpen={setIsOpen}
                />
                <Button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  sx={{ padding: "20px 60px 20px 60px" }}
                  variant="blue-btn"
                  marginLeft="2" // Add margin to the button for space
                  marginTop={"-50px"}
                >
                  Set Filters
                </Button>
              </Box>
            ) : null}

            <Box gap={2} display={"flex"} flexWrap={"wrap"}>
              {selectedValues.map((val) => {
                return (
                  <ComponentMyChip
                    label={val}
                    style={{
                      marginBottom: "10px",
                      p: "5px 12px",
                      border: "1px solid ",
                      borderColor: "blue.500",
                    }}
                  >
                    <Image
                      width={"10px"}
                      src={cross.src}
                      marginRight={2}
                      onClick={() => deleteSelectedOptions(val)}
                      style={{ margin: "1px 0px 0px 10px" }}
                    />
                  </ComponentMyChip>
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
          <Box
            flex={1.9}
            display={{ lg: "block", base: "none" }}
            bg={"white.100"}
          >
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
