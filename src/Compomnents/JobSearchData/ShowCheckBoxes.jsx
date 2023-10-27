import React from "react";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import { checkboxes } from "./tempSchema";

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
  Checkbox,
} from "@chakra-ui/react";
import globalStyles from "@/styles/globalStyles";
import CheckBoxDropDown from "../CheckBoxDropDown/CheckBoxDropDown";
import CheckBoxDropDownKHI from "./checkboxdropdownkhi";

const ShowCheckBoxes = ({ selectedValues, handleCheckboxChange,temp,settemp,DataSort }) => {
  const listItme = ["Date Applied", "Relevance"];
  const listItme2 = ["Hybrid", "Remote", "Onsite"];
  const listItme3 = ["Full-Time", "Part Time", "Contract", "Internship"];
  const listItme4 = ["EntryLevel","1 - 3 Years","3 - 5 Years"]
      
  
  return (
    <>
      <Box
        display={{ lg: "flex", base: "none" }}
        width="270px"
        flexDirection={"column"}
        flexWrap={"wrap"}
        bg={"white.100"}
        borderRadius={50}
      >
        <Box
          width="100%"
          borderRadius={'8px'}
          borderWidth={1}
          borderColor="gray.400"
          display={"flex"}
          flexDirection={"column"}
          flexWrap={"wrap"}
        >
          {checkboxes.map((object, index) => {
            return (
              <Box
                borderTopWidth={1}
                borderTopColor={index > 0 ? "gray.400" : "transparent"}
                width="100%"
                p={4}
                key={Math.random()}
                display={"flex"}
                flexDirection={"column"}
                gap={1}
              >
                <Heading
                  mb={"8px"}
                  fontWeight={"bold"}
                  fontSize={16}
                  variant={"p4"}
                  color="gray.text"
                >
                  {object.heading}
                </Heading>
                {object.values &&
                  object.values.map((value) => {
                    if(object.heading == "Sort Jobs By")
                    {
                      return (
                        <Checkbox
                          mb={"8px"}
                          borderRadius={"10px"}
                          size="md"
                          borderColor={"gray.text"}
                          colorScheme="blue"
                          rounded={"sm"}
                          type="checkbox"
                          sx={globalStyles.checkBoxStyle}
                          isChecked={selectedValues.includes(value.key)}
                          onChange={(e) => 
                            {
                              handleCheckboxChange(value.key,e.target.value)
                              DataSort(e.target.checked)
                            }
                          }
                        >
                          <Heading
                            variant={"p4"}
                          >
                            {value.key}
                          </Heading>
                        </Checkbox>
                      );        
                    }
                    return (
                      <Checkbox
                        mb={"8px"}
                        borderRadius={"10px"}
                        size="md"
                        borderColor={"gray.text"}
                        colorScheme="blue"
                        rounded={"sm"}
                        type="checkbox"
                        sx={globalStyles.checkBoxStyle}
                        isChecked={selectedValues.includes(value.key)}
                        onChange={(e) => handleCheckboxChange(value.key,e.target.value)}
                      >
                        <Heading
                          variant={"p4"}
                        >
                          {value.key}
                        </Heading>
                      </Checkbox>
                    );
                  })}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box display={{ lg: "none", base: "block" }}>
      <Box
          mb={"20px"}
          flexWrap={"wrap"}
          overflowX={"scroll"}
          display={"flex"}
          alignItems={"center"}
          
          gap={{ md: "20px", base: "12px" }}  
        >
          {checkboxes.map((object, index) => {
            return (
              <Box
                borderTopWidth={1}
                borderTopColor={index > 0 ? "gray.400" : "transparent"}
                width="100%"
                p={4}
                key={Math.random()}
                display={"flex"}
                flexDirection={"column"}
                gap={1}
              >
                <Heading
                  mb={"8px"}
                  fontWeight={"bold"}
                  fontSize={16}
                  variant={"p4"}
                  color="gray.text"
                >
                  {object.heading}
                </Heading>
                {object.values &&
                  object.values.map((value) => {
                    if(object.heading == "Sort Jobs By")
                    {
                      return (
                        <Checkbox
                          mb={"8px"}
                          borderRadius={"10px"}
                          size="md"
                          borderColor={"gray.text"}
                          colorScheme="blue"
                          rounded={"sm"}
                          type="checkbox"
                          sx={globalStyles.checkBoxStyle}
                          isChecked={selectedValues.includes(value.key)}
                          onChange={(e) => 
                            {
                              handleCheckboxChange(value.key,e.target.value)
                              DataSort(e.target.checked)
                            }
                          }
                        >
                          <Heading
                            variant={"p4"}
                          >
                            {value.key}
                          </Heading>
                        </Checkbox>
                      );        
                    }
                    return (
                      <Checkbox
                        mb={"8px"}
                        borderRadius={"10px"}
                        size="md"
                        borderColor={"gray.text"}
                        colorScheme="blue"
                        rounded={"sm"}
                        type="checkbox"
                        sx={globalStyles.checkBoxStyle}
                        isChecked={selectedValues.includes(value.key)}
                        onChange={(e) => handleCheckboxChange(value.key,e.target.value)}
                      >
                        <Heading
                          variant={"p4"}
                        >
                          {value.key}
                        </Heading>
                      </Checkbox>
                    );
                  })}
              </Box>
            );
          })}
          <CheckBoxDropDownKHI/>
        </Box>
        {/* <Box
          mb={"20px"}
          flexWrap={"wrap"}
          overflowX={"scroll"}
          display={"flex"}
          alignItems={"center"}
          
          gap={{ md: "20px", base: "12px" }}  
        >
          <CheckBoxDropDown listItme={listItme} label="Sort Jobs Data" />
          <CheckBoxDropDown listItme={listItme2} label="jobs Model" />
          <CheckBoxDropDown listItme={listItme3} label="Employment Type" />
          <CheckBoxDropDown listItme={listItme3} label="Experience" />
        </Box> */}
        {/* <Box width="100%" display={"flex"}>
          {checkboxes.map((object, index) => {
            return (
              <Box
                borderWidth={1}
                borderColor="gray.100"
                width="100%"
                p={4}
                key={Math.random()}
              >
                <Heading
                  color={"gray"}
                  fontWeight={"bold"}
                  fontSize={16}
                  variant={"p4"}
                >
                  {object.heading}
                </Heading>
                <Select
                  color={"gray"}
                  isMulti
                  value={selectedValues}
                  onChange={(event) => {
                    console.log(
                      "Selected Values",
                      event.target.selectedOptions
                    );
                    const selectedOptions = event.target.selectedOptions;
                    const selectedValues = Array.from(selectedOptions).map(
                      (option) => option.value
                    );
                    handleCheckboxChange(selectedValues);
                  }}
                >
                  {object.values &&
                    object.values.map((value) => (
                      <option key={value.key} value={value.key}>
                        {value.key}
                      </option>
                    ))}
                </Select>
              </Box>
            );
          })}
        </Box> */}
      </Box>
    </>
  );
};

export default ShowCheckBoxes;
