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
  useToast,
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
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { post, put } from "@/helper/fetch";
import { addEmployee } from "@/Reudx/slices/employee";
import Loader from "../Loader/Loader";
import { EmploymentTypeOpt, jobFamilyOpt, workExperience } from "@/schema/stateSchema";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
const ExperianceForm = ({ state, setState }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [readOnly, setReadOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const formData = useSelector(
    (state) => state.employeeRegister.value.formData
  );
  console.log("formData", formData);
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [Experience, setExperience] = useState(workExperience);

  console.log("Experience", Experience);
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
    if (loading) return;
    const isValid = Object.values(Experience).some((value) => value === "");
    console.log("isValid", isValid);
    if (isValid || Experience.startDate == null) {
      toast({
        position: "bottom-right",
        title: " required fields are empty",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setLoading(true);

    const body = {
      employeeId: employeeState.id,
      companyName: Experience.companyName,
      designation: Experience.designation,
      startDate: Experience.startDate,
      endDate: Experience.endDate,
      currentlyWorking: Experience.currentlyWorking,
      employeeType: Experience.employeeType,
      jobFamily: Experience.jobFamily,
      jobSummary: Experience.jobSummary,
      location: {
        country: Experience.country,
        province: Experience.province,
        city: Experience.city,
        address: Experience.address,
      },
    };
    console.log("body", body);
    try {
      const postData = await post(`${endPoints.workExperience}`, body);
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, add: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            workExperience: [...employeeState.workExperience, postData.data],
          })
        );
      }
      toast({
        position: "bottom-right",
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (err) {
      setLoading(false);
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleUpdate = async () => {
    //TODO add validation of date
    if (loading) return;
    const isValid = Object.values(Experience).some((value) => value === "");
    console.log("isValid", isValid);
    if (isValid || Experience.startDate == null) {
      toast({
        position: "bottom-right",
        title: " required fields are empty",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setLoading(true);

    const body = {
      companyName: Experience.companyName,
      designation: Experience.designation,
      startDate: Experience.startDate,
      endDate: Experience.endDate,
      currentlyWorking: Experience.currentlyWorking,
      employeeType: Experience.employeeType,
      jobFamily: Experience.jobFamily,
      jobSummary: Experience.jobSummary,
      location: {
        country: Experience.country,
        province: Experience.province,
        city: Experience.city,
        address: Experience.address,
      },
    };

    try {
      const postData = await put(
        `${endPoints.workExperience}/${Experience.id}`,
        body
      );
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, edit: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            workExperience: employeeState.workExperience.map((item) =>
              item.id === postData.data.id ? postData.data : item
            ),
          })
        );
      }
      toast({
        position: "bottom-right",
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (err) {
      setLoading(false);
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleCancel = () => {
    setState((prev) => {
      return { ...prev, add: false, edit: false };
    });
  };

  useSkipInitialEffect(() => {
    if (formData) {
      formData.currentlyWorking ? setReadOnly(true) : setReadOnly(false);
      setExperience({ ...formData, ...formData.location });
    }
  }, [formData]);
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
            placeholder="Enter the name of place of your employment"
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
              state={Experience.startDate}
              setState={(e) => {
                setExperience((prev) => {
                  return { ...prev, startDate: e };
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
                  defaultCheck={Experience.currentlyWorking}
                  handleEvent={handleCurrentlyWorking}
                />
              </Box>
            </Box>
          </InputWrapper>
        </Box>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={Experience.country}
            setState={handleChange}
            name={"country"}
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            placeholder="Select the country of your job"
            dropdown
            label={"Country"}
          />
          <LabelInput
            state={Experience.province}
            setState={handleChange}
            name={"province"}
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
            setState={handleChange}
            name={"city"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter City"
            label={"City"}
          />
          <LabelInput
            state={Experience.address}
            setState={handleChange}
            name={"address"}
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
            dropdownOption={EmploymentTypeOpt}
            label={"Employment Type"}
            state={Experience.employeeType}
            setState={handleChange}
            name={"employeeType"}
          />
          <LabelInput
            labelVariant={"label"}
            type="date"
            state={Experience.jobFamily}
            setState={handleChange}
            dropdownOption={jobFamilyOpt}
            name={"jobFamily"}
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
            textFormatter
            state={Experience.jobSummary}
            setState={(e) =>
              setExperience((prev) => {
                return { ...prev, jobSummary: e };
              })
            }
            name={"jobSummary"}
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
          <Button onClick={handleCancel} variant="outline-blue">
            Cancel
          </Button>

          <Button
            onClick={Experience.id ? handleUpdate : handleSave}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            {loading ? (
              <Loader />
            ) : state.edit ? (
              "Update Experience"
            ) : (
              "Save Experience"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperianceForm;
