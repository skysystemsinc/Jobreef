import { Box, Image, Input,Button } from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import TextFormatting from "../TextFormatting/TextFormatting";

const JobBio = ({ state, setState }) => {
  const applicationType = ["External", "Internal"];
  const [readOnly, setreadOnly] = useState(false);
  const [urlPlaceholder, seturlPlaceholder] = useState("External");
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={state.jobTitle}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, jobTitle: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Job Title"
          label={"Job Title*"}
        />
        <LabelInput
          state={state.employeeType}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, employeeType: e.target.value };
            });
          }}
          dropdown
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Role of the Employee"
          label={"Employment Type"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={state.applicationDeadline}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, applicationDeadline: e };
            });
          }}
          labelVariant={"label"}
          type="date"
          imoptnatIcon
          variant={"bg-input"}
          placeholder="MM/DD/YYYY"
          label={"Application Deadline"}
        />
        <LabelInput
          state={state.locationType}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, locationType: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdown
          placeholder="Select Job Location e.g. remote, on-site, hybrid"
          label={"Location Type"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={state.applicationType.type}
          setState={(e) => {
            setState((prev) => {
              return {
                ...prev,
                applicationType: {
                  ...prev.applicationType,
                  type: e.target.value,
                },
              };
            });
          }}
          labelVariant={"label"}
          dropdownOption={applicationType}
          type="date"
          dropdown
          imoptnatIcon
          variant={"bg-input"}
          placeholder="Select application type"
          label={"Application Type"}
        />
        {state.applicationType.type === applicationType[1] ? (
          <Input
            mt={"30px"}
            readOnly={true}
            variant={"bg-input"}
            placeholder={""}
            type={"text"}
          />
        ) : (
          <LabelInput
            state={state.applicationType.url}
            setState={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  applicationType: {
                    ...prev.applicationType,
                    url: e.target.value,
                  },
                };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            readOnly={readOnly}
            placeholder="Enter URL to Redirect Candidates"
            label={urlPlaceholder}
          />
        )}
      </InputWrapper>

      <Box marginBottom={{ md: "25px", base: "15px" }}>     
        <LabelInput
            state={state.description}
            
            setState={(e) => {
              setState((prev) => {
                return { ...prev, description: e.target.value };
              });
            }}
            labelVariant={"label"}
            textFormattter
            variant={"bg-teaxtarea"}
            placeholder="Enter the job description in detail for candidates"
            label={"Job Description*"}
          />
      </Box>
    </Box>
  );
};

export default JobBio;
