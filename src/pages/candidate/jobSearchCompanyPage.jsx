import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Image
  } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import EmptyVector from "../../assets/Images/EmptyVector.svg"
import cross from "../../assets/Images/cross.svg"
import arrowright from "../../assets/Images/arrowright.svg"

import employeedesignation from "../../assets/Images/employee-designation.svg"
import Corporatebuilding from "../../assets/Images/Corporatebuilding.svg"
import calendar from "../../assets/Images/calendar.svg"
import LinkedIn from "../../assets/Images/LinkedIn.svg"
import Facebook from "../../assets/Images/Facebook.svg"
import Twitter from "../../assets/Images/Twitter.svg"
import Instagram from "../../assets/Images/Instagram.svg"
import location from "../../assets/Images/location.svg"

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
    },
]

const text=[
    {
        value:"System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability."      
    },
    {
        value:"System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability."      
    },
    {
        value:"System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability."      
    },
]

const text2=[
    {
        value: "Bachelor's or Master's degree in Engineering or a related field."
    },
    {
        value: "Bachelor's or Master's degree in Engineering or a related field."
    },
    {
        value: "Bachelor's or Master's degree in Engineering or a related field."
    },
]

const JobSearchCompanyPage = () => {
  const actionList = ["Download Attachments", "Archive"];

 //TODO
  return (
    <Box margin="0px 50px 0px 50px" width='100%' display="flex">
        <Box flex={2}>
        {DataArray.map((object)=>
                    <Box
                        p={{ sm: "20px", base: "12px" }}
                        width={"100%"}
                        borderRadius={"8px"}
                        bg={"white.100"}
                        box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
                        mb={10}
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
                                justifyContent={"space-between"}
                            >
                                <Box display={"flex"} mt={"0px"} alignItems={"center"} flexWrap={"wrap"} >
                                    <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} marginRight={2}/>
                                    <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                                        {object.title}
                                        <Box display={"flex"} alignItems={"center"}>
                                            <Heading variant={"p4"} color={"gray.text"} marginRight={1}>
                                                {object.name}
                                            </Heading>
                                            <Box ml={1} mt={"4px"} display="flex" alignItems="center">
                                                <ComponentMyChip label={object.tags} />
                                            </Box>
                                        </Box>
                                    </Heading>
                                </Box>
                                <Box display={"flex"} alignItems={"center"}>
                                    <Image width={{ md: "20px", base: "20px" }} src={arrowright.src} marginRight={2}/>
                                    <Heading variant={"p4"} color={"gray.text"} marginRight={1}>
                                        Return
                                    </Heading>
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
                                <Box display={"flex"} flexWrap={"wrap"} gap={"10px"} alignItems={"center"}>
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
                                <Box display={"flex"} flexDirection="column" textAlign={"end"} justifyContent="flex-end" >
                                <Heading color={"gray.text"} variant={"p4"}>
                                    Applcaition Deadline: {object.ApplicationDeadline}
                                </Heading>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )}
        <Box display={"flex"} gap={6} mt={10} >
            <Button
                style={{padding:"20px 40px 20px 40px"}}
                >
                Save Job
                </Button>
                <Button
                style={{padding:"20px 40px 20px 40px"}}
                variant="blue-btn"    
                >
                Apply Now
            </Button>
        </Box>
        
            
<<<<<<< HEAD
            <Box mt={10}>
            <Button
              style={{padding:"20px 40px 20px 40px"}}
              variant="outline-blue"
              marginLeft="2"  // Add margin to the button for space
            >
              Search Now
            </Button>
            <Button
              style={{padding:"20px 40px 20px 40px"}}
              variant="blue-btn"
              marginLeft="2"  // Add margin to the button for space
            >
              Apply Now
            </Button>
            </Box>
=======
>>>>>>> ea278611a49270238cd23908d4187c5f1be2eda7
        <Box mt={5}>
            <Heading color={"gray.text"} variant={"p4"}>
                Job Description
            </Heading>
            <Heading color={"gray.text"} variant={"p4"}>
            Job Overview: As a Senior System Design Engineer, you will be responsible for leading and contributing to the design, development, and implementation of complex systems and solutions. Your expertise in systems engineering principles and methodologies will be crucial in ensuring the successful delivery of projects within schedule, budget, and quality parameters.
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} mt={3}>
                Responsibilities
            </Heading>
            {text.map((data,index)=>
                <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                {index+1}. <Heading ml={2} color={"gray.text"} variant={"p4"}>{data.value}</Heading>
                </Heading>
            )}

            <Heading color={"gray.text"} variant={"p4"} mt={3}>
                Qualification and requirements
            </Heading>
            {text2.map((data,index)=>
                <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                {index+1}. <Heading ml={2} color={"gray.text"} variant={"p4"}>{data.value}</Heading>
                </Heading>
            )}
        </Box>

    <Box display={"flex"} gap={10} mt={10} >
        <Box
        p={{ sm: "20px", base: "12px" }}
        mb={{ md: "33px", base: "20px" }}
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
            >
            <Box display={"flex"} mt={"0px"} alignItems={"center"} flexWrap={"wrap"}>
                <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} marginRight={2}/>
                    <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                    Microsoft  
                        <Box gap={4} display={"flex"} alignItems={"center"}>
                            <Heading display={"flex"} alignItems={"center"} color={"gray.text"} variant={"p4"}>
                                <Image width={{ md: "20px", base: "35px" }} src={location.src} marginRight={2}/>
                                Redmond, Washington State
                            </Heading>
                            <Box fontSize={{ sm: "14px", base: "8px" }}>
                                <GoDotFill style={{ color: "#D9D9D9" }} />
                            </Box>
                            <Heading display={"flex"} alignItems={"center"} color={"gray.text"} variant={"p4"}>
                                <Image style={{display:'inline-block'}} width={{ md: "20px", base: "30px" }} src={employeedesignation.src} marginRight={2}/>
                                    1,000 - 5,000 Employees
                            </Heading>
                            <Box fontSize={{ sm: "14px", base: "8px" }}>
                                <GoDotFill style={{ color: "#D9D9D9" }} />
                            </Box>
                            <Heading display={"flex"} alignItems={"center"} color={"gray.text"} variant={"p4"}>
                            <Image style={{display:'inline-block'}} width={{ md: "20px", base: "10px" }} src={Corporatebuilding.src} marginRight={2}/>
                                Technology
                            </Heading>
                        </Box>
                        
                    </Heading> 
            </Box>
            </Box>
        </Box>
        
        <Box width={"70%"}>
            <Heading color={"gray.text"} variant={"p4"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quo.
            </Heading>       
        </Box>
        <Box mt={4} gap={4} display={"flex"} >
            <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} src={LinkedIn.src}  />
            <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} src={Instagram.src}  />
            <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} src={Facebook.src}  />
            <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} src={Twitter.src}  />
        </Box>        
        </Box>
    













        

            </Box>
        </Box>
                {/* need to design right side from here */}
                    <Box flex={1} backgroundColor={"green"}> 
                    </Box>
    </Box>
    
  );
};

export default JobSearchCompanyPage;