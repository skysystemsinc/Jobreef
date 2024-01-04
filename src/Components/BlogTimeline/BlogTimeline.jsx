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

import { useEffect, useRef, useState } from "react";

import BlogInfo from "./BlogInfo";
import BlogContent from "./BlogContent";

const steps = [{ label: "Blog Info" }, { label: "Blog Content" }];

export const BlogTimeline = ({ variant }) => {
  const router = useRouter();
  const { id } = router.query;
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
    <>
      <Heading
        textAlign={"center"}
        m={{ md: "42px 0px 40px 0px", base: "30px 0px 30px 0px" }}
        variant={"p6"}
      >
        {id ? "Update Blog" : "Create Blog"}
      </Heading>

      <Flex
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        width={{ md: "70%", base: "100%" }}
        mx={"auto"}
        pb={"20px"}
      >
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
                icon={CostumeIcon}
                flexDirection={"column"}
                key={label}
              >
                <Box
                  sx={{
                    
                    paddingBottom: "20px !important",
                    mt: "13px",
                    width: "100%",
                  }}
                >
                  {index == 0 ? (
                    <BlogInfo nextStep={nextStep} />
                  ) : index == 1 ? (
                    <BlogContent
                      nextStep={nextStep}
                      handlePrevious={handlePrevious}
                    />
                  ) : null}
                </Box>
              </Step>
            );
          })}
        </Steps>
        <Box mx="auto">
          {hasCompletedAllSteps ? (
            <Button
              isDisabled={activeStep === 0}
              onClick={() => {
                router.push("/");
              }}
              variant="blue-btn"
            >
              {"Login"}
            </Button>
          ) : null}
        </Box>
      </Flex>
    </>
  );
};
