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
import { format } from "date-fns";
import CheckBox from "../CheckBox/CheckBox";
import { httpRequest } from "@/helper/httpRrequest";
import { BACKEND_URL } from "@/Utils/urls";
import endPoints from "@/Utils/endpoints";
import { useSelector } from "react-redux";
const ExperianceForm = ({ state, setState }) => {
  const [readOnly, setReadOnly] = useState(false);
  const employeeState = useSelector((state) => state.employeeRegister.value);

  const [Experience, setExperience] = useState({
    companyName: "",
    designation: "",
    stateDate: new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    endDate: new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    country: "",
    state: "",
    city: "",
    streetAddress: "",

    currentlyWorking: false,
    employmentType: "",
    jobFamily: "",
    jobSummary: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExperience((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleCurrentlyWorking = (e) => {
    e.target.checked == true ? setReadOnly(true) : setReadOnly(false);
    setExperience((prev) => {
      return { ...prev, currentlyWorking: e.target.checked };
    });
  };

  const handleSave = async () => {
    const body = {
      workExperience: {
        ...Experience,
        location: {
          country: Experience.country,
          state: Experience.state,
          city: Experience.city,
          streetAddress: Experience.streetAddress,
        },
      },
    };
    const postData = await httpRequest(
      `${BACKEND_URL}${endPoints.employee}/${employeeState.id}`,
      "PUT",
      body
    );
    console.log("postData",postData)
  };
  return (
    <Box mt={{ md: "13px" }} width={"100%"}>
      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={Experience.companyName}
            setState={handleChange}
            name={"companyName"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of place of your employement"
            label={"Company Name"}
          />
          <LabelInput
            state={Experience.designation}
            setState={handleChange}
            name={"designation"}
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
              defaultValue={false}
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Starting Date"}
            />

            <Box width={"100%"} position={"relative"}>
              <Box>
                {!readOnly ? (
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
                    label={"Ending Date"}
                  />
                ) : (
                  <LabelInput
                    // state={Experience.endDate}
                    // setState={(e) => {
                    //   setExperience((prev) => {
                    //     return {
                    //       ...prev,
                    //       endDate: new Date().toLocaleDateString(undefined, {
                    //         year: "numeric",
                    //         month: "2-digit",
                    //         day: "2-digit",
                    //       }),
                    //     };
                    //   });
                    // }}
                    defaultValue={false}
                    labelVariant={"label"}
                    type="text"
                    variant={"bg-input"}
                    readOnly={readOnly}
                    placeholder="Present"
                    label={"Ending Date"}
                  />
                )}
              </Box>
              <Box mt={"10px"} position={"absolute"} bottom={"-30px"}>
                <CheckBox
                  label={"Currently Working Here"}
                  selectSate={Experience.currentlyWorking}
                  handleEvent={handleCurrentlyWorking}
                />
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
            }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              handleSave()
              setState((prev) => {
                return { ...prev, addExperience: false, edit: false };
              });
            }}
            
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
