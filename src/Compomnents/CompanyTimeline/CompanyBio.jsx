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
import UploadBox from "../UploadBox/UploadBox";
import CompanyLogoPreview from "../CompanyLogoPreview/CompanyLogoPreview";

const CompanyBio = ({ State, setState }) => {
  const list = [
    "Please upload logo in minimum 200x200 resolution",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
  ];

  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected file
      setState((prev) => {
        return {
          ...prev,
          logo: imageURL,
        };
      });
    }
  };
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={State.companyName}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, companyName: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Name"
          label={"Company Name*"}
        />
        <LabelInput
          dropdown
          state={State.industry}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, industry: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Industry"
          label={"Industry"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={State.directory}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, directory: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdown
          placeholder="Select Option"
          label={"Listed in Directory*"}
        />
        <LabelInput
          state={State.noOfEmployees}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, noOfEmployees: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter Number of Employees"
          label={"Number of Employees"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={State.yearEstablished}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, yearEstablished: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter Year in Numbers"
          label={"Year Established"}
        />
        <LabelInput
          state={State.webLink}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, webLink: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Website URL"
          // dropdown
          label={"Website"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={State.description}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
          labelVariant={"label"}
          textarea
          variant={"bg-teaxtarea"}
          placeholder="Describe Your Company..."
          label={"Description*"}
        />
      </InputWrapper>
      {State?.logo ? (
        <CompanyLogoPreview logo={State.logo} />
      ) : (
        <UploadBox
          style={{
            width: "100%",
            p: { md: "15px 10px 6px 5px", base: "15px 10px 6px 5px" },
          }}
          titie={"Upload Company Logo"}
          handleEvent={handleLogo}
          list={list}
        />
      )}

     
    </Box>
  );
};

export default CompanyBio;
