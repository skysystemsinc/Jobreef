import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import {
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Input,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

import globalStyles from "@/styles/globalStyles";
import { useContext, useEffect, useRef, useState } from "react";

import Overview from "./Overview";

import Education from "./Education";
import Certification from "./Certitfication";
import Skills from "./Skills";

import TimelineAttachments from "./Attchement";
import { WorkExperience } from "./WorkExperience";
import Achievement from "./Achievement";
import SuccessMsg from "./SuccessMsg";
const steps = [
  { label: "Overview" },
  { label: "Work Experience" },
  { label: "Education" },
  { label: "Certifications" },
  { label: "Skills" },
  { label: "Awards" },
  { label: "Attachments" },
];

export const CandidateTimeline = ({ candidate, variant }) => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const [completedStep, setCompletedStep] = useState([]);
  const hasCompletedAllSteps = activeStep === steps.length;

  useEffect(() => {
    setCompletedStep([...completedStep, activeStep]);
  }, [activeStep]);
  const handlePrevious = () => {
    prevStep();
    if (completedStep.includes(activeStep)) {
      const updatedCompletedSteps = completedStep.filter(
        (step) => step != activeStep
      );

      setCompletedStep(updatedCompletedSteps);
    }
  };
  return (
    <Flex
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
      width="100%"
    >
      {hasCompletedAllSteps ? (
        <SuccessMsg />
      ) : (
        <Steps
          responsive={false}
          sx={{
            ...globalStyles.stepperContainter,
            width: {
              xl: "90%",
              lg: "80%",
              md: "73%",

              base: "99%",
            },
            // ml: {lg:20},
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
                  md: "82% !important",
                  sm: "80% !important",
                  base: "61% !important",
                },
                top: { sm: "17px   !important", base: "15px   !important" },
                marginInlineEnd: "0px !important",
                marginInlineStart: "0px !important",
              },
            },
          }}
          variant={"circles-alt"}
          colorScheme="blue"
          trackColor="blue.500"
          // border={"1px solid red"}

          activeStep={activeStep}
        >
          {steps.map(({ label }, index) => {
            const CustomCheckIcon = () => {
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
            const customIcon = () => {
              return (
                <Heading
                  variant={"p1"}
                  fontWeight={700}
                  sx={{
                    color: completedStep.includes(index)
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
                icon={customIcon}
                checkIcon={CustomCheckIcon}
                label={
                  <Heading
                    variant={"p1"}
                    sx={{
                      // marginTop: 10,
                      display: { sm: "block", base: "none" }, // color:'#fff'

                      color: completedStep.includes(index)
                        ? "blue.500"
                        : "gray.light",
                    }}
                  >
                    {" "}
                    {label}
                  </Heading>
                }
                flexDirection={"column"}
                key={label}
              >
                <Box
                  sx={{
                    p: { md: "40px 0px 0px 0px", base: "20px 7px 20px 7px" },
                    mt: "13px",
                    width: { md: "88%", base: "100%" },
                  }}
                >
                  {index == 0 ? (
                    <Overview
                      nextStep={nextStep}
                      activeStep={activeStep}
                      prevStep={handlePrevious}
                    />
                  ) : index == 1 ? (
                    <WorkExperience prevStep={handlePrevious} nextStep={nextStep} />
                  ) : index == 2 ? (
                    <Education prevStep={handlePrevious} nextStep={nextStep} />
                  ) : index == 3 ? (
                    <Certification prevStep={handlePrevious} nextStep={nextStep} />
                  ) : index == 4 ? (
                    <Skills prevStep={handlePrevious} nextStep={nextStep} />
                  ) : index == 5 ? (
                    <TimelineAttachments
                      prevStep={handlePrevious}
                      nextStep={nextStep}
                    />
                  ) : index == 6 ? (
                    <Achievement prevStep={handlePrevious} nextStep={nextStep} />
                  ) : null}
                </Box>
              </Step>
            );
          })}
        </Steps>
      )}
    </Flex>
  );
};
