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

const AddMemebersForm = () => {
  return (
    <Box minH={"70vh"} width={{ md: "70%", base: "100%" }}>
      <Heading
        textAlign={"center"}
        m={{ md: "42px 0px 40px 0px", base: "0px 0px 30px 0px" }}
        variant={"p6"}
      >
        Add Team Member
      </Heading>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter First Name "
          label={"First Name*"}
        />
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Last Name "
          label={"Last Name*"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Employee Email Address"
          label={"Email"}
        />
        <LabelInput
          dropdown
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Role of the Employee"
          label={"Role*"}
        />
      </InputWrapper>

      <Flex
        justifyContent={"center"}
        mt={{ md: "70px", base: "40px" }}
        mb={"75px"}
        gap={{ md: "21px", base: "13px" }}
      >
        <Button variant="outline-blue">Cancel</Button>
        <Button
          width={"max-content"}
          px={{ md: "35px", base: "20px" }}
          variant={"blue-btn"}
        >
          Send Invitation
        </Button>
      </Flex>
    </Box>
  );
};

export default AddMemebersForm;
