import {
  Box,
  Checkbox,
  FormLabel,
  Heading,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  Textarea,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import { useDispatch, useSelector } from "react-redux";
import NextPrevBtn from "./NextPrevBtn";
import { addJob } from "@/Redux/slices/jobPost";
import { Seniority, educationOtp, experienceOtp, jobFamilyOpt, tags } from "@/schema/stateSchema";

const TechnicalDetails = ({ disableNextPrev, prevStep, nextStep }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const jobState = useSelector((state) => state.jobPost.value);
  const [formData, setFormData] = useState(jobState);

  const salaryRangeOption = ["Range Salary", "Starting Salary"];
  const rateOptions = [
    { label: "Monthly", value: "Monthly" },
    { label: "Annual", value: "Annual" },
    { label: "Weekly", value: "Weekly" },
    { label: "Bi-weekly", value: "Bi-weekly" },
    { label: "Hourly", value: "Hourly" },
    { label: "Daily", value: "Daily" },
  ];

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
    if (formData.minimumSalary === "") {
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
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={formData.opening}
          setState={handleChange}
          name={"opening"}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter the number of openings for this job"
          label={"Number of Openings"}
        />
        <LabelInput
          state={formData.minimumEducation}
          setState={handleChange}
          name={"minimumEducation"}
          labelVariant={"label"}
          type="text"
          dropdown
          dropdownOption={educationOtp}
          variant={"bg-input"}
          placeholder="Select Education Level for this job"
          label={"Minimum Education"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={formData.yearsOfExperience}
          setState={handleChange}
          name={"yearsOfExperience"}
          labelVariant={"label"}
          type="number"
          dropdown
          dropdownOption={experienceOtp}
          variant={"bg-input"}
          placeholder="select the years of experience desired for this job"
          label={"Years of Experience"}
        />
        <LabelInput
          state={formData.jobFamily}
          setState={handleChange}
          name={"jobFamily"}
          dropdownOption={jobFamilyOpt}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdown
          placeholder="Select family for this job"
          label={"Job Family"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={formData.minimumSalary}
          setState={handleChange}
          name={"minimumSalary"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdownOption={salaryRangeOption}
          imoptnatIcon
          placeholder="Enter minimum salary"
          label={"Minimum Salary"}
        />
        <LabelInput
          state={formData.maximumSalary}
          setState={handleChange}
          name={"maximumSalary"}
          labelVariant={"label"}
          type={"text"}
          variant={"bg-input"}
          placeholder={"Enter Maximum salary"}
          label={"Maximum Salary "}
        />
      </InputWrapper>

      <InputWrapper style={{ width: "100%" }}>
        <LabelInput
          state={formData.seniorityLevel}
          setState={handleChange}
          dropdownOption={Seniority}
          name={"seniorityLevel"}
          labelVariant={"label"}
          type="date"
          variant={"bg-input"}
          // dropdownOption={rateOptions}
          dropdown
          placeholder="Select seniority level"
          label={"Seniority Level"}
        />
        <LabelInput
          state={formData.rate}
          setState={handleChange}
          name={"rate"}
          labelVariant={"label"}
          type="date"
          variant={"bg-input"}
          dropdownOption={rateOptions}
          dropdown
          placeholder="Select Rate"
          label={"Rate"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={formData.tags}
          setState={(e) => {
            console.log("e", e);
            setFormData({ ...formData, tags: e });
          }}
          dropdownOption={tags}
          name={"tags"}
          labelVariant={"label"}
          type="text"
          dropdown
          multipleSelectDropdown
          variant={"bg-input"}
          placeholder="Select Tags for Job Post"
          label={"Tags"}
        />
      </InputWrapper>

      {disableNextPrev ? null : (
        <NextPrevBtn handleNext={handleSave} handlePrev={prevStep} />
      )}
    </Box>
  );
};

export default TechnicalDetails;
