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

import PersonalInfo from "./SignUpTimeLineComponents/PersonalInfo";
import Password from "./SignUpTimeLineComponents/Password";
import Otp from "./SignUpTimeLineComponents/Otp";
import { useRouter } from "next/router";
import { role, roles } from "@/Utils/role";
import globalStyles from "@/styles/globalStyles";
import { useContext, useEffect, useRef, useState } from "react";
import { Role_context } from "@/context/context";
import PassChangeSuccessful from "./SignUpTimeLineComponents/PassChangeSuccessful";
const steps = [
  { label: "Enter Email" },
  { label: "Verify" },
  { label: "Create New Password" },
];

export const SignUpTimeline = ({ candidate, variant }) => {
    
  const [load,setLoad] = useState(true);
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
  const hasCompletedAllSteps = activeStep === steps.length;
  // console.log(hasCompletedAllSteps,"Has completed all steps")
  const isLastStep = activeStep === steps.length - 1;
  const [compeletedStep, setcompeletedStep] = useState([]);
  const initialRender = useRef(true);

  console.log(activeStep,"Active Steps")
  useEffect(() => {
    setcompeletedStep([...compeletedStep, activeStep]);
  }, [activeStep]);

  const handeNext = async () => {
    
      nextStep();
    
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
                    <Otp
                    text={
                      company
                        ? "Please enter the 4 digit code send to example@email.com"
                        : "Please enter the 4 digit code sent to your email"
                    }
                    State={State}
                    setState={setState}
                  />
                ) : index == 2 ? (
                    <Password State={State} setState={setState} />
                  
                ) : (
                  <PersonalInfo />
         ) }
              </Box>
            </Step>
          );
        })}
      </Steps>
      {hasCompletedAllSteps ? <PassChangeSuccessful/>: null}
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "13px", base: "13px" }}
        pb={"30px"}
        gap={4}
      >
        <>
          {!hasCompletedAllSteps?
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
            {activeStep == 2  ? "Cancel" : "Back"}
          </Button>

            
            <Button
              // width={{ md: "200px", sm: "180px", base: "130px" }}
              variant={"blue-btn"}
              onClick={()=>{
                handeNext()
                // console.log(isLastStep)
                if(isLastStep)
                {
                    // console.log(load,"Load")
                    setLoad(false)
                    // console.log(load,"Load")
                }
            }}
            >
              {activeStep == 1 ? 'Verify' : isLastStep ? "Save" : "Next"}
            </Button>
            </>:null
}
        </>
      </Flex>
    </Flex>
  );
};
