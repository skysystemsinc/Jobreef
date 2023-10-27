import { Box } from "@chakra-ui/react";
import React from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";

const Overview = ({ state, setState }) => {
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
          placeholder="Select your home country"
          label={"Country"}
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
          placeholder="Select your state / province"
          label={"State / Province"}
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
          dropdow
          variant={"bg-input"}
          placeholder="Enter City"
          label={"City"}
        />
        <LabelInput
          state={state.number}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, number: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter your phone number"
          label={"Phone Number"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={state.description}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
          labelVariant={"label"}
          textarea
          variant={"bg-teaxtarea"}
          placeholder="Describe yourself for your emoployers"
          label={"Summary"}
        />
      </InputWrapper>
    </Box>
  );
};

export default Overview;
