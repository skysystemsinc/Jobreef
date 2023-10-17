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
  
  const TechnicalDetails = () => {
    return (
      <Box>
        <InputWrapper>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the number of openings for this job"
            label={"Number of Openings"}
          />
          <LabelInput
            
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the education level desired for this job"
            label={"Minimum Education"}
          />
        </InputWrapper>
  
        <InputWrapper>
          <LabelInput
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            
            placeholder="Enter the years of experience desired for this job"
            label={"Years of Experience"}
          />
          <LabelInput
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
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            dropdown
            placeholder="Select salary type for this job"
            label={"Salary Type"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            
            placeholder="Enter the salary range for this job"
            label={"Salary Range"}
          />
        </InputWrapper>
        
        <InputWrapper>
          <LabelInput
            labelVariant={"label"}
            textarea
            variant={"bg-teaxtarea"}
            placeholder="Enter the benefits associated with this job in detail for candidates"
            label={"Benefits"}
          />
        </InputWrapper>
        
      </Box>
    );
  };
  
  export default TechnicalDetails;
  