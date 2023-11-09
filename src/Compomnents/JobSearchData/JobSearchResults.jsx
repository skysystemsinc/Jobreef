import React from "react";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import { useState } from "react";
import cross from "../../assets/Images/cross.svg";
import NewJobSearchBox from "./NewJobSearchBox";
import ShowPreviousSearches from "./ShowPreviousSearches";
import { DataArray } from "./tempSchema";

import { parse, compareAsc, compareDesc } from "date-fns";
import { Icon, Box, Image, Button } from "@chakra-ui/react";
import ShowClickJobSearchBox from "./ShowClickJobSearchBox";

import ShowCheckBoxes from "./ShowCheckBoxes";
import MobileSortBy from "./MobileSortBy";
import { FaTimes } from "react-icons/fa";

const JobSearchResults = ({ isOpen, setIsOpen }) => {
  const originalArray = DataArray;
  const [selectedValues, setSelectedValues] = useState([]);
  const [temp, settemp] = useState([]);
  const [tempObject, setTempObject] = useState();
  const [toggle, settoggle] = useState("false");
  const [Data, setData] = useState(DataArray);
  const screenWidth = window.screen.width; // Total screen width
  const screenHeight = window.screen.height; // Total screen height

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
        display={"flex"}
        flexDirection={{ lg: "row", base: "column" }}
        margin={{ md: 10, base: "0px" }}
        gap={5}
      >
        {/* <Box
          flex={2.5}
          // bg={"white.100"}
          display={{ lg: "block", base: "none" }}
        >
          <ShowCheckBoxes
            selectedValues={selectedValues}
            handleCheckboxChange={handleCheckboxChange}
            temp={temp}
            settemp={settemp}
            DataSort={DataSort}
          />
        </Box> */}
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
