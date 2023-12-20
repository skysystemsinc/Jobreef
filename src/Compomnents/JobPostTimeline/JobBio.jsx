import { Box, Image, Input, Button, useToast, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import TextFormatting from "../TextFormatting/TextFormatting";
import { useDispatch, useSelector } from "react-redux";
import { EmploymentTypeOpt, job } from "@/schema/stateSchema";
import IconButton from "../IconButton/IconButton";
import NextPrevBtn from "./NextPrevBtn";
import { addJob } from "@/Reudx/slices/jobPost";
import { get } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";

const JobBio = ({ disableNextPrev, prevStep, nextStep }) => {
  // const applicationType = [
  //   { label: "External", value: "External" },
  //   { label: "Internal", value: "Internal" },
  // ];
  const toast = useToast();
  const dispatch = useDispatch();

  const jobState = useSelector((state) => state.jobPost.value);
  const [formData, setFormData] = useState(jobState);

  const applicationType = ["External", "Internal"];

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSave = () => {
    if (
      formData.title === "" ||
      formData.applicationType === "" ||
      formData.jobDescription === "" ||
      formData.applicationDeadline == null
    ) {
      toast({
        position: "bottom-right",
        title: " required fields are empty",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    dispatch(addJob({ ...formData }));
    nextStep();
  };
  useEffect(() => {
    if (jobState) {
      setFormData(jobState);
    }
  }, [jobState]);
  const option = [
    {
      label: "Remote",
      value: "Remote",
    },
    {
      label: "Onsite",
      value: "Onsite",
    },
    {
      label: "hybrid",
      value: "hybrid",
    },
  ];
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={formData.title}
          setState={handleChange}
          name={"title"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Job Title"
          label={"Job Title*"}
        />
        <LabelInput
          state={formData.employmentType}
          setState={handleChange}
          name={"employmentType"}
          dropdown
          dropdownOption={EmploymentTypeOpt}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Role of the Employee"
          label={"Employment Type"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={formData.applicationDeadline}
          setState={(e) => {
            setFormData((prev) => {
              return { ...prev, applicationDeadline: new Date(e) };
            });
          }}
          labelVariant={"label"}
          type="date"
          importantIcon
          variant={"bg-input"}
          placeholder="MM/DD/YYYY"
          label={"Application Deadline"}
        />
        <LabelInput
          state={formData.locationType}
          setState={handleChange}
          name={"locationType"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdownOption={option}
          dropdown
          placeholder="Select Job Location e.g. remote, on-site, hybrid"
          label={"Location Type"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={formData.applicationType}
          setState={handleChange}
          
          name={"applicationType"}
          labelVariant={"label"}
          dropdownOption={applicationType}
          type="date"
          dropdown
          defaultDropdown={true}
          importantIcon
          variant={"bg-input"}
          placeholder="Select application type"
          label={"Application Type"}
        />
        {formData.applicationType === applicationType[1] ? (
          <Input
            mt={"30px"}
            readOnly={true}
            variant={"bg-input"}
            placeholder={""}
            type={"text"}
          />
        ) : (
          <LabelInput
            state={formData.externalURL}
            setState={handleChange}
            name={"externalURL"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            readOnly={false}
            placeholder="Enter URL to Redirect Candidates"
            label={"External"}
          />
        )}
      </InputWrapper>

      <Box marginBottom={{ md: "25px", base: "15px" }}>
        <LabelInput
          state={formData.jobDescription}
          setState={(e) => {
            setFormData((prev) => {
              return {
                ...prev,
                jobDescription: e,
              };
            });
          }}
          name={"jobDescription"}
          labelVariant={"label"}
          textFormatter
          variant={"bg-teaxtarea"}
          placeholder="Enter the job description in detail for candidates"
          label={"Job Description*"}
        />
      </Box>
      {disableNextPrev ? null : (
        <NextPrevBtn handleNext={handleSave} handlePrev={() => {}} />
      )}
    </Box>
  );
};

export default JobBio;
