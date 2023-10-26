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

const ShowCheckBoxes = ({ selectedValues, handleCheckboxChange }) => {
  const listItme = ["Date Applied", "Relevance"];
  const listItme2 = ["New", "Read", "Interviewing", "Closed"];
  const listItme3 = ["Masters Degree or Higher", "Bachelor’s Degree or Higher", "Associate Degree or Higher", "Closed"];
  const listItme4 = ["Associate Degree or Higher", "System Architecture", "Product Design", "Leadership"];
  return (
    <>
      <Box
        display={{ lg: "flex", base: "none" }}
        width="270px"
        // flex={1.25}
        flexDirection={"column"}
        flexWrap={"wrap"}
        bg={"white.100"}
      >
        <Box
          width="100%"
          borderRadius={"8px"}
          borderWidth={1}
          borderColor="gray.100"
          display={"flex"}
          flexDirection={"column"}
          flexWrap={"wrap"}
        >
          {checkboxes.map((object, index) => {
            return (
              <Box
                borderWidth={1}
                borderTopColor={index > 0 ? "gray.100" : "transparent"}
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
                    return (
                      <Checkbox
                        mb={"8px"}
                        borderRadius={"10px"}
                        size="md"
                        borderColor={"gray.text"}
                        colorScheme="blue"
                        rounded={"sm"}
                        sx={globalStyles.checkBoxStyle}
                        checked={selectedValues.includes(value.key)}
                        onChange={() => handleCheckboxChange(value.key)}
                      >
                        <Heading
                          // color={checkBoxs.relevance ? "blue.500" : "black.200"}
                          variant={"p4"}
                        >
                          {value.key}

                          {/* Relevance */}
                        </Heading>
                      </Checkbox>
                      // <Box display={"flex"} gap={"3px"} alignItems={"center"} key={Math.random()}>
                      //   <input
                      //     type="checkbox"
                      //     name=""
                      //     id={value.key}
                      //     style={{ marginRight: 10 }}
                      //     checked={selectedValues.includes(value.key)}
                      //     onChange={() => handleCheckboxChange(value.key)}
                      //   />

                      //   <label htmlFor={value.key} style={{ color: "black" }}>
                      //       {value.key}
                      //     </label>
                      // </Box>
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
          // min={"400px"}
          
        >
          <CheckBoxDropDown listItme={listItme} label="Sort Candidates By" />
          <CheckBoxDropDown listItme={listItme2} label="Status" />
          <CheckBoxDropDown listItme={listItme3} label="Education" />
          <CheckBoxDropDown listItme={listItme3} label="Skills" />
        </Box>
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
