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
import { addJob } from "@/Reudx/slices/jobPost";

const JobLocation = ({ disableNextPrev, prevStep, nextStep }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const jobState = useSelector((state) => state.jobPost.value);
  const [formData, setFormData] = useState({...jobState,...jobState.location});
  console.log("formData",formData);
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
      formData.country === "" ||
      formData.province === "" ||
      formData.address === "" ||
      formData.city === ""
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
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={formData.country}
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
          state={formData.province}
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
          state={formData.city}
          setState={handleChange}
          name={"city"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter City"
          label={"City"}
        />
        <LabelInput
          state={formData.address}
          setState={handleChange}
          name={"address"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Street Address"
          label={"Street Address"}
        />
      </InputWrapper>
      {disableNextPrev ? null : (
        <NextPrevBtn handleNext={handleSave} handlePrev={prevStep} />
      )}
    </Box>
  );
};

export default JobLocation;
