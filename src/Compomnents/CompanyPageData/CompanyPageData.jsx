import { Box, Circle, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { FiSearch, FiMapPin } from "react-icons/fi";
import ComponentMyChip from "../MyJobsTab/ComponentMyChip";
import employeedesignation from "../../assets/Images/employee-designation.svg"
import Corporatebuilding from "../../assets/Images/Corporatebuilding.svg"
import calendar from "../../assets/Images/calendar.svg"
import LinkedIn from "../../assets/Images/LinkedIn.svg"
import Facebook from "../../assets/Images/Facebook.svg"
import Twitter from "../../assets/Images/Twitter.svg"
import Instagram from "../../assets/Images/Instagram.svg"
const CompanyPageData = () => {
  const actionList = ["Download Attachments", "Archive"];

  return (
    <div style={{margin:"0px 50px 0px 50px"}}>
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
                            <ComponentMyChip label={"Urgently Hiring"} />
                        </Box>
                    </Box>
                </Heading> 
        </Box>
        <Box display={"flex"} flexWrap={"wrap"} ml={5} gap={"10px"} mt={2}>
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
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} ml={5} >
            <Heading color={"gray.text"} variant={"p4"}>
                <Image style={{display:"inline-block"}} width={{ md: "15px", base: "20px" }} src={calendar.src} marginRight={0.5}/> Founded 1975
            </Heading>
            <Box>
                <Image style={{display:"inline-block"}} width={{ md: "20px", base: "20px" }} src={LinkedIn.src} marginRight={0.5}/>
                <Image style={{display:"inline-block"}} width={{ md: "20px", base: "20px" }} src={Instagram.src} marginRight={0.5}/>
                <Image style={{display:"inline-block"}} width={{ md: "20px", base: "20px" }} src={Facebook.src} marginRight={0.5}/>
                <Image style={{display:"inline-block"}} width={{ md: "20px", base: "20px" }} src={Twitter.src} marginRight={0.5}/>
            </Box>
        </Box>
        <Box mt={5}>
            <Heading color={"gray.text"} variant={"p4"}>
                Company OverView
            </Heading>
            <Heading color={"gray.text"} variant={"p4"}>
                Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Edge web browser. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 14 in the 2022 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world's largest software maker by revenue as of 2022.
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
                            <ComponentMyChip label={"Urgently Hiring"} />
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
                Applied On: 07/31/2023
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
            <Box mr={"20px"} mb={"10px"}>
                <ComponentMyChip  label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
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
                    <ComponentMyChip label={"Urgently Hiring"} />
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
                Applied On: 07/31/2023
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
            <Box mr={"20px"} mb={"10px"}>
                <ComponentMyChip  label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
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

export default CompanyPageData;