import { Box, Circle, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "./ComponentMyChip";

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

const AppliedJobs = () => {
  const actionList = ["Download Attachments", "Archive"];

  return (
    <Box display={"grid"}
          gap={10}
          mt={5}
          gridTemplateColumns={{ xl: "repeat(2, 1fr)", base: "1fr" }}>
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
                        {object.Experience} years
                        
                      </Heading>
                    </Box>
                    <Box display={"flex"} flexDirection="column" textAlign={"end"} justifyContent="flex-end" >
                      <Heading color={"gray.text"} variant={"p4"}>
                        {object.ApplicationDeadline}
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
                <Box display={"flex"} flexDirection="column" justifyContent="flex-end">
                  <Heading display="flex" mb={"10px"} variant={"p10"}>
                  Status: <span style={{color:'green'}}>New</span>
                  </Heading>
                </Box>
              </Box>
            </Box>
          </Box>
      )}
    </Box>
  );
};

export default AppliedJobs;