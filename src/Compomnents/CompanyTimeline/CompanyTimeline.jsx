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
import globalStyles from "@/styles/globalStyles";

// import PersonalInfo from "./PersonalInfo";
// import Password from "./Password";
// import Otp from "./Otp";
const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

export const CompanyTimeline = ({ variant }) => {
  const router = useRouter();
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;
  const CustomeSteps = () => {
    return (
      <Heading
        color={"white.100"}
        as={"p"}
        margin={"0px"}
        fontWeight={"700"}
        variant={"p1"}
      >
        {activeStep}
      </Heading>
    );
  };

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
            base: "40px 0px 60px 0px",
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
          checkIcon={CustomeSteps}
          sx={globalStyles.stepperContainter}
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
                  Company Website
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
        mt={{ md: "23px", base: "14px" }}
        gap={4}
      >
        <>
          <Button
            isDisabled={activeStep === 0}
            onClick={prevStep}
            width={{ "2xl": "200px", sm: "120px", base: "100px" }}
            variant="outline-blue"
          >
            { "Go Back"}
          </Button>
          <Button
            width={{ "2xl": "200px", sm: "120px", base: "100px" }}
            variant={"blue-btn"}
            onClick={() => {
              if (!hasCompletedAllSteps) {
                nextStep();
              } else {
                router.push("/profile-setting");
              }
            }}
          >
            { "Next"}
          </Button>
        </>
      </Flex>
    </Flex>
  );
};
