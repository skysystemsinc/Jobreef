import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiSearch, FiMapPin } from "react-icons/fi";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import Group from "@/assets/Images/Group.svg";
import { FaTimes } from 'react-icons/fa';
import { useState } from "react";

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
  } from "@chakra-ui/react";

  const checkboxes = [
    {
      heading: "SortJobsBy",
      values: [
        { key: "datePosted", value: "Date Posted" },
        { key: "relevance", value: "Relevance" },
      ],
    },
    {
      heading: "JobModel",
      values: [
        { key: "hybrid", value: "Hybrid" },
        { key: "remote", value: "Remote" },
        { key: "onsite", value: "Onsite" },
      ],
    },
    {
      heading: "Employment Type",
      values: [
        { key: "fullTime", value: "Full-Time" },
        { key: "partTime", value: "Part-Time" },
        { key: "contract", value: "Contract" },
        { key: "internship", value: "Internship" },
      ],
    },
    {
        heading: "Experience",
        values: [
          { key: "entryLevel", value: "Entry-Level" },
          { key: "1 to 3 Years", value: 1 },
          { key: "3 to 5 Years", value: 3 },
          { key: "5 to 10 Years", value: 5 },
          { key: "10+ Years", value: 10 },
        ],
      },
      {
        heading: "Salary Type",
        values: [
          { key: "fixedSalary", value: "Fixed Salary" },
          { key: "50kTo70k", value: 50000 },
          { key: "70kTo100k", value: 70000 },
          { key: "100kPlus", value: 100000 },
        ],
      },
];
// const checkboxes = [
//     {
//         heading: "SortJobsBy",
//         values: ["Date Posted","Relevance"],
//     },
//     {
//         heading: "JobModel",
//         values: ["Hybrid", "Remote", "Onsite"],
//     },
//     {
//         heading: "Employment Type",
//         values: ["Full-Time", "Part-Time", "Contract", "Internship"],
//     },
    // {
    //     heading: "Experience",
    //     values: ["Entry-Level", "1-3 Years", "3-5 Years", "5-10 years", "10+ Years"],
    // },
    // {
    //     heading: "Salary Type",
    //     values: ["Fixed Salary", "50000$-70000$ Annual", "70000$-100000$ Annual" ,"1000000$+ Annual"],
    // },
// ]

const DataArray = [
    {
        imageurl: "",
        title: "Senior System's Design Engineer",
        name: "Microsoft",
        tags: "Urgently Hiring",
        location: "Redmond, Washington State",
        Salary: "150,000$",
        EmploymentType:"Full-Time",
        Experience: "3",
        ApplicationDeadline: "07/31/2023",
        DesiredSkills: ["Technical knowledge", "System Architecture", "Risk Management", "Project Management",
        "Quality Focus", "Q/A Testing", "LeaderShip", "Product Design"],
    }
]

 

const JobSearchResults = ({company, location}) => {

    const [selectedValues, setSelectedValues] = useState([]);
    const [companySearch,setCompany] = useState(company);
    const [locationSearch,setLocation] = useState(location);
    
    const handleCheckboxChange = (value) => {
        console.log(companySearch,locationSearch, "Iam log")
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
    }

  return (
    <Box display={"flex"} flexWrap={"wrap"} margin={10} gap={5}> 
        
        <Box borderWidth={1} borderColor="gray.100" width="100%" flex={1} display={"flex"} flexDirection={"column"}>
            {checkboxes.map((object,index)=>{
                return(
                    <Box borderWidth={0.25} borderBottomColor="gray.100" width="100%" p={4} key={Math.random()}>
                        <Heading color={"gray"} fontWeight={"bold"} fontSize={16} variant={"p4"}>
                            {object.heading}
                         </Heading>
                        {object.values && object.values.map((value)=>{
                            return(
                                <Box display={"block"} key={Math.random()} >
                                    <input type="checkbox" name="" id={value.key} style={{ marginRight: 10 }}
                                    checked={selectedValues.includes(value.key)}
                                    onChange={() => handleCheckboxChange(value.key)}
                                    />
                                    <label htmlFor={value.key} style={{ color: 'black' }}>
                                        {value.key}
                                    </label>
                                </Box>
                            ) 
                        })}
                    </Box>
                )
            })}  
        </Box>


        <Box flex={3}>
            <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
                {selectedValues.map((val)=>{
                    return(
                        <Box display={"flex"} mr={"20px"} mb={"10px"} key={Math.random()}>
                            <ComponentMyChip label={val}>
                            <FaTimes 
                                onClick={() => deleteSelectedOptions(val)} 
                                style={{color:'black',fontSize:14,fontWeight:'lighter',margin:"1px 0px 0px 10px" }}
                            />
                            </ComponentMyChip>
                        </Box>
                    )
                })}
            </Box>
            {
                DataArray.map((object)=>{

                    const check = () => {
                        return DataArray.some((item) =>
                          Object.values(item).some((value) => {
                            if (Array.isArray(value)) {
                              return value.some((skill) => selectedValues.includes(skill.key));
                            } else if (typeof value === 'string') {
                              return selectedValues.includes(value);
                            } else if (typeof value === 'object' && value.key && value.value) {
                              if(typeof value.value === 'number')   
                              {
                                  if(value.key >= 0 && value.key <= 10 )
                                    {

                                        return true;
                                    }
                              }
                              return selectedValues.includes(value.key);
                            }
                            
                            return false;
                          })
                        );
                      };
                      

                    // const check = 
                      
                    console.log(check());
                    console.log(selectedValues)
                    console.log(DataArray)
                    return(
                        <Box
                            key={Math.random()}
                            p={{ sm: "10px", base: "12px" }}    
                            mb={{ md: "33px", base: "20px" }}
                            width={"100%"}
                            borderRadius={"8px"}
                            bg={"white.100"}
                            border={"1px solid"}
                            borderColor={"gray.light"}
                            box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
                            >
                            <Box
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
                                >
                                <Box display={"flex"} mt={"0px"} alignItems={"center"} width={"100%"}>
                                    <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} marginRight={2} />
                                    <Box flex={1}>
                                        <Box flex={1} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                                            <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                                                {object.title}
                                            </Heading>
                                            <Image width={{ md: "20px", base: "20px" }} src={Group.src}/>
                                        </Box>
            
                                        <Box display={"flex"} alignItems={"center"}>
                                            <Heading variant={"p4"} color={"gray.text"} marginRight={1}>
                                                {object.name}       
                                            </Heading>
                                                <Box mr={"20px"} mt={"0px"}>
                                                    <ComponentMyChip label={object.tags} />
                                                </Box>
                                        </Box>
                                    </Box>
                                </Box>
            
                            </Box>
                        </Box>
            
                        <Box>
                            <Box display={"flex"} gap={"40px"} mt={"12px"} alignItems={"center"}>
                            <Box width={"100%"}>
                                <Heading variant={"p10"}>{object.location}</Heading>
                                <Box
                                mt={"10px"}
                                display={"flex"}
                                gap={"10px"}
                                justifyContent={"space-between"}
                                width={"100%"}
                                >
                                <Box display={"flex"} flexWrap={"wrap"} gap={"10px"}>
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
                                    {object.Experience} years
                                    </Heading>
                                </Box>
                                <Box display={"flex"} flexDirection="column" justifyContent="flex-end">
                                <Heading color={"gray.text"} variant={"p4"}>
                                    Application Deadline: {object.ApplicationDeadline}
                                </Heading>
                                </Box>
                                </Box>   
                            </Box>
                            </Box>
                            <Box>
                            <Heading mt={"22px"} variant={"p10"}>
                                Relevant Skills
                            </Heading>
                            </Box>
            
                            <Box display={"flex"} justifyContent={"space-between"} >
                            <Box display={"flex"} mt={"20px"} alignItems={"center"} flexWrap={"wrap"}>
                                {object.DesiredSkills.map((skill)=>{
                                    return(
                                        <Box key={Math.random()} mr={"20px"} mb={"10px"}>
                                            <ComponentMyChip label={skill} />
                                        </Box>
                                    )
                                })}
                            </Box>
                            </Box>
                        </Box>
                        </Box> 
                    )
                })
            }
            
        </Box>
        <Box borderWidth={1} borderColor="gray.100" width="100%" flex={1} display={"flex"} flexDirection={"column"}>
            <Heading mt={"22px"} ml={2} variant={"p10"}>
                Previous Searches
            </Heading>
        </Box>
    </Box>
  )
}

export default JobSearchResults