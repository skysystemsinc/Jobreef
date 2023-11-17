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
import { role, roles } from "@/Utils/role";
import globalStyles from "@/styles/globalStyles";
import { useContext, useEffect, useRef, useState } from "react";
import { Role_context } from "@/context/context";
import axios from "axios";
import { BACKEND_URL } from "@/Utils/urls";
import endPoints from "@/Utils/endpoints";
import Loader from "../Loader/Loader";
const steps = [
  { label: "Personal Info" },
  { label: "Password" },
  { label: "Verification" },
];

export const SignUpTimeline = ({ candidate, variant }) => {
  const router = useRouter();
  const toast = useToast();
  const { company, setCompany } = useContext(Role_context);
  const [State, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    loading: false,
    role: company,
    password: "",
    confirmPassword: "",
    otp: "",
    showEmail: "",
    userId: "",
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

  const handleNext = async () => {
    if (activeStep == 0) {
      validation();
    } else if (activeStep == 1) {
      handleRegister();
    } else if (activeStep == 2) {
      verifyOtp();
    }
  };

  const handleRegister = async () => {
    if (State.confirmPassword != State.password) {
      toast({
        position: "bottom-right",
        title: `password does not match`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await axios({
        method: "POST",
        url: `${BACKEND_URL}${endPoints.user}`,
        data: {
          firstName: State.name,
          lastName: State.lastName,
          email: State.email,
          password: State.password,
          role: company ? roles.company : roles.employee,
        },
      });
      if (postData) {
        nextStep();

        setState((prev) => {
          return {
            ...prev,
            loading: false,
            name: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            email: "",
            showEmail: postData.data.data.email,
            userId: postData.data.data.id,
          };
        });
      } else {
      }
    } catch (err) {
      const errorMessage = err?.response?.data.message;
      console.log("errr", err?.response?.data.message);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",

        title: errorMessage,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const validation = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Example usage:
    const isValidEmail = emailPattern.test(State.email);
    if (State.name == "" || State.lastName == "" || State.email == "") {
      toast({
        position: globalStyles.toastStyle.position,
        title: `Required fields are empty`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    if (!isValidEmail) {
      toast({
        position: globalStyles.toastStyle.position,
        title: `Email is invalid`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    nextStep();
  };

  const verifyOtp = async () => {
    if (State.otp == "") {
      toast({
        position: "bottom-right",
        title: `Please enter otp`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    try {
      setState((prev) => {
        return {
          ...prev,
          loading: true,
        };
      });
      const verify = await axios({
        method: "POST",
        url: `${BACKEND_URL}${endPoints.verifyOtp}`,
        data: {
          userId: State.userId,
          otp: parseInt(State.otp),
        },
      });
      if (verify) {
        localStorage.setItem("id", verify.data.data.id);
        localStorage.setItem("role", verify.data.data.role);
        toast({
          position: "bottom-right",
          title: `Email verify Successfully`,
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
        // setTimeout(() => {
        if (verify.data.data.role == roles.company) {
          router.push("/company/registration");
        } else {
          
          window.location.href = "/candidate/registration";
        }
        // }, 1000);
      }
    } catch (err) {
      const errorMessage = err?.response?.data.message;

      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: errorMessage,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
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
                        ? `Please enter the 4 digit code send to ${State.showEmail}`
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
            // width={{ md: "200px", sm: "180px", base: "130px" }}
            variant={"blue-btn"}
            onClick={handleNext}
          >
            {State.loading ? <Loader /> : isLastStep ? "Verify" : "Next"}
          </Button>
          {/* {isLastStep && !company ? (
            <a className="blue-btn" href="/candidate/registration">
              Verify
            </a>
          ) : (
            <Button
              // width={{ md: "200px", sm: "180px", base: "130px" }}
              variant={"blue-btn"}
              onClick={handleNext}
            >
              {State.loading ? <Loader /> : isLastStep ? "Verify" : "Next"}
            </Button>
          )} */}
        </>
      </Flex>
    </Flex>
  );
};
