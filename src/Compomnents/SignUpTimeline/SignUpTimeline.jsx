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
import { role, roles } from "@/Utils/role";
import globalStyles from "@/styles/globalStyles";
import { useContext } from "react";
import { Role_context } from "@/context/context";
const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

export const SignUpTimeline = ({ candidate, variant }) => {
  const { company, setCompany } = useContext(Role_context);

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;

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
        sx={globalStyles.stepperContainter}
        variant={variant}
        colorScheme="blue"
        // border={"1px solid red"}

        activeStep={activeStep}
      >
        {steps.map(({ label }, index) => (
          <Step  
          
          flexDirection={"column"} key={label}>
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
                width: "90%",
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
        mt={{ md: "43px", base: "43px" }}
        pb={"30px"}
        gap={4}
      >
        <>
          <Button
            isDisabled={activeStep === 0}
            onClick={prevStep}
            // width={{ md: "200px", sm: "180px", base: "130px" }}
            variant="outline-blue"
          >
            {isLastStep ? "Change Email" : "Go Back"}
          </Button>
          <Button
            // width={{ md: "200px", sm: "180px", base: "130px" }}
            variant={"blue-btn"}
            onClick={() => {
              if (activeStep == 2) {
                if (!company) {
                  router.push("/candidate/profile-setting");
                } else {
                  router.push("/registeraion");
                }
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
