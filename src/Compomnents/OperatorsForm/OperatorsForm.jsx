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
  import React, { useState } from "react";
  import LabelInput from "../LabelInput/LabelInput";
  import InputWrapper from "../InputWrapper/InputWrapper";
  import axios from "axios";
  import { useRouter } from "next/router";
  
  const OperatorFrom = () => {
    const router = useRouter();
    const [State, setState] = useState({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    });
    const handleSend = async () => {
      try {
        router.push("/operator/operators");
      } catch (error) {}
    };
    const handleCancel = async () => {
      try {
        router.push("/operator/operators");
      } catch (error) {}
    };
  
    return (
      <Box
        minHeight={"82vh"}
        width={{ md: "70%", base: "100%" }}
        px={"10px"}
        mx={"auto"}
      >
        <Heading
          textAlign={"center"}
          m={{ md: "42px 0px 40px 0px", base: "0px 0px 30px 0px" }}
          variant={"p6"}
        >
          Create Operator
        </Heading>
        <InputWrapper>
          <LabelInput
            state={State.firstName}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, firstName: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter First Name "
            label={"First Name*"}
          />
          <LabelInput
            state={State.lastName}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, lastName: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Last Name "
            label={"Last Name*"}
          />
        </InputWrapper>
  
        <InputWrapper>
          <LabelInput
            state={State.email}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Employee Email Address"
            label={"Email*"}
          />
          <LabelInput
            dropdown
            state={State.role}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, role: e.target.value };
              });
            }}
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
          <Button
            px={{ md: "35px", base: "20px" }}
  
            onClick={handleCancel}
            width={"max-content"}
            variant="outline-blue"
          >
            Cancel
          </Button>
          <Button
            width={"max-content"}
            onClick={handleSend}
            
            px={{ md: "35px", base: "20px" }}
            variant={"blue-btn"}
          >
            Create
          </Button>
        </Flex>
      </Box>
    );
  };
  
  export default OperatorFrom;
  