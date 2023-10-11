import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Checkbox,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
const ExperianceForm = ({ setaddExperiance, setTabIndex, tabIndex }) => {
  const router = useRouter();
  return (
    <Box
      mt={{ md: "50px", lg: "60px", base: "20px" }}
      width={{ xl: "70%", sm: "100%" }}
    >
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of place of your employement"
            label={"Company Name"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter your designation "
            label={"Job Title / Designation "}
          />
        </InputWrapper>

        <Box border={"1px solid white"} mb={"30px"}>
          <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
            <LabelInput
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Starting Date"}
            />

            <Box width={"100%"} position={"relative"}>
              <Box>
                <LabelInput
                  labelVariant={"label"}
                  type="date"
                  variant={"bg-input"}
                  placeholder="MM/DD/YYYY"
                  label={"Ending Date"}
                />
              </Box>
              <Box
                display={"flex"}
                position={"absolute"}
                bottom={"-40px"}
                gap={"15px"}
                alignItems={"center"}
              >
                <Checkbox
                  // borderRadius={"10px"}
                  // defaultChecked

                  borderColor={"black.200"}
                  border={"2px solid "}
                  size="sm"
                  rounded={"base"}
                  colorScheme="blue"
                />
                <Heading variant={"p1"} color={"black.100"}>
                  Currently Working Here
                </Heading>
              </Box>
            </Box>
          </InputWrapper>
        </Box>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            placeholder="Select the country of your job"
            dropdown
            label={"Country"}
          />
          <LabelInput
            labelVariant={"label"}
            type="date"
            dropdown
            variant={"bg-input"}
            placeholder="Select your state / province"
            label={"State / Province"}
          />
        </InputWrapper>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            placeholder="Select your home country"
            dropdown
            label={"City"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter your Address "
            label={"Street Address"}
          />
        </InputWrapper>

        <Box maxWidth={{ xl: "48%", base: "100%" }}>
          <LabelInput
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            placeholder="Select the type of employement"
            dropdown
            label={"Employment Type"}
          />
        </Box>

        <Box mb={{ md: "100px", base: "10px" }} mt={"20px"}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            textarea
            variant={"bg-teaxtarea"}
            placeholder="Describe what you did during this job "
            label={"Job Summary"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "40px", base: "10px" }}
          my={{ md: "56px", base: "20px" }}
          pb={"39px"}
        >
          <Button
            onClick={() => {
              setaddExperiance(false);
              // tabIndex == 0 ? null : setTabIndex(--tabIndex);
            }}
            
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              // tabIndex == 2 ? null : setTabIndex(++tabIndex);
              // router.push("/");
              setaddExperiance(false);
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            Save Eexperiance
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperianceForm;
