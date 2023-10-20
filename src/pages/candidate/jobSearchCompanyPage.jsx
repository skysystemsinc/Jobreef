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
import { FiSearch, FiMapPin } from "react-icons/fi";
// import ComponentMyChip from "../../Compomnents/ComponentMyChip"
import employeedesignation from "../../assets/Images/employee-designation.svg"
import Corporatebuilding from "../../assets/Images/Corporatebuilding.svg"
import calendar from "../../assets/Images/calendar.svg"
import LinkedIn from "../../assets/Images/LinkedIn.svg"
import Facebook from "../../assets/Images/Facebook.svg"
import Twitter from "../../assets/Images/Twitter.svg"
import Instagram from "../../assets/Images/Instagram.svg"


const JobSearchCompanyPage = () => {
  const actionList = ["Download Attachments", "Archive"];

 //TODO
  return (
    <div style={{margin:"0px 50px 0px 50px", width:'70%'}}>
        <Box display={"flex"} mt={"0px"} ml={5} alignItems={"center"} flexWrap={"wrap"}>
            <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} marginRight={2}/>
                <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                Senior System's Designer Engineer
                    <Box display={"flex"} alignItems={"center"}>
                        <Heading
                        variant={"p4"}
                        color={"gray.text"}
                        marginRight={1}
                        >
                        Microsoft       
                        </Heading>
                        <Box mr={"20px"} mt={"0px"}>
                            {/* <ComponentMyChip label={"Urgently Hiring"} /> */}
                        </Box>
                    </Box>
                </Heading> 
        </Box>
        {/* <Box display={"flex"} flexWrap={"wrap"} ml={5} gap={"10px"} mt={2}>
            <Heading color={"gray.text"} variant={"p4"}>
                <FiMapPin style={{display:'inline-block'}} color="gray.100" /> Redmond, Washington State
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>
            <Heading color={"gray.text"} variant={"p4"}>
            <Image style={{display:'inline-block'}} width={{ md: "20px", base: "30px" }} src={employeedesignation.src} marginRight={2}/>
                1,001 Employees
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>
            <Heading color={"gray.text"} variant={"p4"}>
            <Image style={{display:'inline-block'}} width={{ md: "20px", base: "10px" }} src={Corporatebuilding.src} marginRight={2}/>
                Technology
            </Heading>
        </Box> */}
            <Box width={"100%"} ml={5} mt={2}>
                <Heading variant={"p10"}>Redmond, Washington State</Heading>
                <Box
                mt={"10px"}
                display={"flex"}
                gap={"10px"}
                justifyContent={"space-between"}
                width={"100%"}
                >
                <Box display={"flex"} flexWrap={"wrap"} gap={"10px"}>
                    <Heading color={"gray.text"} variant={"p4"}>
                    $150,000
                    </Heading>
                    <Box fontSize={{ sm: "14px", base: "8px" }}>
                    <GoDotFill style={{ color: "#D9D9D9" }} />
                    </Box>
                    <Heading color={"gray.text"} variant={"p4"}>
                    Full Time
                    </Heading>
                    <Box fontSize={{ sm: "14px", base: "8px" }}>
                    <GoDotFill style={{ color: "#D9D9D9" }} />
                    </Box>
                    <Heading color={"gray.text"} variant={"p4"}>
                    Experience: 3 years
                    </Heading>
                </Box>
                <Box display={"flex"} flexDirection="column" justifyContent="flex-end">
                <Heading marginLeftcolor={"gray.text"} variant={"p4"}>
                    Application Deadline: 07/31/2023
                </Heading>
                </Box>
                </Box>
            </Box>
            
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
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.</Heading>
            </Heading>

            <Heading color={"gray.text"} variant={"p4"} mt={3}>
                Qualification and requirements
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>Bachelor's or Master's degree in Engineering or a related field.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>Bachelor's or Master's degree in Engineering or a related field.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>Bachelor's or Master's degree in Engineering or a related field.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>Bachelor's or Master's degree in Engineering or a related field.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>Bachelor's or Master's degree in Engineering or a related field.</Heading>
            </Heading>
            <Heading color={"gray.text"} variant={"p4"} display={"flex"}>
                1. <Heading ml={2} color={"gray.text"} variant={"p4"}>Bachelor's or Master's degree in Engineering or a related field.</Heading>
            </Heading>
        </Box>

    <Box display={"flex"} gap={10} mt={10} >
        <Box
        p={{ sm: "20px", base: "12px" }}
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
            >
            <Box display={"flex"} mt={"0px"} alignItems={"center"} flexWrap={"wrap"}>
                <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} marginRight={2}/>
                    <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                    Senior System's Designer Engineer
                        <Box display={"flex"} alignItems={"center"}>
                            <Heading
                            variant={"p4"}
                            color={"gray.text"}
                            marginRight={1}
                            >
                            Microsoft       
                            </Heading>
                            <Box mr={"20px"} mt={"0px"}>
                                {/* <ComponentMyChip label={"Urgently Hiring"} /> */}
                            </Box>
                        </Box>
                        
                    </Heading> 
            </Box>
            </Box>
        </Box>

        <Box>
            <Box display={"flex"} gap={"40px"} mt={"12px"} alignItems={"center"}>
            <Box width={"100%"}>
                <Heading variant={"p10"}>Redmond, Washington State</Heading>
                <Box
                mt={"10px"}
                display={"flex"}
                gap={"10px"}
                width={"100%"}
                flexWrap={"wrap"}
                >
                {/* <Box display={"flex"} > */}
                    <Heading color={"gray.text"} variant={"p4"}>
                    $150,000
                    </Heading>
                    <Box fontSize={{ sm: "14px", base: "8px" }}>
                    <GoDotFill style={{ color: "#D9D9D9" }} />
                    </Box>
                    <Heading color={"gray.text"} variant={"p4"}>
                    Full Time
                    </Heading>
                    <Box fontSize={{ sm: "14px", base: "8px" }}>
                    <GoDotFill style={{ color: "#D9D9D9" }} />
                    </Box>
                    <Heading color={"gray.text"} variant={"p4"}>
                    Experience: 3 years
                    </Heading>
                    <Box fontSize={{ sm: "14px", base: "8px" }}>
                    <GoDotFill style={{ color: "#D9D9D9" }} />
                    </Box>
                    <Heading color={"gray.text"} variant={"p4"}>
                        Apply By: 07/31/2023
                    </Heading>
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
                <Box mr={"20px"} mb={"10px"}>
                    {/* <ComponentMyChip  label={"Technical knowledge"}/> */}
                </Box>
                
                <Box mr={"20px"} mb={"10px"}>
                {/* <ComponentMyChip label={"Technical knowledge"}/> */}
                </Box>
                
                <Box mr={"20px"} mb={"10px"}>
                {/* <ComponentMyChip label={"Technical knowledge"}/> */}
                </Box>
                
                <Box mr={"20px"} mb={"10px"}>
                {/* <ComponentMyChip label={"Technical knowledge"}/> */}
                </Box>
            </Box>
            <Box display={"flex"} flexDirection="column" justifyContent="flex-end">
                <Heading display="flex" mb={"10px"} mr={5} variant={"p10"}>
                Status: <span style={{color:'green'}}>New</span>
                </Heading>
            </Box>

            </Box>
        </Box>
        </Box>
    













        

    </Box>
    </div>
  );
};

export default JobSearchCompanyPage;