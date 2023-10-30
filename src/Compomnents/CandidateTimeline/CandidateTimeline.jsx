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

import { useRouter } from "next/router";
import { role, roles } from "@/Utils/role";
import globalStyles from "@/styles/globalStyles";
import { useContext, useEffect, useRef, useState } from "react";
import { Role_context } from "@/context/context";
import Overview from "./Overview";
import Password from "../SignUpTimeline/Password";
import Otp from "../SignUpTimeline/Otp";
import WorkExperiance from "./WorkExperiance";
import Education from "./Education";
import Certification from "./Certitfication";
import Skills from "./Skills";
import Attachments from "./Attchement";
import DeleteModal from "../DeleteModal/DeleteModal";
const steps = [
  { label: "Overview" },
  { label: "Work Experience" },
  { label: "Education" },
  { label: "Certifications" },
  { label: "Skills" },
  { label: "Attachments" },
];

export const CandidateTimeline = ({ candidate, variant }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [addEducation, setaddEducation] = useState(false);
  const [addCertificate, setCertificate] = useState(false);
  const [addExperiance, setaddExperiance] = useState(false);

  const router = useRouter();

  const { company, setCompany } = useContext(Role_context);
  const [state, setState] = useState({
    addExperience: true,
    addEducation: true,
    addCertificate: true,
    overview: true,
    edit: false,
    delete: false,
    currentlyWorking: false,
    country: "",
    state: "",
    city: "",
    number: "",
    description: "",
  });
  // const [State, setState] = useState({
  //   country: "",
  //   state: "",
  //   city: "",
  //   number: "",
  //   description: "",
  // });

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const hasCompletedAllSteps = activeStep == steps.length;
  const isLastStep = activeStep === steps.length - 1;
  const [compeletedStep, setcompeletedStep] = useState([]);
  const initialRender = useRef(true);
  useEffect(() => {
    // if (initialRender.current) {
    //   initialRender.current = false;
    //   return;
    // }
    setcompeletedStep([...compeletedStep, activeStep]);
  }, [activeStep]);

  const handleNext = async () => {
    if (activeStep === 5) {
      router.push("/candidate/profile-setting");
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
      <Steps
        responsive={false}
        // sx={stepTyle}
        // sx={stepTyle}
        sx={{
          ...globalStyles.stepperContainter,
          width: {
            xl: "90%",
            lg: "80%",
            md: "73%",

            base: "99%",
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
                    display: { sm: "block", base: "none" }, // color:'#fff'

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
                  p: { md: "40px 0px 0px 0px", base: "20px 7px 20px 7px" },
                  mt: "13px",
                  width: { md: "88%", base: "100%" },
                }}
              >
                {index == 0 ? (
                  <Overview state={state} setState={setState} />
                ) : index == 1 ? (
                  <WorkExperiance state={state} setState={setState} />
                ) : index == 2 ? (
                  <Education state={state} setState={setState} />
                ) : index == 3 ? (
                  <Certification state={state} setState={setState} />
                ) : index == 4 ? (
                  <Skills />
                ) : index == 5 ? (
                  <Attachments />
                ) : null}
              </Box>
            </Step>
          );
        })}
      </Steps>

      {(state.addExperience && activeStep == 1) ||
      state.edit ||
      (state.addEducation && activeStep == 2) ||
      (state.addCertificate && activeStep == 3) ? null : (
        <Flex
          width="100%"
          justify="center"
          mt={{ md: "43px", base: "3px" }}
          pb={"30px"}
          gap={4}
        >
          <>
            <Button
              isDisabled={activeStep === 0}
              onClick={() => {
                prevStep();
  
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
              {"Next"}
            </Button>
          </>
        </Flex>
      )}

    </Flex>
  );
};
