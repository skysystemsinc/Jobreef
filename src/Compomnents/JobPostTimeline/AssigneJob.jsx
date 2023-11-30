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

const AssignJob = ({ style, state, setState }) => {
  return (
    <Box mb={"30px"}>
      <LabelInput
        
        labelVariant={"label"}
        type="text"
        variant={"bg-input"}
        placeholder="Select the company"
        label={"Company"}
        dropdown
      />
    </Box>
  );
};

export default AssignJob;
