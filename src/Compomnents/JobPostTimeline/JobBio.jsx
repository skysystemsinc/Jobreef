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
  import React from "react";
  import LabelInput from "../LabelInput/LabelInput";
  import InputWrapper from "../InputWrapper/InputWrapper";
  import { Link } from "@chakra-ui/next-js";
  import { BsDot } from "react-icons/bs";
  import upload from "@/assets/Images/upload.svg";
  
  const JobBio = () => {
    return (
      <Box>
        <InputWrapper>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Job Title"
            label={"Job Title*"}
          />
          <LabelInput
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
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            
            placeholder="MM/DD/YYYY"
            label={"Application Deadline*"}
          />
          <LabelInput
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
            labelVariant={"label"}
            textarea
            variant={"bg-teaxtarea"}
            placeholder="Enter the job description in detail for candidates"
            label={"Job Description*"}
          />
        </InputWrapper>
        
      </Box>
    );
  };
  
  export default JobBio;
  