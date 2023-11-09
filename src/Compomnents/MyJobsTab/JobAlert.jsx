import React, { useState } from "react";
import JobAlertFrom from "../JobAlertFrom/JobAlertFrom";
import { Box, Button, Flex } from "@chakra-ui/react";
import JobAlertsCard from "../JobAlertsCard/JobAlertsCard";
import TextCard from "../TextCard/TextCard";
import DeleteModal from "../DeleteModal/DeleteModal";

const JobAlert = () => {
  const [state, setState] = useState({
    addExperience: false,
    experienceData: [
      {
        title: "Senior System's Design Engineer",
        name: "Microsoft",
        tags: "Active",
        location: "Redmond, Washington State",
        Salary: "Master",
        EmploymentType: "hourly base",
        JobModel: "Hybrid",
        Experience: "3",
        ApplicationDeadline: "07/31/2023",
        DesiredSkills: [
          "Technical knowledge",
          "System Architecture",
          "Risk Management",
          "Project Management",
          "Quality Focus",
          "Q/A Testing",
          "LeaderShip",
          "Product Design",
        ],
      },
    ],
    edit: false,
    delete: false,
  });
  const DataArray = [
    {
      imageurl: "",
      title: "Senior System's Design Engineer",
      name: "Microsoft",
      tags: "Active",
      location: "Redmond, Washington State",
      Salary: "Master",
      EmploymentType: "hourly base",
      JobModel: "Hybrid",
      Experience: "3",
      ApplicationDeadline: "07/31/2023",
      DesiredSkills: [
        "Technical knowledge",
        "System Architecture",
        "Risk Management",
        "Project Management",
        "Quality Focus",
        "Q/A Testing",
        "LeaderShip",
        "Product Design",
      ],
    },
  ];
  return (
    <>
      {/* <Box width={{ md: "80%", base: "100%" }} mx={"auto"}>
        {DataArray.map((object, index) => {
          return <JobAlertsCard key={index} object={object} />;
        })}
      </Box>
      <JobAlertFrom /> */}
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
          <JobAlertFrom
            state={state}
            handleSave={() =>
              setState((prev) => {
                return {
                  ...prev,
                  addExperience: false,
                  edit: false,
                  experienceData: DataArray
                };
              })
            }
          />
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
                  <JobAlertsCard
                    object={item}
                    state={state}
                    handleDelete={() =>
                      setState((prev) => {
                        return {
                          ...prev,
                          delete: true,
                        };
                      })
                    }
                    handleEdit={() =>
                      setState((prev) => {
                        return {
                          ...prev,
                          edit: true,
                        };
                      })
                    }
                    setState={setState}
                  />
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
                Add Job Alert
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
              title={"Job Alerts - Stay Updated, Land Your Dream Job"}
              subittle={"Create Job Alerts - Never Miss Your Ideal Role"}
              btnLable={"Add Job Alert"}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default JobAlert;
