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
const EducationForm = ({ state, setState }) => {
  const [readOnly, setReadOnly] = useState(false);
  const [education, setEducation] = useState({
    schoolName: "",
    diploma: "",
    stateDate: new Date(),
    endDate: new Date(),
    country: "",
    state: "",
    city: "",
    streetAddress: "",
    gpa: "",
    description: "",
  });
  console.log("education", education);
  const router = useRouter();
  return (
    <Box width={"100%"}>
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your school"
            label={"School Name"}
            state={education.schoolName}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, schoolName: e.target.value };
              });
            }}
          />
          <LabelInput
            state={education.diploma}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, diploma: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter your diploma"
            label={"Diploma"}
          />
        </InputWrapper>

        <Box border={"1px solid white"} mb={"30px"}>
          <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
            <LabelInput
              state={education.stateDate}
              setState={(e) => {
                setEducation((prev) => {
                  return { ...prev, stateDate: e };
                });
              }}
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Starting Date"}
            />

            <Box width={"100%"} position={"relative"}>
              <Box>
                <LabelInput
                  state={education.endDate}
                  setState={(e) => {
                    setEducation((prev) => {
                      return { ...prev, endDate: e };
                    });
                  }}
                  labelVariant={"label"}
                  type="date"
                  variant={"bg-input"}
                  placeholder="MM/DD/YYYY"
                  readOnly={readOnly}
                  label={"Ending Date"}
                />
              </Box>
              <Box
                display={"flex"}
                position={"absolute"}
                bottom={"-25px"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Checkbox
                  // borderRadius={"10px"}
                  // defaultChecked
                  checked={state.currentlyWorking}
                  onChange={(e) => {
                    e.target.checked == true
                      ? setReadOnly(true)
                      : setReadOnly(false);
                    setState((prev) => {
                      return { ...prev, currentlyWorking: e.target.checked };
                    });
                  }}
                  borderColor={"black.200"}
                  // border={"2px solid "}

                  size="md"
                  rounded={"base"}
                  colorScheme="blue"
                  sx={globalStyles.checkBoxStyle}
                />
                <Heading variant={"p1"} color={"black.100"}>
                  Currently Enrolled
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
            state={education.country}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, country: e.target.value };
              });
            }}
          />
          <LabelInput
            labelVariant={"label"}
            type="date"
            state={education.state}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, state: e.target.value };
              });
            }}
            dropdown
            variant={"bg-input"}
            placeholder="Select your state / province"
            label={"State / Province"}
          />
        </InputWrapper>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={education.city}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, city: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="
            Enter City"
            
            label={"City"}
          />
          <LabelInput
            state={education.streetAddress}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, streetAddress: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Street Address "
            label={"Street Address"}
          />
        </InputWrapper>

        <Box maxWidth={{ xl: "48%", base: "100%" }}>
          <LabelInput
            labelVariant={"label"}
            state={education.gpa}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, gpa: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Enter your Gpa"
            label={"Gpa"}
          />
        </Box>

        <Box mb={{ md: "100px", base: "10px" }} mt={"20px"}>
          <LabelInput
            state={education.description}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, description: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            textarea
            variant={"bg-teaxtarea"}
            placeholder="Describe what you did and studied during this period"
            label={"Description"}
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
                return { ...prev, addEducation: false, edit: false };
              });
            }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              setState((prev) => {
                return { ...prev, addEducation: false, edit: false };
              });
            }}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            {state.edit ? "Update Education" : "  Save Education"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationForm;
