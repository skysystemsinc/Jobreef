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
const ExperianceForm = ({
  setexperianceData,
  setaddExperiance,
  setTabIndex,
  state,
  handleSave,
  tabIndex,
}) => {
  const [Experience, setExperience] = useState({
    companyName: "",
    designation: "",
    currentlyWorking: false,
    readOnly: false,
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
  console.log("Experience", Experience);
  return (
    <Box mt={{ md: "30px", base: "16px" }} width={{ lg: "60%", base: "100%" }}>
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
            placeholder="Enter the name of place of your employment"
            label={"Company Name"}
          />
          <LabelInput
            state={Experience.designation}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, designation: e.target.value };
              });
            }}
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
              state={Experience.stateDate}
              setState={(e) => {
                setExperience((prev) => {
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
                  state={Experience.endDate}
                  setState={(e) => {
                    setExperience((prev) => {
                      return { ...prev, endDate: e };
                    });
                  }}
                  readOnly={Experience.readOnly}
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
                bottom={"-30px"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Checkbox
                  // borderRadius={"10px"}
                  // defaultChecked
                  checked={Experience.currentlyWorking}
                  onChange={(e) => {
                    setExperience((prev) => {
                      return {
                        ...prev,
                        currentlyWorking: e.target.checked,
                        readOnly: e.target.checked ? true : false,
                      };
                    });
                  }}
                  borderColor={"black.200"}
                  size="md"
                  sx={globalStyles.checkBoxStyle}
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
            labelVariant={"label"}
            type="date"
            state={Experience.state}
            setState={(e) => {
              setExperience((prev) => {
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
            labelVariant={"label"}
            type="text"
            state={Experience.city}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, city: e.target.value };
              });
            }}
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
            state={Experience.employmentType}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, employmentType: e.target.value };
              });
            }}
            label={"Employment Type"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            dropdown
            variant={"bg-input"}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, jobFamily: e.target.value };
              });
            }}
            placeholder="Select the job family "
            label={"Job Family"}
          />
        </InputWrapper>

        <Box mb={{ md: "81px", base: "10px" }} mt={"20px"}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            textarea
            state={Experience.jobSummary}
            setState={(e) => {
              setExperience((prev) => {
                return { ...prev, jobSummary: e.target.value };
              });
            }}
            variant={"bg-teaxtarea"}
            placeholder="Describe what you did during this job "
            label={"Job Summary"}
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
              handleSave();
              // tabIndex == 0 ? null : setTabIndex(--tabIndex);
            }}
            // width={"max-content"}
            // px={{ md: "30px", base: "20px" }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              // tabIndex == 2 ? null : setTabIndex(++tabIndex);
              // router.push("/");
              handleSave();
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            // width={"max-content"}
            // px={{ md: "20px", base: "20px" }}

            variant={"blue-btn"}
          >
            {state.edit ? "Update Experience" : " Save Experience"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperianceForm;
