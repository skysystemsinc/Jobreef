import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import DeleteModal from "../DeleteModal/DeleteModal";

const WorkExperiance = () => {
  const [state, setState] = useState({
    addExperience: false,
    experienceData: [
      {
        companyName: "Microsoft",
        designation: "Senior System’s Design Engineer",
        currentlyWorking: false,
        readOnly: false,
        stateDate: new Date(),
        endDate: new Date(),
        country: "USA",
        state: "",
        city: "",
        streetAddress: "",
        employmentType: "",
        jobFamily: "",
        jobSummary:
          "Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability. Requirements Analysis: Collaborate with stakeholders, customers, and cross-functional teams to gather and analyze system requirements,",
      },
    ],
    edit: false,
    delete: false,
  });
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
      {state.addExperience || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <ExperianceForm
            state={state}
            handleSave={() =>
              setState((prev) => {
                return {
                  ...prev,
                  addExperience: false,
                  edit: false,
                  experienceData: [...state.experienceData, 1],
                };
              })
            }
          />
        </Box>
      ) : state.experienceData.length > 0 ? (
        <Box
          mt={"30px"}
          minHeight={"63vh"}
          width={{ lg: "73%", base: "100%" }}
          mx={"auto"}
        >
          {state.experienceData.map((item, ind) => {
            return (
              <Box key={ind}>
                <ExperianceCard data={item} state={state} setState={setState} />
              </Box>
            );
          })}

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setState((prev) => {
                  return {
                    ...prev,
                    addExperience: true,
                    experienceData: [],
                  };
                });
              }}
              width="max-content"
              px={"12px"}
              mt={{ md: "41px", base: "20px" }}
              variant={"blue-btn"}
            >
              Add New Experience
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
                  addExperience: true,
                  experienceData: [],
                };
              })
            }
            title={"Ready to build an impressive resume?"}
            subittle={"Start by including your work experiences."}
            btnLable={"Add  Experience"}
          />
        </Box>
      )}
    </Box>
  );
};

export default WorkExperiance;
