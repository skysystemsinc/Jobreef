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
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot, BsPlusLg } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";
import white_edit from "@/assets/Images/white-edit.svg";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "@/Reudx/slices/jobPost";
import NextPrevBtn from "./NextPrevBtn";

const DesiredSkills = ({ disableNextPrev, style, prevStep, nextStep }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const jobState = useSelector((state) => state.jobPost.value);
  const [formData, setFormData] = useState(jobState);

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
    if (formData.desiredSkills === "") {
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
    <Box sx={style}>
      <Box>
        <LabelInput
          state={formData.desiredSkills}
          setState={handleChange}
          name={"desiredSkills"}
          readOnly={false}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Desired Skills"
          label={"Desired Skills"}
        />
      </Box>
      {disableNextPrev ? null : (
        <Box mt={{ md: "100px", base: "40px" }}>
          <NextPrevBtn handleNext={handleSave} handlePrev={prevStep} />
        </Box>
      )}
    </Box>
  );
};

export default DesiredSkills;
