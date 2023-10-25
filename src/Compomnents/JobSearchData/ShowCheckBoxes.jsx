import React from 'react'
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import { checkboxes } from './tempSchema';
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

const ShowCheckBoxes = ({selectedValues,handleCheckboxChange}) => {
  return (
    <>
        <Box  display={{ lg: "flex", base: "none" }} width="100%" flex={1.25} flexDirection={"column"} flexWrap={"wrap"}>
          <Box width="100%" borderRadius={'8px'} borderWidth={1}
                  borderColor="gray.100" display={"flex"} flexDirection={"column"} flexWrap={"wrap"}>
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
                    color={"gray"}
                    fontWeight={"bold"}
                    fontSize={16}
                    variant={"p4"}
                  >
                    {object.heading}
                  </Heading>
                  {object.values &&
                    object.values.map((value) => {
                      return (
                        <Box display={"block"} key={Math.random()}>
                          <input
                            type="checkbox"
                            name=""
                            id={value.key}
                            style={{ marginRight: 10 }}
                            checked={selectedValues.includes(value.key)}
                            onChange={() => handleCheckboxChange(value.key)}
                          />
                          <label htmlFor={value.key} style={{ color: "black" }}>
                            {value.key}
                          </label>
                        </Box>
                      );
                    })}
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box display={{ lg: "none", base: "block" }}>
          <Box width="100%" display={"flex"}>
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
          </Box>
        </Box>
    </>
  )
}

export default ShowCheckBoxes