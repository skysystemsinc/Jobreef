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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import UploadBox from "../UploadBox/UploadBox";
import CompanyLogoPreview from "../CompanyLogoPreview/CompanyLogoPreview";
import Loader from "../Loader/Loader";
import globalStyles from "@/styles/globalStyles";
import endPoints from "@/Utils/endpoints";
import axios from "axios";
import { BACKEND_URL } from "@/Utils/urls";
import { company } from "@/schema/stateSchema";
import { useDispatch, useSelector } from "react-redux";
import { addCompany } from "@/Reudx/slices/company";

const CompanyBio = ({ nextStep, State, setState }) => {
  const toast = useToast();
  const companyState = useSelector((state) => state.companyRegister.value);
  const dispatch = useDispatch()

  const [companyBio, setCompanyBio] = useState(companyState);
  const list = [
    "Please upload logo in minimum 200x200 resolution",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
  ];

  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected file
      setCompanyBio((prev) => {
        return {
          ...prev,
          logo: imageURL,
        };
      });
    }
  };

  const handleNext = () => {
    // if (
    //   companyBio.companyName === "" ||
    //   companyBio.directory === "" ||
    //   companyBio.description === "" ||
    //   companyBio.logo === false
    // ) {
    //   toast({
    //     position: globalStyles.toastStyle.position,
    //     title: `Required fields are empty`,
    //     status: "error",
    //     variant: "subtle",
    //     isClosable: true,
    //   });
    //   return;
    // }
    // dispatch(addCompany(companyBio))
    nextStep();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCompanyBio((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={companyBio.companyName}
          setState={handleChange}
          name={"companyName"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Name"
          label={"Company Name*"}
        />
        <LabelInput
          dropdown
          state={companyBio.industry}
          setState={handleChange}
          name={"industry"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Industry"
          label={"Industry"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={companyBio.directory}
          setState={handleChange}
          name={"directory"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdown
          placeholder="Select Option"
          label={"Listed in Directory*"}
        />
        <LabelInput
          state={companyBio.noOfEmployees}
          setState={handleChange}
          name={"noOfEmployees"}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter Number of Employees"
          label={"Number of Employees"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={companyBio.yearEstablished}
          setState={handleChange}
          name={"yearEstablished"}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter Year in Numbers"
          label={"Year Established"}
        />
        <LabelInput
          state={companyBio.webLink}
          setState={handleChange}
          name={"webLink"}
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
          state={companyBio.description}
          setState={handleChange}
          name={"description"}
          labelVariant={"label"}
          textarea
          
          variant={"bg-teaxtarea"}
          placeholder="Describe Your Company..."
          label={"Description*"}
        />
      </InputWrapper>
      {companyBio?.logo ? (
        <CompanyLogoPreview logo={companyBio.logo} />
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

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "40px", base: "14px" }}
        mb={"30px"}
        gap={4}
      >
        <Button
          // width={{ "2xl": "200px", md: "140px", sm: "120px", base: "100px" }}
          variant={"blue-btn"}
          onClick={handleNext}
        >
          {"Next"}
        </Button>
      </Flex>
    </Box>
  );
};

export default CompanyBio;
