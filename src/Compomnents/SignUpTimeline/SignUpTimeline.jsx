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

import PersonalInfo from "./PersonalInfo";
import Password from "./Password";
import Otp from "./Otp";
import { useRouter } from "next/router";
import { role, roles } from "@/Utils/role";
import globalStyles from "@/styles/globalStyles";
import { useContext, useEffect, useRef, useState } from "react";
import { Role_context } from "@/context/context";
const steps = [
  { label: "Personal Info" },
  { label: "Password" },
  { label: "Verification" },
];

export const SignUpTimeline = ({ candidate, variant }) => {
  const router = useRouter();
  const { company, setCompany } = useContext(Role_context);
  const [State, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    role: company,
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const isLastStep = activeStep === steps.length - 1;
  const [compeletedStep, setcompeletedStep] = useState([]);
  const initialRender = useRef(true);
  useEffect(() => {
    setcompeletedStep([...compeletedStep, activeStep]);
  }, [activeStep]);

  const handeNext = async () => {
    if (activeStep == 2) {
      if (!company) {
        router.push("/candidate/registration");
      } else {
        router.push("/registration");
      }
    } else {
      nextStep();
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
          
          const CostomeCheckIcon = () => {
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
          const CostomeIcon = () => {
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
              icon={CostomeIcon}
              checkIcon={CostomeCheckIcon}
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
                  <PersonalInfo State={State} setState={setState} />
                ) : index == 1 ? (
                  <Password State={State} setState={setState} />
                ) : index == 2 ? (
                  <Otp
                    text={
                      company
                        ? "Please enter the 4 digit code send to example@email.com"
                        : "Please enter the 4 digit code sent to your email"
                    }
                    State={State}
                    setState={setState}
                  />
                ) : (
                  <PersonalInfo />
                )}
              </Box>
            </Step>
          );
        })}
      </Steps>
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "43px" }}
        pb={"30px"}
        gap={4}
      >
        <>
          <Button
            isDisabled={activeStep === 0}
            onClick={() => {
              prevStep();
              if (compeletedStep.includes(activeStep)) {
                const updatedCompletedSteps = compeletedStep.filter(
                  (step) => step != activeStep
                );
                setcompeletedStep(updatedCompletedSteps);
              }
            }}
            variant="outline-blue"
          >
            {" Back"}
          </Button>
          <Button
            variant={"blue-btn"}
            onClick={handeNext}
          >
            {isLastStep ? "Verify" : "Next"}
          </Button>
        </>
      </Flex>
    </Flex>
  );
};
