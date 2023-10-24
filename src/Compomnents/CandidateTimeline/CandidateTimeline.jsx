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
const steps = [
  { label: "Overview" },
  { label: "Work Experience" },
  { label: "Education" },
  { label: "Certifications" },
  { label: "Skills" },
  { label: "Attachments" },
];

export const CandidateTimeline = ({ candidate, variant }) => {
  const [addEducation, setaddEducation] = useState(false);
  const [addCertificate, setCertificate] = useState(false);

  const router = useRouter();
  const [addExperiance, setaddExperiance] = useState(false);

  const { company, setCompany } = useContext(Role_context);
  const [State, setState] = useState({
    country: "",
    state: "",
    city: "",
    number: "",
    description: "",
  });

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const hasCompletedAllSteps = activeStep == steps.length;
  const isLastStep = activeStep === steps.length - 1;
  const [compeletedStep, setcompeletedStep] = useState([]);
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    setcompeletedStep([...compeletedStep, activeStep]);
  }, [activeStep]);

  const handeNext = async () => {

    if (activeStep===5) {
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
      <Steps
        responsive={false}
        sx={{
          ...globalStyles.stepperContainter,
          width: { lg: "80%", base: "100%" },
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
                md: "75% !important",
                sm: "74% !important",
                base: "60% !important",
              },
              top: "17px   !important",
              marginInlineEnd: "0px !important",
              marginInlineStart: "0px !important",
            },
          },
        }}
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
                  p: { md: "40px 0px 0px 0px", base: "20px 0px 20px 0px" },
                  mt: "13px",
                  width: "100%",
                }}
              >
                {index == 0 ? (
                  <Overview state={State} setState={setState} />
                ) : index == 1 ? (
                  <WorkExperiance
                    setaddExperiance={setaddExperiance}
                    addExperiance={addExperiance}
                    State={State}
                    setState={setState}
                  />
                ) : index == 2 ? (
                  <Education
                    setaddEducation={setaddEducation}
                    addEducation={addEducation}
                    State={State}
                    setState={setState}
                  />
                ) : index == 3 ? (
                  <Certification
                    setCertificate={setCertificate}
                    addCertificate={addCertificate}
                  />
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
      {addExperiance || addEducation || addCertificate ? null : (
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
                // if (compeletedStep.includes(activeStep)) {
                //   const updatedCompletedSteps = compeletedStep.filter(
                //     (step) => step != activeStep
                //   );
                //   console.log("updatedCompletedSteps", updatedCompletedSteps);
                //   setcompeletedStep(updatedCompletedSteps);
                // }
              }}
              // width={{ md: "200px", sm: "180px", base: "130px" }}
              variant="outline-blue"
            >
              {" Back"}
            </Button>
            <Button
              // width={{ md: "200px", sm: "180px", base: "130px" }}
              variant={"blue-btn"}
              onClick={handeNext}
            >
              { "Next"}
            </Button>
          </>
        </Flex>
      )}
    </Flex>
  );
};
