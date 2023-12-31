import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import {
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

import grayArrow from "@/assets/Images/gray-arrow-down.svg";

import { useRouter } from "next/router";

import globalStyles from "@/styles/globalStyles";
import { useContext, useEffect, useRef, useState } from "react";

import IconButton from "../IconButton/IconButton";


import JobBio from "../JobPostTimeline/JobBio";
import TechnicalDetails from "../JobPostTimeline/TechnicalDetails";
import JobLocation from "../JobPostTimeline/JobLocation";
import DesiredSkills from "../JobPostTimeline/DesiredSkills";
import AssignJob from "../JobPostTimeline/AssigneJob";

const OperatorJobPost = ({
  assignJob,
  timeLine,
  isEdit,
  title,
  candidate,
  variant,
}) => {
  const steps = [
    { label: "Job Assign" },
    { label: "Job Bio" },
    { label: "Technical Details" },
    { label: "Job Location" },
    { label: "Desired Skills" },
  ];
  const [state, setState] = useState({
    jobTitle: "",
    employeeType: "",
    applicationDeadline: new Date(),
    locationType: "",
    description: "",
    noOfOpening: "",
    minimumEducation: "",
    yearsOfExperiance: "",
    jobFamily: "",
    salaryType: "",
    salaryRange: "",
    country: "",
    state: "",
    city: "",
    streetAddress: "",
    desiredSkill: "",
    tags: "",
    applicationType: { type: "External", url: "" },
    rate: "",
  });
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const [completedSteps, setcompletedSteps] = useState([0]);
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;
  const [compeletedStep, setcompeletedStep] = useState([]);
  const initialRender = useRef(true);
  useEffect(() => {
    setcompeletedStep([...compeletedStep, activeStep]);
  }, [activeStep]);
  const boxstyle = {
    minH: "55vh",
    marginTop: { md: "60px", base: "10px" },
  };

  return (
    <Box>
      <Heading
        textAlign={"center"}
        m={{ md: "42px 0px 40px 0px", base: "30px 0px 30px 0px" }}
        variant={"p6"}
      >
        {title}
      </Heading>
      <Flex
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        width="100%"
      >
        <Steps
          trackColor="blue.500"
          responsive={false}
          sx={{
            ...globalStyles.stepperContainter,

            width: {
              md: "630px",
              base: "100%",
            },
            "& .cui-steps__horizontal-step": {
              _active: {
                "&::after": {
                  bg: "blue.500 !important",
                },
              },
              "&::after": {
                bg: "gray.light !important",
                height: "3px !important",
                width: {
                  md: "81% !important",
                  sm: "82% !important",
                  base: "66% !important",
                },
                top: "17px   !important",
                marginInlineEnd: "0px !important",
                marginInlineStart: "0px !important",
              },
            },
          }}
          // border={"1px solid red"}
          variant={"circles-alt"}
          colorScheme="blue"
          activeStep={activeStep}
        >
          {steps.map(({ label }, index) => {
            const CostumeCheckIcon = () => {
              return (
                <Heading
                  variant={"p1"}
                  fontWeight={700}
                  sx={{
                    color: "white.100",
                  }}
                >
                  {" "}
                  {index + 1}
                </Heading>
              );
            };
            const CostumeIcon = () => {
              return (
                <Heading
                  variant={"p1"}
                  fontWeight={700}
                  sx={{
                    // color:'#fff'
                    color: compeletedStep.includes(index)
                      ? "blue.500"
                      : "gray.light",
                  }}
                >
                  {" "}
                  {index + 1}
                </Heading>
              );
            };

            return (
              <Step
                checkIcon={CostumeCheckIcon}
                flexDirection={"column"}
                icon={CostumeIcon}
                key={label}
                // icon={ hasCompletedAllSteps? false:CostomeIcon}
                label={
                  <Heading
                    variant={"p1"}
                    sx={{
                      color: compeletedStep.includes(index)
                        ? "blue.500"
                        : "gray.light",
                    }}
                  >
                    {" "}
                    {label}
                  </Heading>
                }
              >
                <Box
                  sx={{
                    // p: { md: 8, base: "20px 0px 20px 0px" },
                    mt: "34px",
                    width: { md: "75%", base: "95%" },
                  }}
                >
                  {/* <JobBio /> */}

                  {index == 0 ? (
                    <AssignJob />
                  ) : index == 1 ? (
                    <JobBio state={state} setState={setState} />
                  ) : index == 2 ? (
                    <TechnicalDetails state={state} setState={setState} />
                  ) : index == 3 ? (
                    <JobLocation state={state} setState={setState} />
                  ) : index == 4 ? (
                    <DesiredSkills
                      style={boxstyle}
                      state={state}
                      setState={setState}
                    />
                  ) : null}
                </Box>
              </Step>
            );
          })}
        </Steps>
        {/* {hasCompletedAllSteps ? <TimelineSubtitle /> : null} */}
        {hasCompletedAllSteps ? (
          <Box
            sx={{
              mt: "34px",
              width: { md: "85%", base: "95%" },
            }}
          >
            <Preview
              assignJob={assignJob}
              isEdit={isEdit}
              state={state}
              setState={setState}
            />
          </Box>
        ) : null}

        {hasCompletedAllSteps ? null : (
          <Flex
            width={{ md: "75%", base: "95%" }}
            // width="75%"
            justify="space-between"
            // mt={{ md: "22px", base: "0px" }}
            pb={"30px"}
            gap={4}
          >
            <>
              <IconButton
                handleEvent={() => {
                  if (activeStep != 0) {
                    if (compeletedStep.includes(activeStep)) {
                      const updatedCompletedSteps = compeletedStep.filter(
                        (step) => step != activeStep
                      );

                      setcompeletedStep(updatedCompletedSteps);
                    }
                    prevStep();
                  }
                  // activeStep == 0 ? null : prevStep();
                }}
                iconSize={"21px"}
                icon={grayArrow}
                btnLabel={"Previous"}
                variant={"unstyled"}
              />

              <Button
                variant={"blue-btn"}
                onClick={() => {
                  nextStep();
                  setcompletedSteps([...completedSteps, activeStep]);
                  // if (activeStep == 2) {
                  //   if (!company) {
                  //     router.push("/candidate/profile-setting");
                  //   } else {
                  //     router.push("/registeraion");
                  //   }
                  // } else {
                  // }
                }}
              >
                {"Next"}
              </Button>
            </>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
export default OperatorJobPost;
