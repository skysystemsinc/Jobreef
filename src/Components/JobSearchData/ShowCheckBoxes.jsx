import React from "react";
import { checkboxes } from "./tempSchema";


import {
  Button,
  Box,
  Heading,
  Checkbox,
  Icon,
} from "@chakra-ui/react";
import globalStyles from "@/styles/globalStyles";
import { FaTimes } from "react-icons/fa";

const ShowCheckBoxes = ({
  selectedValues,
  handleCheckboxChange,
  temp,
  settemp,
  DataSort,
  setIsOpen,
}) => {
  const listItme = ["Date Applied", "Relevance"];
  const listItme2 = ["Hybrid", "Remote", "Onsite"];
  const listItme3 = ["Full-Time", "Part Time", "Contract", "Internship"];
  const listItme4 = ["EntryLevel", "1 - 3 Years", "3 - 5 Years"];

  return (
    <>
      <Box
        width={{lg:'100%',base:'95%'}}
        m={{base:'10px'}}
        borderRadius={"8px"}
        borderWidth={1}
        borderColor="gray.400"
        display={"flex"}
        flexWrap={"wrap"}
        position={{lg:'sticky',base:''}}
        top={{lg:'180px',base:'10px'}}
        height= {{lg:'70vh',md:'80vh',base:'75vh'}}
        mt={{sm:'0px',base:'30px'}}
        overflowY= "auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "5px",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#797979",
            borderRadius: "30px",
          },
        }}
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
              <Box display={"flex"} justifyContent={"space-between"} alignitems="center">
                <Heading
                  mb={"8px"}
                  fontWeight={"bold"}
                  fontSize={16}
                  variant={"p4"}
                  color="gray.text"
                >
                  {object.heading}
                </Heading>          
                {object.heading == "Sort Jobs By" ? (<Icon display={{lg:'none',base:'block'}} onClick={()=>{setIsOpen(false)}}
                as={FaTimes} w={4} h={4} marginTop="2px" />):null}
              </Box>
              {object.values &&
                object.values.map((value) => {
                  if (object.heading == "Sort Jobs By" && value.key == "Date Posted"){
                    return(
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
                      > <Heading variant={"p4"} color={selectedValues.includes(value.key) ? 'blue.500' : 'gray.text'}>{value.key}</Heading></Checkbox>
                    )
                  }
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
