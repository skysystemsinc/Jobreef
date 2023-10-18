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
import SignUpLayout from "../Layout/SignUpLayout";
import cartoon from "@/assets/Images/cartoon.svg";
import leftblue_2 from "@/assets/Images/leftblue_2.png";
import whitetick from "@/assets/Images/white-tick.svg";
import { useState } from "react";

const steps = [
  { label: "Company Bio" },
  { label: "Company Location" },
  { label: "Social Links" },
];

export const CompanyTimeline = ({ variant }) => {
  const [State, setState] = useState({
    companyName: "",
    industry: "",
    directory: "",
    noOfEmployees: "",
    yearEstablished: "",
    email: "",
    decsription:"",
    
  });
  const router = useRouter();
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  console.log("State",State)

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
      <SignUpLayout
        icon={<Image width={"26px"} src={whitetick.src} />}
        subtitleIcon={
          hasCompletedAllSteps ? (
            <Image width={"26px"} src={whitetick.src} />
          ) : (
            false
          )
        }
        personVectorW={{ "2xl": "450px", base: "350px" }}
        bottomCartoon={cartoon.src}
        leftPic={leftblue_2.src}
        tittle={"1. About You"}
        subtitle={"2. About Your Company"}
      />
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
          variant={"circles-alt"}
          colorScheme="blue"
          activeStep={activeStep}
        >
          {steps.map(({ label }, index) => (
            <Step label={label} flexDirection={"column"} key={label}>
              <Box
                sx={{
                  p: { md: 8, base: "20px 0px 20px 0px" },
                  mt: "13px",
                  width: "100%",
                }}
              >
                {
                  index == 0 ? (
                    <CompanyBio  State={State} setState={setState} />
                  ) : index == 1 ? (
                    <CompanyLocation State={State} setState={setState}/>
                  ) : index == 2 ? (
                    <SocialLink State={State} setState={setState}/>
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
