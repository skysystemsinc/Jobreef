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
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { roles } from "@/Utils/constant";
import { BACKEND_URL } from "@/Utils/urls";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import CompanyUser from "./CompanyUser";

const steps = [
  { label: "Company Bio" },
  { label: "Company Location" },
  { label: "Social Links" },
  { label: "Company User" },
];

export const CreateCompanyTimeline = ({ variant }) => {
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
        {id ? "Update Company" : "Create Company"}
      </Heading>

      <Flex
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        width={{ md: "70%", base: "100%" }}
        mx={"auto"}
        // pb={"50px"}
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
              Thank you for signing up! We have received your registration
              details and are currently reviewing your account. Once your
              company is approved you can start posting jobs and receiving
              applications.
            </Heading>
          </Box>
        ) : (
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
                      p: { md: 8, base: "20px 0px 20px 0px" },
                      paddingBottom: "20px !important",
                      mt: "13px",
                      width: "100%",
                    }}
                  >
                    {index == 0 ? (
                      <CompanyBio nextStep={nextStep} />
                    ) : index == 1 ? (
                      <CompanyLocation
                        nextStep={nextStep}
                        handlePrevious={handlePrevious}
                      />
                    ) : index == 2 ? (
                      <SocialLink
                        nextStep={nextStep}
                        handlePrevious={handlePrevious}
                      />
                    ) : index == 3 ? (
                      <CompanyUser prevStep={prevStep} />
                    ) : null}
                  </Box>
                </Step>
              );
            })}
          </Steps>
        )}
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
