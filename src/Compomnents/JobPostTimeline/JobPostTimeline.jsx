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
import { useContext, useEffect, useRef, useState } from "react";
import { Role_context } from "@/context/context";
import IconButton from "../IconButton/IconButton";
import JobBio from "./JobBio";
import TechnicalDetails from "./TechnicalDetails";
import Otp from "../SignUpTimeline/Otp";
import PersonalInfo from "../SignUpTimeline/PersonalInfo";
import JobLocation from "./JobLocation";
import DesiredSkills from "./DesiredSkills";
import Preview from "./Preview";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import AssignJob from "./AssigneJob";
import { get } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { addJob } from "@/Reudx/slices/jobPost";
import { useDispatch, useSelector } from "react-redux";
import ScreeningQuestion from "./ScreeningQuestion";

const JobPostTimeline = ({ isEdit, title }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const jobState = useSelector((state) => state.jobPost.jobs.allJobs);

  const { id } = router.query;
  const steps = [
    { label: "Job Bio" },
    { label: "Technical Details" },
    { label: "Job Location" },
    { label: "Desired Skills" },
    { label: "Screening Questions" },
  ];

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 4,
  });

  const hasCompletedAllSteps = activeStep === steps.length;
  const [completedStep, setCompletedStep] = useState([]);

  useEffect(() => {
    setCompletedStep([...completedStep, activeStep]);
  }, [activeStep]);
  const boxStyle = {
    minH: "55vh",
    marginTop: { md: "60px", base: "10px" },
  };
  const getJob = async () => {
    console.log("get job by id");

    try {
      const postData = await get(`${endPoints.jobs}/${id}`);
      console.log("postData", postData);

      if (postData) {
        dispatch(addJob(postData.data));
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    console.log("id", id);
    if (id) {
      getJob();
    }
  }, [router.query]);
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
    <Box pb={"50px"}>
      <Heading
        textAlign={"center"}
        m={{ md: "42px 0px 40px 0px", base: "30px 0px 30px 0px" }}
        variant={"p6"}
      >
        {id ? "Update a Job Post" : "Create a New Job Post"}
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
                checkIcon={CostumeCheckIcon}
                flexDirection={"column"}
                icon={CostumeIcon}
                key={label}
                // icon={ hasCompletedAllSteps? false:CostomeIcon}
                label={
                  <Heading
                    variant={"p1"}
                    sx={{
                      color: completedStep.includes(index)
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
                    <JobBio nextStep={nextStep} prevStep={handlePrevious} />
                  ) : index == 1 ? (
                    <TechnicalDetails nextStep={nextStep} prevStep={handlePrevious} />
                  ) : index == 2 ? (
                    <JobLocation nextStep={nextStep} prevStep={handlePrevious} />
                  ) : index == 3 ? (
                    <DesiredSkills
                      nextStep={nextStep}
                      prevStep={handlePrevious}
                      style={boxStyle}
                    />
                  ) : index == 4 ? (
                    <ScreeningQuestion
                    
                    nextStep={nextStep}
                    prevStep={handlePrevious}
                    />
                  ) : null}
                </Box>
              </Step>
            );
          })}
        </Steps>

        {hasCompletedAllSteps ? (
          <Box
            sx={{
              mt: "34px",
              width: { md: "85%", base: "95%" },
            }}
          >
            <Preview isEdit={isEdit} />
          </Box>
        ) : null}
      </Flex>
    </Box>
  );
};
export default JobPostTimeline;
