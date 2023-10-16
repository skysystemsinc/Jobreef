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
import { role, roles } from "@/Utils/role";
import globalStyles from "@/styles/globalStyles";
import { useContext, useState } from "react";
import { Role_context } from "@/context/context";
import IconButton from "../IconButton/IconButton";
import JobBio from "./JobBio";
import TechnicalDetails from "./TechnicalDetails";
import Otp from "../SignUpTimeline/Otp";
import PersonalInfo from "../SignUpTimeline/PersonalInfo";
import JobLocation from "./JobLocation";
import DesiredSkills from "./DesiredSkills";
import Preview from "./Preview";
const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 4" },
  // { label: "Step 5" },
];

export const JobPostTimeline = ({ candidate, variant }) => {
  const { company, setCompany } = useContext(Role_context);

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const [completedSteps, setcompletedSteps] = useState([0]);
  console.log("completedSteps", completedSteps , activeStep)
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;

  const boxstyle = {
    minH: "55vh",
    marginTop: { md: "60px", base: "10px" },
  };
  const router = useRouter();

  const CustomeSteps = (props) => {
    return (
      <Heading
        color={"white.100"}
        as={"p"}
        margin={"0px"}
        fontWeight={"700"}
        variant={"p1"}
      >
        {/* {props+1} */}
        {activeStep}
      </Heading>
    );
  };

  const TimelineSubtitle = ({ isCompleted }) => {
    console.log("isCompleted",isCompleted)
    const textColor = isCompleted ? "blue.500" : "gray.light";
    return (
      <Box
        width={"415px"}
        display={{ md: "flex", base: "none" }}
        justifyContent={"space-between"}
        textAlign={"center"}
        mt={"12px"}
      >
        <Heading
          // color={"blue.500"}
          color={textColor}
          as={"h6"}
          variant={"p1"}
          position={"relative"}
          left={"-20px"}
        >
          Job Bio
        </Heading>
        <Heading
          color={textColor}
          as={"h6"}
          variant={"p1"}
          position={"relative"}
          left={"-5px"}
        >
          Technical Details
        </Heading>
        <Heading
          color={textColor}
          as={"h6"}
          variant={"p1"}
          position={"relative"}
          right={"-20px"}
        >
          Job Location
        </Heading>

        <Heading
          color={textColor}
          as={"h6"}
          variant={"p1"}
          position={"relative"}
          right={"-20px"}
        >
          Desired Skills
        </Heading>
      </Box>
    );
  };
  return (
    <Box>
      <Heading
        textAlign={"center"}
        m={{ md: "42px 0px 40px 0px", base: "30px 0px 30px 0px" }}
        variant={"p6"}
      >
        Create a New Job Post
      </Heading>
      <Flex
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        width="100%"
      >
        <Steps
          responsive={false}
          checkIcon={CustomeSteps}
          sx={{
            ...globalStyles.stepperContainter,

            width: {
              md: "404px",
              base: "90%",
            },
          }}
          // border={"1px solid red"}
          variant={variant}
          colorScheme="blue"
          activeStep={activeStep}
        >
          {steps.map(({ label }, index) => {
            console.log("index", index)
            const isCompleted = completedSteps.includes(index);
            console.log("activeStep",activeStep)
            return (
              <Step
                // border={"1px solid red"}
                flexDirection={"column"}
                key={label}
              >
                <TimelineSubtitle isCompleted={isCompleted} />
                <Box
                  sx={{
                    // p: { md: 8, base: "20px 0px 20px 0px" },
                    mt: "34px",
                    width: { md: "75%", base: "95%" },
                  }}
                >
                  {/* <JobBio /> */}

                  {index == 0 ? (
                    <JobBio />
                  ) : index == 1 ? (
                    <TechnicalDetails />
                  ) : index == 2 ? (
                    <JobLocation />
                  ) : index == 3 ? (
                    <DesiredSkills style={boxstyle} />
                  ) : null}
                </Box>
              </Step>
            );
          })}
        </Steps>
        {hasCompletedAllSteps ? <TimelineSubtitle /> : null}
        {hasCompletedAllSteps ? (
          <Box
            sx={{
              mt: "34px",
              width: { md: "85%", base: "95%" },
            }}
          >
            <Preview />
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
                handleEvent={prevStep}
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
