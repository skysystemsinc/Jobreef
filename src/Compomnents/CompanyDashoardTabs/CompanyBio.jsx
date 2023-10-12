import {
  Box,
  Button,
  Checkbox,
  Flex,
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
import UploadBox from "../UploadBox/UploadBox";

const CompanyBio = () => {
  const uploadList = [
    "Please upload logo in minimum 200x200 resolution",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
  ];
  return (
    <Box mt={"60px"}>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Name"
          label={"Company Name*"}
        />
        <LabelInput
          dropdown
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Industry"
          label={"Industry"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdown
          placeholder="Select Option"
          label={"Listed in Directory*"}
        />
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Number of Employees"
          label={"Number of Employees"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Year in Numbers"
          label={"Year Established*"}
        />
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Website URL"
          label={"Website"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          textarea
          variant={"bg-teaxtarea"}
          placeholder="Describe Your Company..."
          label={"Description*"}
        />
      </InputWrapper>

      <Box>
        <UploadBox list={uploadList} titie={"Upload Company Logo"} />
      </Box>

      <Flex gap={"20px"} mt={"50px"} mb={"70px"} justifyContent={"center"}>
        <Button variant="outline-blue">Cancel</Button>
        <Button variant={"blue-btn"}>Save</Button>
      </Flex>
    </Box>
  );
};

export default CompanyBio;
