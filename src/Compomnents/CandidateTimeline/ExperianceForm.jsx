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
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import globalStyles from "@/styles/globalStyles";
const ExperianceForm = ({ state, setState }) => {
  const [readOnly, setReadOnly] = useState(false);
  const [Experience, setExperience] = useState({
    companyName: "",
    designation: "",
    stateDate: new Date(),
    endDate: new Date(),
    country: "",
    state: "",
    city: "",
    streetAddress: "",
    employmentType: "",
    jobFamily: "",
    jobSummary: "",
  });
  
  const router = useRouter();
  return (
    <Box mt={{ md: "13px" }} width={"100%"}>
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={Experience.companyName}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, companyName: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of place of your employement"
            label={"Company Name"}
          />
          <LabelInput
            labelVariant={"label"}
            state={Experience.designation}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, designation: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Enter your designation "
            label={"Job Title / Designation "}
          />
        </InputWrapper>

        <Box border={"1px solid white"} mb={"30px"}>
          <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
            <LabelInput
              state={Experience.stateDate}
              setState={(e) => {
                setExperience((prev) => {
                  return { ...prev, stateDate: e };
                });
              }}
              defaultValue={false}
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Starting Date"}
            />

            <Box width={"100%"} position={"relative"}>
              <Box>
                <LabelInput
                  state={Experience.endDate}
                  setState={(e) => {
                    setExperience((prev) => {
                      return { ...prev, endDate: e };
                    });
                  }}
                  defaultValue={false}
                  labelVariant={"label"}
                  type="date"
                  variant={"bg-input"}
                  readOnly={readOnly}
                  placeholder="MM/DD/YYYY"
                  label={"Ending Date"}
                />
              </Box>
              <Box
                display={"flex"}
                position={"absolute"}
                bottom={"-30px"}
                gap={"8px"}
                alignItems={"center"}
              >
                <Checkbox
                  // borderRadius={"10px"}
                  checked={state.currentlyWorking}
                  onChange={(e) => {
                    e.target.checked == true
                      ? setReadOnly(true)
                      : setReadOnly(false);
                    setState((prev) => {
                      return { ...prev, currentlyWorking: e.target.checked };
                    });
                  }}
                  sx={globalStyles.checkBoxStyle}
                  borderColor={
                    state.currentlyWorking ? "blue.500" : "black.200"
                  }
                  size="md"
                  rounded={"md"}
                  colorScheme="blue"
                  // borderColor={"black.200"}
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
            state={Experience.country}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, country: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            placeholder="Select the country of your job"
            dropdown
            label={"Country"}
          />
          <LabelInput
            state={Experience.state}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, state: e.target.value };
              });
            }}
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
            state={Experience.city}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, city: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter City"
            label={"City"}
          />
          <LabelInput
            state={Experience.streetAddress}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, streetAddress: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter your Address "
            label={"Street Address"}
          />
        </InputWrapper>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            placeholder="Select the type of employment"
            dropdown
            label={"Employment Type"}
            state={Experience.employmentType}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, employmentType: e.target.value };
              });
            }}
          />
          <LabelInput
            labelVariant={"label"}
            type="date"
            state={Experience.jobFamily}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, jobFamily: e.target.value };
              });
            }}
            variant={"bg-input"}
            placeholder="Select the job family"
            dropdown
            label={"Job Family"}
          />
        </InputWrapper>

        <Box mb={{ md: "100px", base: "10px" }} mt={"20px"}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            state={Experience.jobSummary}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, jobSummary: e.target.value };
              });
            }}
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
              setState((prev) => {
                return { ...prev, addExperience: false, edit: false };
              });
              // tabIndex == 0 ? null : setTabIndex(--tabIndex);
            }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              // setaddExperiance(false);
              setState((prev) => {
                return { ...prev, addExperience: false, edit: false };
              });
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            {state.edit ? "Update Experience" : "Save Experience"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperianceForm;
