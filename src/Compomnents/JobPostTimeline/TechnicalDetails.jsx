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
} from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";

const TechnicalDetails = ({ state, setState }) => {
  const [salaryRange, setsalaryRange] = useState({
    type: "text",
  });

  const salaryRangeOption = ["Range Salary", "Starting Salary"];
  const rateOptions = [
    "Monthly",
    "Annual",
    "Weekly",
    "Bi-weekly",
    "Hourly",
    "Daily",
  ];
  const handleSelectSalary = (e) => {
    if (e.target.value == salaryRangeOption[0]) {
      setsalaryRange({ type: "text" });
    } else {
      setsalaryRange({ type: "number" });
    }
    setState((prev) => {
      return { ...prev, salaryType: e.target.value };
    });
  };
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={state.noOfOpening}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, noOfOpening: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter the number of openings for this job"
          label={"Number of Openings"}
        />
        <LabelInput
          state={state.minimumEducation}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, minimumEducation: e.target.value };
            });
          }}
          labelVariant={"label"}
          dropdown
          type="text"
          variant={"bg-input"}
          placeholder="Select Education Level for this job"
          label={"Minimum Education"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={state.yearsOfExperiance}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, yearsOfExperiance: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          dropdown
          variant={"bg-input"}
          placeholder="Enter the years of experience desired for this job"
          label={"Years of Experience"}
        />
        <LabelInput
          state={state.jobFamily}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, jobFamily: e.target.value };
            });
          }}
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
          state={state.salaryType}
          setState={(e) => {
            handleSelectSalary(e);
            // setState((prev) => {
            //   return { ...prev, salaryType: e.target.value };
            // });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdownOption={salaryRangeOption}
          imoptnatIcon
          placeholder="Enter minimum salary"
          label={"Minimum Salary"}
        />
        <LabelInput
          state={state.salaryRange}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, salaryRange: e.target.value };
            });
          }}
          labelVariant={"label"}
          type={salaryRange.type}
          variant={"bg-input"}
          placeholder={"Enter Maximum salary"}
          label={"Maximum Salary "}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={state.rate}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, rate: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="date"
          variant={"bg-input"}
          dropdownOption={rateOptions}
          dropdown
          placeholder="Select Rate"
          label={"Rate"}
        />
        <LabelInput
          state={state.tags}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, tags: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          dropdown
          variant={"bg-input"}
          placeholder="Select Tags for Job Post"
          label={"Tags"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={state.rate}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, rate: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="date"
          variant={"bg-input"}
          // dropdownOption={rateOptions}
          dropdown
          placeholder="Select seniority level"
          label={"Seniority Level"}
        />
   
      </InputWrapper>

      
    </Box>
  );
};

export default TechnicalDetails;
