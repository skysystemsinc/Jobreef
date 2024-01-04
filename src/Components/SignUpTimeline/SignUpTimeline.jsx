import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import {
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Input,
  Spinner,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

import PersonalInfo from "./PersonalInfo";
import Password from "./Password";
import Otp from "./Otp";
import { useRouter } from "next/router";
import { role, roles } from "@/Utils/constant";
import globalStyles from "@/styles/globalStyles";
import { useContext, useEffect, useRef, useState } from "react";
import { Role_context } from "@/context/context";
import axios from "axios";
import { BACKEND_URL } from "@/Utils/urls";
import endPoints from "@/Utils/endpoints";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
const steps = [
  { label: "Personal Info" },
  { label: "Password" },
  { label: "Verification" },
];

export const SignUpTimeline = ({ candidate, variant }) => {
  const userState = useSelector((state) => state.userRegistration.value);

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

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
    >
      <Steps
        responsive={false}
        sx={globalStyles.stepperContainter}
        variant={"circles-alt"}
        colorScheme="blue"
        // border={"1px solid red"}

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
              icon={CostumeIcon}
              checkIcon={CostumeCheckIcon}
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
              flexDirection={"column"}
              key={label}
            >
              <Box
                sx={{
                  p: { md: 8, base: "20px 0px 20px 0px" },
                  mt: "13px",
                  width: "90%",
                }}
              >
                {index == 0 ? (
                  <PersonalInfo
                    nextStep={nextStep}
                    activeStep={activeStep}
                    handlePrevious={handlePrevious}
                  
                  />
                ) : index == 1 ? (
                  <Password
                    nextStep={nextStep}
                    activeStep={activeStep}
                    handlePrevious={handlePrevious}
                    
                  />
                ) : index == 2 ? (
                  <Otp
                    nextStep={nextStep}
                    activeStep={activeStep}
                    handlePrevious={handlePrevious}
                    text={
                      userState.isCompany
                        ? `Please enter the 4 digit code send to ${userState.email}`
                        : "Please enter the 4 digit code sent to your email"
                    }
             
                  />
                ) : null}
              </Box>
            </Step>
          );
        })}
      </Steps>
    </Flex>
  );
};
