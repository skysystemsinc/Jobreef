import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import TextCard from "../TextCard/TextCard";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import { useRouter } from "next/router";

const WorkExperiance = ({nextStep}) => {
  const router = useRouter();
  const [state, setState] = useState({
    edit: false,
    delete: false,
    experienceData: [],
    loading: false,
  });
  const experienceData = [
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
  ];
  return (
    <Box>
      {state.addExperience || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <ExperianceForm state={state} setState={setState} />
        </Box>
      ) : (
        <Box width={"100%"} mx={"auto"}>
          {experienceData.map((item, ind) => {
            return (
              <Box key={ind}>
                <ExperianceCard data={item} state={state} setState={setState} />
              </Box>
            );
          })}

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                // setaddExperiance(true);
                setState((prev) => {
                  return { ...prev, addExperience: true };
                });
              }}
              width="max-content"
              px={"10px"}
              mb={{ md: "38px", base: "20px" }}
              variant={"blue-btn"}
            >
              Add New Experience
            </Button>
          </Flex>

          <Flex
            width="100%"
            justify="center"
            mt={{ md: "43px", base: "3px" }}
            pb={"30px"}
            gap={4}
          >
            <>
              <Button
                onClick={() => {
                  router.push("/candidate/my-resume");
                }}
                variant="outline-blue"
              >
                {" Cancel"}
              </Button>
              <Button onClick={nextStep} variant={"blue-btn"}>
                {state.loading ? <Loader /> : "Next"}
              </Button>
            </>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default WorkExperiance;
