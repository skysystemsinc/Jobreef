import { Box, Circle, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "./ComponentMyChip";
import NewJobBox from "@/Compomnents/MyJobsTab/NewJobBox";

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
          {DataArray.map((object, index) => {
            return (
              <NewJobBox key={index} object={object} />
            );
          })}
    </Box>
  );
};

export default AppliedJobs;