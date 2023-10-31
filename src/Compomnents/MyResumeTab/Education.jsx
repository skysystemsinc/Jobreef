import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";
import DeleteModal from "../DeleteModal/DeleteModal";

const Education = () => {
  const [state, setState] = useState({
    addEducation: false,
    educationData: [
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
    ],
    edit: false,
    delete: false,
  });
  // const experianceData = [];

  return (
    <Box>
      <DeleteModal
        onOpen={() =>
          setState((prev) => {
            return { ...prev, delete: true };
          })
        }
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
      />
      {state.addEducation || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <EducationForm
            state={state}
            saveHandle={() => {
              setState((prev) => {
                return {
                  ...prev,
                  addEducation: false,
                  edit: false,
                  educationData: [1],
                };
              });
            }}

            // setaddExperiance={setAddEducation}
          />
        </Box>
      ) : state.educationData.length > 0 ? (
        <Box mt={"30px"} width={{ xl: "73%", base: "100%" }} mx={"auto"}>
          {state.educationData.map((item , ind) => {
            return (
              <Box key={ind}>
                <EducationCard data={item} state={state} setState={setState} />
              </Box>
            );
          })}

          <Box
            bg={"blue.400"}
            boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.06)"
            // border={"1px solid "}
            // borderColor={"blue.500"}
            borderRadius={"8px"}
            padding={{ md: "22px 43px", base: "20px 18px" }}
          >
            <Heading variant={"p7"} color={"gray.text"}>
              {"Elevate Your Profile: Include Your Bachelor 's Degree"}
            </Heading>
          </Box>

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                // setAddEducation(true);
                setState((prev) => {
                  return {
                    ...prev,
                    addEducation: true,
                    educationData: [],
                  };
                });
              }}
              width="max-content"
              px={"12px"}
              mt={{ md: "61px", base: "20px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Education
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={() =>
              setState((prev) => {
                return {
                  ...prev,
                  addEducation: true,
                  experienceData: [],
                };
              })
            }
            title={"Enrich Your Profile:"}
            subittle={"Include Your Academic Journey."}
            btnLable={"Add Education"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Education;
