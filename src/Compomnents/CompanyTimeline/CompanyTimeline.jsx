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
import CompanyBio from "./CompanyBio";
import CompanyLocation from "./CompanyLocation";
import SocialLink from "./SocialLink";
import { useRouter } from "next/router";

// import PersonalInfo from "./PersonalInfo";
// import Password from "./Password";
// import Otp from "./Otp";
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

export const CompanyTimeline = ({ variant }) => {
  const router = useRouter();
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;

  return (
    <Flex
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
      width="100%"
    >
      {hasCompletedAllSteps ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          m={{
            md: "160px 0px 160px 0px",
            sm: "100px 0px 100px 0px",
            base: "60px 0px 60px 0px",
          }}
        >
          <Heading
            maxW={"733px"}
            fontSize={{ md: "30px", sm: "25px", base: "20px" }}
            lineHeight={{ md: "51px", sm: "37px", base: "29px" }}
            textAlign={"center"}
            variant={"p3"}
          >
            Thank you for signing up! We have received your registration details
            and are currently reviewing your account. Once your company is
            approved you can start posting jobs and receiving applications.
          </Heading>
        </Box>
      ) : (
        <Steps
          responsive={false}
          checkIcon={false}
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
                  Company Bio
                </Heading>
                <Heading
                  as={"h6"}
                  variant={"p1"}
                  position={"relative"}
                  left={"-5px"}
                >
                  Company Location
                </Heading>
                <Heading
                  as={"h6"}
                  variant={"p1"}
                  position={"relative"}
                  right={"-20px"}
                >
                  Social Links
                </Heading>
              </Box>
              <Box
                sx={{
                  p: { md: 8, base: "20px 0px 20px 0px" },
                  mt: "13px",
                  width: "100%",
                }}
              >
                {
                  index == 0 ? (
                    <CompanyBio />
                  ) : index == 1 ? (
                    <CompanyLocation />
                  ) : index == 2 ? (
                    <SocialLink />
                  ) : null
                  // <PersonalInfo />
                }
              </Box>
            </Step>
          ))}
        </Steps>
      )}

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "23px", base: "43px" }}
        gap={4}
      >
        <>
          {/* <Button
            isDisabled={activeStep === 0}
            onClick={prevStep}
            width={{ md: "200px", sm: "180px", base: "140px" }}
            variant="outline-blue"
          >
            {isLastStep ? "Change Email" : "Go Back"}
          </Button> */}
          <Button
            width={{ md: "200px", sm: "180px", base: "140px" }}
            variant={"blue-btn"}
            onClick={() => {
              if (!hasCompletedAllSteps) {
                nextStep();
              } else {
                router.push("/profile-setting");
              }
            }}
          >
            {isLastStep ? "Skip" : "Next"}
          </Button>
        </>
      </Flex>
    </Flex>
  );
};
