import React from 'react'
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import { DataArray } from './tempSchema';
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

const NewJobSearchBox = ({selectedValues,toggle,settoggle,setTempObject }) => {

    <>
    {DataArray.map((object,index) => {  

    // const foundEmploymentType = selectedValues.length === 0 || selectedValues.includes(object.EmploymentType);
    // console.log("runn")
    // const foundExpType = selectedValues.some((Experience) => {
    //   const match = Experience.match(/(\d+) - (\d+) Years/);
    //   if (match) {
    //     const startYear = parseInt(match[1], 10);
    //     const endYear = parseInt(match[2], 10);
    //     return startYear <= object.Experience && object.Experience <= endYear;
    //   }
    // });
    
    // //need to do work from here 
    // const foundSalType = selectedValues.some((selectedValue) => {
    //   const match = selectedValue.match(/\$(\d+) - \$(\d+)/);
    //   if (!match) {
    //     return false;
    //   }
    //   const minValue = parseInt(match[1], 10);
    //   const maxValue = parseInt(match[2], 10);
    
    //   // Extract the numeric value from the value to compare
    //   const valueMatch = valueToCompare.match(/\$(\d+)/);
    //   if (!valueMatch) {
    //     return false;
    //   }
    //   const value = parseInt(valueMatch[1], 10); 
    //   return value >= minValue && value <= maxValue;
    // });
    // console.log(foundSalType, "I am found Type")
    
    // if(foundEmploymentType || foundExpType)
    // {
    // }
    // else
    //     return null;
    
        return (
          <Box
            p={{ sm: "20px", base: "12px" }}
            width={"100%"}
            borderRadius={"8px"}
            bg={"white.100"}
            border={"1px solid"}
            mb={10}
            borderWidth={1}
            borderColor="gray.100"
            onClick={()=>{settoggle(false);setTempObject(object)}}
            _hover={{
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
              border: '1px solid #2CA5C3'
            }}
          >
            {/* <Box
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              borderBottom={"1px solid "}
              flexWrap={{ xl: "nowrap", base: "wrap" }}
              borderColor={"gray.400"}
              pb={{ lg: "20px", base: "10px" }}
            >
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                gap={{ md: "18px", base: "12px" }}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  mt={"0px"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                >
                  <Image
                    width={{ md: "53px", base: "35px" }}
                    src={microsoft.src}
                    marginRight={2}
                  />
                  <Heading
                    variant={"p7"}
                    fontWeight={700}
                    color={"gray.text"}
                  >
                    {object.title}
                    <Box display={"flex"} alignItems={"center"}>
                      <Heading
                        variant={"p4"}
                        color={"gray.text"}
                        marginRight={1}
                      >
                        {object.name}
                      </Heading>
                      <Box
                        ml={1}
                        mt={"4px"}
                        display="flex"
                        alignItems="center"
                      >
                        <ComponentMyChip label={object.tags} />
                      </Box>
                    </Box>
                  </Heading>
                </Box>
                <Image
                  width={{ md: "10px", base: "20px" }}
                  src={EmptyVector.src}
                  mt={1.5}
                  marginRight={2}
                />
              </Box>
            </Box>
            <Box>
              <Box
                display={"flex"}
                gap={"40px"}
                mt={"12px"}
                alignItems={"center"}
              >
                <Box width={"100%"}>
                  <Heading variant={"p10"}>{object.location}</Heading>
                  <Box
                    mt={"10px"}
                    display={"flex"}
                    gap={"10px"}
                    justifyContent={"space-between"}
                    width={"100%"}
                  >
                    <Box
                      display={"flex"}
                      flexWrap={"wrap"}
                      gap={"10px"}
                      alignItems={"center"}
                    >
                      <Heading color={"gray.text"} variant={"p4"}>
                        {object.Salary}
                      </Heading>
                      <Box fontSize={{ sm: "14px", base: "8px" }}>
                        <GoDotFill style={{ color: "#D9D9D9" }} />
                      </Box>
                      <Heading color={"gray.text"} variant={"p4"}>
                        {object.EmploymentType}
                      </Heading>
                      <Box fontSize={{ sm: "14px", base: "8px" }}>
                        <GoDotFill style={{ color: "#D9D9D9" }} />
                      </Box>
                      <Heading color={"gray.text"} variant={"p4"}>
                        Experience: {object.Experience} years
                      </Heading>
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      textAlign={"end"}
                      justifyContent="flex-end"
                    >
                      <Heading color={"gray.text"} variant={"p4"}>
                        Application Deadline: {object.ApplicationDeadline}
                      </Heading>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Heading mt={"22px"} variant={"p10"}>
                  Desired Skills
                </Heading>
              </Box>

              <Box display={"flex"} justifyContent={"space-between"}>
                <Box
                  display={"flex"}
                  mt={"20px"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                >
                  {object.DesiredSkills.map((skill) => {
                    return (
                      <Box key={Math.random()} mr={"20px"} mb={"10px"}>
                        <ComponentMyChip label={skill} />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box> */}
          </Box>
        );
      }
      
      </>


export default NewJobSearchBox