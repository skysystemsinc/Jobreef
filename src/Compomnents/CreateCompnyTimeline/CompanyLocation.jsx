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
import Loader from "../Loader/Loader";
import globalStyles from "@/styles/globalStyles";
import { company } from "@/schema/stateSchema";
import { useDispatch, useSelector } from "react-redux";
import { addCompany } from "@/Reudx/slices/company";

const CompanyLocation = ({ nextStep, handlePrevious, State, setState }) => {
  const toast = useToast();
  const dispatch = useDispatch()
  const companyState = useSelector((state) => state.companyRegister.value);

  
  const [companyLocation, setCompanyLocation] = useState(companyState);
  const handleNext = () => {
    if (
      companyLocation.country === "" ||
      companyLocation.province === "" ||
      companyLocation.city === "" ||
      companyLocation.address === ""
    ) {
      toast({
        position: globalStyles.toastStyle.position,
        title: `Required fields are empty`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    dispatch(addCompany(companyLocation))
    nextStep();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCompanyLocation((prev) => {
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
          state={companyLocation.country}
          setState={handleChange}
          name={"country"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Country"
          dropdown
          label={"Country*"}
        />
        <LabelInput
          state={companyLocation.province}
          setState={handleChange}
          name={"province"}
          dropdown
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select State/Province"
          label={"State/Province"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={companyLocation.city}
          setState={handleChange}
          name={"city"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter City"
          label={"City"}
        />
        <LabelInput
          state={companyLocation.address}
          setState={handleChange}
          name={"address"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Street Address"
          label={"Street Address"}
        />
      </InputWrapper>
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "43px" }}
        pb={"30px"}
        gap={4}
      >
        <Button onClick={handlePrevious} variant="outline-blue">
          {" Back"}
        </Button>
        <Button
          // width={{ md: "200px", sm: "180px", base: "130px" }}
          variant={"blue-btn"}
          onClick={handleNext}
        >
          { "Next"}
        </Button>
      </Flex>
    </Box>
  );
};

export default CompanyLocation;
