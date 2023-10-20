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
import location from "../../assets/Images/location.svg"

//Todo upper Sectioon 
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


const CompanyPageData = () => {
  const actionList = ["Download Attachments", "Archive"];

  return (
    <div style={{margin:"0px 50px 0px 50px", width:'100%'}}>
        <Box width='70%' >
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
            <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"} ml={5} gap={"10px"} mt={2}>
                <Heading display={"flex"} alignItems={"center"} color={"gray.text"} variant={"p4"}>
                    <Image width={{ md: "20px", base: "35px" }} src={location.src} marginRight={2}/>
                     Redmond, Washington State
                </Heading>
                <Box fontSize={{ sm: "14px", base: "8px" }}>
                    <GoDotFill style={{ color: "#D9D9D9" }} />
                </Box>
                <Heading display={"flex"} alignItems={"center"} color={"gray.text"} variant={"p4"}>
                <Image style={{display:'inline-block'}} width={{ md: "20px", base: "30px" }} src={employeedesignation.src} marginRight={2}/>
                    1,001 Employees
                </Heading>
                <Box fontSize={{ sm: "14px", base: "8px" }}>
                    <GoDotFill style={{ color: "#D9D9D9" }} />
                </Box>
                <Heading display={"flex"} alignItems={"center"} color={"gray.text"} variant={"p4"}>
                <Image style={{display:'inline-block'}} width={{ md: "20px", base: "10px" }} src={Corporatebuilding.src} marginRight={2}/>
                    Technology
                </Heading>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} ml={5} alignItems={'center'}>
                <Heading color={"gray.text"} variant={"p4"} display="flex" alignItems={'center'}>
                    <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} mr={2} src={calendar.src}  /> 
                    Founded 1975
                </Heading>

                <Box gap={4} display={"flex"} >
                    <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} src={LinkedIn.src}  />
                    <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} src={Instagram.src}  />
                    <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} src={Facebook.src}  />
                    <Image style={{ display: "inline-block" }} width={{ md: "20px", base: "20px" }} src={Twitter.src}  />
                </Box>
            </Box>
            
            <Box mt={5}>
                <Heading color={"gray.text"} variant={"p7"} mb={2}>
                    Company OverView
                </Heading>
                <Heading color={"gray.text"} variant={"p4"}>
                    Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Edge web browser. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 14 in the 2022 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world's largest software maker by revenue as of 2022.
                </Heading>
            </Box>
        </Box>
        {DataArray?(<Box mt={10}>
            <Heading color={"gray.text"} variant={"p7"}>
                Current Openings
            </Heading>
        </Box>):(null)}
        <Box display={"grid"}
          gap={10}
          mt={5}
          gridTemplateColumns={{ xl: "repeat(2, 1fr)", base: "1fr" }}
          width={'80%'}
          >        
      {DataArray.map((object)=>
            <Box
            p={{ sm: "20px", base: "12px" }}
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
                    <Box display={"flex"} gap={"2px"} alignItems={"center"}>
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
                      <Box fontSize={{ sm: "14px", base: "8px" }}>
                        <GoDotFill style={{ color: "#D9D9D9" }} />
                      </Box>
                      <Heading color={"gray.text"} variant={"p4"}>
                        Apply By: {object.ApplicationDeadline}
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
      )}
    
    











    
    </Box>
  

            
        
        
    










        

    
    </div>
  );
};

export default CompanyPageData;