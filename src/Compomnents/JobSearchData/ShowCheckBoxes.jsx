import React from "react";
import { checkboxes } from "./tempSchema";


import {
  Box,
  Heading,
  Checkbox,
} from "@chakra-ui/react";
import globalStyles from "@/styles/globalStyles";

const ShowCheckBoxes = ({
  selectedValues,
  handleCheckboxChange,
  temp,
  settemp,
  DataSort,
}) => {
  const listItme = ["Date Applied", "Relevance"];
  const listItme2 = ["Hybrid", "Remote", "Onsite"];
  const listItme3 = ["Full-Time", "Part Time", "Contract", "Internship"];
  const listItme4 = ["EntryLevel", "1 - 3 Years", "3 - 5 Years"];

  return (
    <>
      <Box
        width="100%"
        borderRadius={"8px"}
        borderWidth={1}
        borderColor="gray.400"
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"wrap"}
      >
        {checkboxes.map((object, index) => {
          return (
            <Box
              key={index}
              borderTopWidth={1}
              borderTopColor={index > 0 ? "gray.400" : "transparent"}
              width="100%"
              p={4}
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
                  if (object.heading == "Sort Jobs By") {
                    return (
                      <Checkbox
                        key={Math.random()}
                        mb={"8px"}
                        borderRadius={"10px"}
                        size="md"
                        borderColor={"gray.text"}
                        colorScheme="blue"
                        rounded={"sm"}
                        type="checkbox"
                        sx={globalStyles.checkBoxStyle}
                        isChecked={selectedValues.includes(value.key)}
                        onChange={(e) => {
                          handleCheckboxChange(value.key, e.target.value);
                          DataSort(e.target.checked);
                        }}
                      >
                        <Heading variant={"p4"} color={selectedValues.includes(value.key) ? 'blue.500' : 'gray.text'}>{value.key}</Heading>
                      </Checkbox>
                    );
                  }
                  return (
                    <Checkbox
                      key={index+Math.random()}
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
                        handleCheckboxChange(value.key, e.target.value)
                      }
                    >
                      <Heading variant={"p4"} color={selectedValues.includes(value.key) ? 'blue.500' : 'gray.text'}>{value.key}</Heading>
                    </Checkbox>
                  );
                })}
            </Box>
          );
        })}
      </Box>

    
    </>
  );
};

export default ShowCheckBoxes;
