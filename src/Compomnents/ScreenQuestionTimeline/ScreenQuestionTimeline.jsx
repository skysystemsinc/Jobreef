import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import {
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useRouter } from "next/router";
import globalStyles from "@/styles/globalStyles";
import blueclick from "@/assets/Images/blueclick.svg";
import SignUpLayout from "../Layout/SignUpLayout";
import cartoon from "@/assets/Images/cartoon.svg";
import leftblue_2 from "@/assets/Images/leftblue_2.png";
import whitetick from "@/assets/Images/white-tick.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { roles } from "@/Utils/role";
import { BACKEND_URL } from "@/Utils/urls";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import Question from "./Question";
import CompleteMsg from "../ScreeningQuestion/CompleteMsg";

const steps = [
  {
    label: "",
    question: {
      question: "Question ",
    },
  },
  {
    label: "",
    question: {
      question: "Question ",
    },
  },
  {
    label: "",

    question: {
      question: "Question ",
    },
  },
];

export const ScreenQuestionTimeline = ({ variant }) => {
  const router = useRouter();
  const toast = useToast();
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const hasCompletedAllSteps = activeStep === steps.length;

  const [compeletedStep, setcompeletedStep] = useState([]);

  useEffect(() => {
    setcompeletedStep([...compeletedStep, activeStep]);
  }, [activeStep]);

  const handlePrevious = () => {
    prevStep();
    if (compeletedStep.includes(activeStep)) {
      const updatedCompletedSteps = compeletedStep.filter(
        (step) => step != activeStep
      );

      setcompeletedStep(updatedCompletedSteps);
    }
  };
  return (
    <Flex
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
      width="100%"
      mt={"50px"}
    >
      {hasCompletedAllSteps ? (
        <CompleteMsg />
      ) : (
        <Steps
          responsive={false}
          checkIcon={false}
          sx={{
            ...globalStyles.stepperContainter,
          }}
          variant={"circles-alt"}
          trackColor="blue.500"
          colorScheme="blue"
          activeStep={activeStep}
        >
          {steps.map(({ label }, index) => {
            const CostumeCheckIcon = () => {
              return (
                <Heading
                  variant={"p1"}
                  // fontWeight={700}
                  sx={{
                    color: "white.100",
                    fontWeight: 700,
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
                    fontWeight: 700,
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
                icon={CostumeIcon}
                flexDirection={"column"}
                key={label}
              >
                <Box
                  sx={{
                    mt: "30px",
                    paddingBottom: "20px !important",

                    width: "100%",
                  }}
                >
                  <Question
                    showCheckBox={index == 1 ? true : false}
                    qNo={index + 1}
                    nextStep={nextStep}
                    handlePrevious={handlePrevious}
                  />
                </Box>
              </Step>
            );
          })}
        </Steps>
      )}
    </Flex>
  );
};
