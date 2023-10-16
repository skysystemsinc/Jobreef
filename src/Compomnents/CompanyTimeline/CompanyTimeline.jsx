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
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import CompanyBio from "./CompanyBio";
import CompanyLocation from "./CompanyLocation";
import SocialLink from "./SocialLink";
import { useRouter } from "next/router";
import globalStyles from "@/styles/globalStyles";
import blueclick from "@/assets/Images/blueclick.svg";
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
          flexDirection={"column"}
          alignItems={"center"}
          m={{
            "2xl": "100px 0px 100px 0px",
            sm: "30px 0px 30px 0px",
            base: "0px 0px 20px 0px",
          }}
        >
          <Image
            width={{ md: "60px", base: "40px" }}
            mb={{ md: "40px", base: "30px" }}
            src={blueclick.src}
          />
          <Heading
            maxW={"733px"}
            fontSize={{ "2xl": "30px", md: "23px", base: "18px" }}
            lineHeight={{ "2xl": "51px", md: "37px", base: "26px" }}
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
            <Step flexDirection={"column"} key={label}>
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
                  color={
                    activeStep == 1 || activeStep == 2
                      ? "blue.500"
                      : "gray.light"
                  }
                  as={"h6"}
                  variant={"p1"}
                  position={"relative"}
                  left={"-5px"}
                >
                  Company Location
                </Heading>
                <Heading
                  color={activeStep == 2 ? "blue.500" : "gray.light"}
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
        mt={{ md: "17px", base: "14px" }}
        gap={4}
      >
        <>
          <Button
            isDisabled={activeStep === 0}
            onClick={prevStep}
            // width={{ "2xl": "200px ", md: "140px", sm: "120px", base: "100px" }}
            variant="outline-blue"
          >
            {"Go Back"}
          </Button>
          <Button
            // width={{ "2xl": "200px", md: "140px", sm: "120px", base: "100px" }}
            variant={"blue-btn"}
            onClick={() => {
              if (!hasCompletedAllSteps) {
                nextStep();
              } else {
                router.push("/company/profile-setting");
              }
            }}
          >
            {"Next"}
          </Button>
        </>
      </Flex>
    </Flex>
  );
};
