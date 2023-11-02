import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";

import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";

const Education = ({ state, setState }) => {
  const educationData = [
    {
      schoolName: "Walter Payton College Preparatory High School",
      diploma: "Diploma Name",
      readOnly: false,
      stateDate: new Date(),
      endDate: new Date(),
      currentlyEnrolled: false,
      country: " USA",
      state: "Chicago",
      city: " Illinois",
      streetAddress: "",
      gpa: "",
      description:
        "Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability. Requirements Analysis: Collaborate with stakeholders, customers, and cross-functional teams to gather and analyze system requirements, ensuring clear and unambiguous specifications. Oversee the integration",
    },
    {
      schoolName: "Walter Payton College Preparatory High School",
      diploma: "Diploma Name",
      readOnly: false,
      stateDate: new Date(),
      endDate: new Date(),
      country: " USA",
      currentlyEnrolled: false,
      state: "Chicago",
      city: " Illinois",
      streetAddress: "",
      gpa: "",
      description:
        "Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability. Requirements Analysis: Collaborate with stakeholders, customers, and cross-functional teams to gather and analyze system requirements, ensuring clear and unambiguous specifications. Oversee the integration",
    },
  ];
  const style = {
    maxWidth: "216px",
  };
  return (
    <Box>
      {state.addEducation || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <EducationForm state={state} setState={setState} />
        </Box>
      ) : (
        <Box width={"100%"} mx={"auto"}>
          {educationData.map((item) => {
            return (
              <EducationCard
                headingStyle={style}
                dispableBlueCard
                data={item}
                state={state}
                setState={setState}
              />
            );
          })}

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                // setaddEducation(true);
                setState((prev) => {
                  return { ...prev, addEducation: true };
                });
              }}
              px={"10px"}
              width="max-content"
              //   mt={{ md: "px", base: "20px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add New Education
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Education;
