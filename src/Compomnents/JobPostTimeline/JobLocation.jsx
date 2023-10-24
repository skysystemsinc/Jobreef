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

const JobLocation = ({ state, setState }) => {
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={state.country}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, country: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Country"
          dropdown
          label={"Country*"}
        />
        <LabelInput
          state={state.state}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, state: e.target.value };
            });
          }}
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
          state={state.city}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, city: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter City"
          label={"City"}
        />
        <LabelInput
          state={state.streetAddress}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, streetAddress: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Street Address"
          label={"Street Address"}
        />
      </InputWrapper>
    </Box>
  );
};

export default JobLocation;
