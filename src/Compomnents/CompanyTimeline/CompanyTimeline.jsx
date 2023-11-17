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
import { roles } from "@/Utils/role";
import { BACKEND_URL } from "@/Utils/urls";
import Loader from "../Loader/Loader";

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
    webLink: "",
    description: "",
    country: "",
    province: "",
    city: "",
    address: "",
    loading: false,
    platform: "",
    link: "",
    logo: false,
    links: [
      {
        platform: "",
        link: "",
      },
    ],
  });

  const router = useRouter();
  const toast = useToast();
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const hasCompletedAllSteps = activeStep === steps.length;
  const isLastStep = activeStep === steps.length - 1;
  const [compeletedStep, setcompeletedStep] = useState([]);
  const initialRender = useRef(true);
  useEffect(() => {
    // if (initialRender.current) {
    //   initialRender.current = false;
    //   return;
    // }
    setcompeletedStep([...compeletedStep, activeStep]);
  }, [activeStep]);
  const handleNext =  (e) => {
    e.preventDefault()
    if (activeStep == 2) {
      handleRegister();
    } else {
      nextStep();
    }
  };

  const handleRegister = async () => {

    try {
      const postData = await axios({
        method: "POST",
        url: `${BACKEND_URL}${endPoints.company}`,
        data: {
          companyName: State.companyName,
          location: {
            country: State.country,
            province: State.province,
            city: State.city,
            address: State.address,
          },
          // [role == roles.company ? "companyId" : "employeeId"]: id,
          industry: State.industry,
          directory: State.directory,
          noOfEmployees: parseInt(State.noOfEmployees),
          yearEstablished: parseInt(State.yearEstablished),
          description: State.description,
          webUrl: State.webLink,
          companyLogo: State.logo,
          socialLinks: State.links,
        },
      });
      if (postData) {
        handleUserAssociation(postData.data.data.id);
        // console.log("postData", postData);
      }
    } catch (err) {
      const errorMessage = err?.response?.data.message;
      console.log("errr", err);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",

        title: errorMessage,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleUserAssociation = (companyId) => {
    const role = localStorage.getItem("role");
    const id = localStorage.getItem("id");
    try {
      const userAssociation = axios({
        method: "PUT",
        url: `${BACKEND_URL}${endPoints.user}/${id}`,
        data: {
          role: role,
          [role == roles.company ? "companyId" : "employeeId"]: companyId,
        },
      });
      if (userAssociation) {
        setState((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
        router.push("/company/profile-setting");
      }
    } catch (err) {}
  };
  return (
    <Flex
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
      width="100%"
    >
      <SignUpLayout
        icon={<Image width={"22px"} src={whitetick.src} />}
        subtitleIcon={
          hasCompletedAllSteps ? (
            <Image width={"22px"} src={whitetick.src} />
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
            const CostomeCheckIcon = () => {
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
            const CostomeIcon = () => {
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
                checkIcon={CostomeCheckIcon}
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
                icon={CostomeIcon}
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
                  {
                    index == 0 ? (
                      <CompanyBio State={State} setState={setState} />
                    ) : index == 1 ? (
                      <CompanyLocation State={State} setState={setState} />
                    ) : index == 2 ? (
                      <SocialLink State={State} setState={setState} />
                    ) : null
                    // <PersonalInfo />
                  }
                </Box>
              </Step>
            );
          })}
        </Steps>
      )}

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "17px", base: "14px" }}
        gap={4}
      >
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
        ) : (
          <>
            {" "}
            {activeStep == 0 ? null : (
              <Button
                isDisabled={activeStep === 0}
                onClick={() => {
                  prevStep();
                  if (compeletedStep.includes(activeStep)) {
                    const updatedCompletedSteps = compeletedStep.filter(
                      (step) => step != activeStep
                    );

                    setcompeletedStep(updatedCompletedSteps);
                  }
                }}
                variant="outline-blue"
              >
                {" Back"}
              </Button>
            )}
            <Button
              // width={{ "2xl": "200px", md: "140px", sm: "120px", base: "100px" }}
              variant={"blue-btn"}
              onClick={handleNext}
            >
              {State.loading ? <Loader /> : "Next"}
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
