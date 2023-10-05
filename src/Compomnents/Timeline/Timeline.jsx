import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { Button, Checkbox, Flex, FormLabel, Heading, Input } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { AiFillCheckCircle } from "react-icons/ai";
import PersonalInfo from "./PersonalInfo";
import Password from "./Password";
import Otp from "./Otp";
const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];


const CustomeSteps = () => {
  return (

    <Heading color={"white.100"} as={"p"} margin={"0px"} fontWeight={"700"} variant={"p1"}>1</Heading>

  )

}



export const Timeline = ({
  variant,
}) => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;
  const bg = useColorModeValue("gray.200", "gray.700");
  console.log("activeStep", activeStep)
  return (
    <Flex flexDir="column" justifyContent={"center"} alignItems={"center"} width="100%">
      <Steps checkIcon={CustomeSteps}

        sx={{

          // border: "1px solid red",
          width: "404px",

          "& .cui-steps__step-icon-container": {
            bg: 'transparent',
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
                  bg: "blue.500 !important"

                }
              },

              bg: "blue.500",
              span: {
                color: 'blue.500'
              }
            },
            span: {

              color: 'gray.light '
            }
          },


          "& .cui-steps__horizontal-step": {
            _active: {
              "&::after": {
                bg: "blue.500 !important"
              }
            },
            "&::after": {
              bg: "gray.light !important",
              height: '3px !important',

              marginInlineEnd: "0px !important",
              marginInlineStart: "0px !important"
            }
          },
          "& .cui-steps__horizontal-step:first-child": {
            // border: '1px solid ',
            "& .cui-steps__step-icon-container": {
              borderColor: "blue.500 !important",

            },
            span: {

              color: 'blue.500 '
            },
            "&::after": {
              // bg: "blue.500 !important",
            }
          }
        }} variant={variant} colorScheme="blue" activeStep={activeStep}>
        {steps.map(({ label }, index) => (
          <Step flexDirection={"column"} key={label}>
            <Box
              width="415px"

              display={"flex"} justifyContent={"space-between"} textAlign={"center"} mt={"12px"}>
              <Heading color={"blue.500"} as={"h6"} variant={"p1"} position={"relative"} left={"-20px"} >Personal info</Heading>
              <Heading as={"h6"} variant={"p1"} position={"relative"} left={"-5px"} >Password</Heading>
              <Heading as={"h6"} variant={"p1"} position={"relative"} right={"-20px"}>Verification</Heading>
            </Box>
            <Box sx={{
              p: 8, mt: "13px", rounded: "md", width: '100%',
            }}>

              {index == 0 ?

                <PersonalInfo />
                : index == 1 ?
                  <Password /> : null
              }
              <Otp />
              {/* <Box>

                <Box marginBottom={{ sm: "40px", base: '40px' }}>
                  <FormLabel marginBottom={{ sm: "19px", base: "10px" }} variant={"label"}>First Name</FormLabel>
                  <Input variant={"bg-input"} placeholder='Enter First Name' type='text' />
                </Box>

                <Box marginBottom={{ sm: "40px", base: '40px' }}>
                  <FormLabel marginBottom={{ sm: "19px", base: "10px" }} variant={"label"}>Last Name</FormLabel>
                  <Input variant={"bg-input"} placeholder='Enter Last Name' type='text' />
                </Box>

                <Box marginBottom={{ sm: "20px", base: '40px' }}>
                  <FormLabel marginBottom={{ sm: "19px", base: "10px" }} variant={"label"}>Email</FormLabel>
                  <Input variant={"bg-input"} placeholder='Enter Last Email' type='email' />
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Checkbox borderRadius={"10px"} defaultChecked size='md' colorScheme='blue' />
                  <Heading variant={"p1"} color={"blue.500"} margin={"0px"} >Register as Employer </ Heading>

                </Box>
              </Box> */}
              {/* <Heading fontSize="xl" textAlign="center">
                Step {index + 1}
              </Heading>
               */}
            </Box>
          </Step>
        ))}
      </Steps>
      {hasCompletedAllSteps && (
        <Box sx={{ bg, my: 8, p: 8, rounded: "md" }}>
              <Otp />
          
        </Box>
      )}
      <Flex width="100%" justify="center" mt="53px" gap={4}>
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={reset}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              isDisabled={activeStep === 0}
              onClick={prevStep}

              variant="outline-blue"
            >
              Prev
            </Button>
            <Button variant={"blue-btn"} onClick={nextStep}>
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
