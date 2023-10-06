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
const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

const CustomeSteps = () => {
  return (
    <Heading
      color={"white.100"}
      as={"p"}
      margin={"0px"}
      fontWeight={"700"}
      variant={"p1"}
    >
      1
    </Heading>
  );
};

export const Timeline = ({ variant }) => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;
  console.log("activeStep", activeStep)
  const router = useRouter();
  return (
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
          width: {
            md: "404px",
            base: "70%",
          },
          flexDir: "row !important",
          // border: "1px solid red",
          // width: "404px",

          "& .cui-steps__step-icon-container": {
            bg: "transparent",
            border: "4px solid gray.light !important",
            borderColor: "gray.light !important",
            width: "36px !important",
            height: "36px !important",
            // "&:first-child": {
            //   // borderColor: "blue.500 !important",
            //   span:{
            //     color:"red !important "

            //   }

            // },
            _active: {
              border: "4px solid blue.500 !important",
              borderColor: "blue.500 !important",
              "& .cui-steps__horizontal-step": {
                "&::after": {
                  bg: "blue.500 !important",
                },
              },

              bg: "blue.500",
              span: {
                color: "blue.500",
              },
            },
            span: {
              color: "gray.light ",
            },
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

              marginInlineEnd: "0px !important",
              marginInlineStart: "0px !important",
            },
          },
          "& .cui-steps__horizontal-step:first-of-type": {
            // border: '1px solid ',
            "& .cui-steps__step-icon-container": {
              borderColor: "blue.500 !important",
            },
            span: {
              color: "blue.500 ",
            },
            "&::after": {
              // bg: "blue.500 !important",
            },
          },
        }}
        variant={variant}
        colorScheme="blue"
        activeStep={activeStep}
      >
        {steps.map(({ label }, index) => (
          <Step re flexDirection={"column"} key={label}>
            <Box
              width={"415px"}
              display={{ md: "flex", base: "none" }}
              justifyContent={"space-between"}
              textAlign={"center"}
              mt={"12px"}
            >
              <Heading
                color={"blue.500"}
                as={"h6"}
                variant={"p1"}
                position={"relative"}
                left={"-20px"}
              >
                Personal info
              </Heading>
              <Heading
                as={"h6"}
                variant={"p1"}
                position={"relative"}
                left={"-5px"}
              >
                Password
              </Heading>
              <Heading
                as={"h6"}
                variant={"p1"}
                position={"relative"}
                right={"-20px"}
              >
                Verification
              </Heading>
            </Box>
            <Box
              sx={{
                p: { md: 8, base: "20px 0px 20px 0px" },
                mt: "13px",
                width: "100%",
              }}
            >
              {/* <Otp /> */}

              {index == 0 ? (
                <PersonalInfo />
              ) : index == 1 ? (
                <Password />
              ) : index == 2 ? (
                <Otp />
              ) : (
                <PersonalInfo />
              )}
            </Box>
          </Step>
        ))}
      </Steps>
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "53px", base: "43px" }}
        gap={4}
      >
        <>
          <Button
            isDisabled={activeStep === 0}
            onClick={prevStep}
            width={{ md: "200px", sm: "180px", base: "140px" }}
            variant="outline-blue"
          >
            {isLastStep ? "Change Email" : "Go Back"}
          </Button>
          <Button
            width={{ md: "200px", sm: "180px", base: "140px" }}
            variant={"blue-btn"}
            onClick={() => {
              if (activeStep==2) {
                router.push("/registeraion");
              } else {
                nextStep();
              }
            }}
          >
            {isLastStep ? "Verify" : "Next"}
          </Button>
        </>
      </Flex>
    </Flex>
  );
};
