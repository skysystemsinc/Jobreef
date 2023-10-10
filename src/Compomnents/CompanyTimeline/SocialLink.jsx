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

const SocialLink = () => {
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Platform"
          dropdown
          label={"Social Links"}
        />
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Paste link to company social network page"
          label={"Url"}
        />
      </InputWrapper>
    </Box>
  );
};

export default SocialLink;
