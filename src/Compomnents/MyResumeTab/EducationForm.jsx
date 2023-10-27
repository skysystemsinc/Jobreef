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
const EducationForm = ({
  setexperianceData,
  state,
  setaddExperiance,
  saveHandle,
  setTabIndex,
  tabIndex,
}) => {
  const router = useRouter();
  const [education, setEducation] = useState({
    schoolName: "",
    diploma: "",
    readOnly: false,
    stateDate: new Date(),
    endDate: new Date(),
    country: "",
    currentlyEnrolled: false,
    state: "",
    city: "",
    streetAddress: "",
    gpa: "",
    description: "",
  });
  return (
    <Box mt={{ md: "30px", base: "16px" }} width={{ lg: "60%", base: "100%" }}>
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            state={education.schoolName}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, schoolName: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your school"
            label={"School Name"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            state={education.diploma}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, diploma: e.target.value };
              });
            }}
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
                  labelVariant={"label"}
                  type="date"
                  readOnly={education.readOnly}
                  variant={"bg-input"}
                  state={education.endDate}
                  setState={(e) => {
                    setEducation((prev) => {
                      return { ...prev, endDate: e };
                    });
                  }}
                  placeholder="MM/DD/YYYY"
                  label={"Ending Date"}
                />
              </Box>
              <Box
                display={"flex"}
                position={"absolute"}
                bottom={"-30px"}
                gap={"15px"}
                alignItems={"center"}
              >
                <Checkbox
                  // borderRadius={"10px"}
                  // defaultChecked  checked={state.currentlyWorking}
                  checked={education.currentlyEnrolled}
                  onChange={(e) => {
                    setEducation((prev) => {
                      return {
                        ...prev,
                        currentlyEnrolled: e.target.checked,
                        readOnly: e.target.checked == true ? true : false,
                      };
                    });
                  }}
                  borderColor={"black.200"}
                  border={"2px solid "}
                  size="sm"
                  rounded={"base"}
                  colorScheme="blue"
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
            state={education.country}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, country: e.target.value };
              });
            }}
            type="date"
            variant={"bg-input"}
            placeholder="Select the country of your education"
            dropdown
            label={"Country"}
          />
          <LabelInput
            state={education.state}
            setState={(e) => {
              setEducation((prev) => {
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
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter City"
            state={education.city}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, city: e.target.value };
              });
            }}
            label={"City"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            state={education.streetAddress}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, streetAddress: e.target.value };
              });
            }}
            placeholder="Enter your Address "
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

        <Box mb={{ md: "81px", base: "10px" }} mt={"20px"}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            textarea
            state={education.description}
            setState={(e) => {
              setEducation((prev) => {
                return { ...prev, description: e.target.value };
              });
            }}
            variant={"bg-teaxtarea"}
            placeholder="Describe what you did and studied during this period"
            label={"Description"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "36px", base: "10px" }}
          pb={"39px"}
        >
          <Button
            onClick={() => {
              // setaddExperiance(false);
              saveHandle();

              // tabIndex == 0 ? null : setTabIndex(--tabIndex);
            }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              saveHandle();
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
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
