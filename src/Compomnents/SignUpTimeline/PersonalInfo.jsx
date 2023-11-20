import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import { Role_context } from "@/context/context";
import globalStyles from "@/styles/globalStyles";
import { useSteps } from "chakra-ui-steps";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { setAuthentication } from "@/Reudx/slices/authentication";

const PersonalInfo = ({
  handlePrevious,
  State,
  setState,
  activeStep,
  nextStep,
}) => {
  const toast = useToast();
  const dispatch = useDispatch();
const [isCompany, setisCompany] = useState( )
  const { company, setCompany } = useContext(Role_context);
  const handleSelectCompany = (e) => {
    // dispatch(
    //   setAuthentication({
    //     isCompany: e.target.checked,
    //   })
    // );
    setCompany(e.target.checked);
    localStorage.setItem("company", e.target.checked);
  };
  const handleNext = () => {
    validation();
  };
  const validation = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Example usage:
    const isValidEmail = emailPattern.test(State.email);
    if (State.name == "" || State.lastName == "" || State.email == "") {
      toast({
        position: globalStyles.toastStyle.position,
        title: `Required fields are empty`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    if (!isValidEmail) {
      toast({
        position: globalStyles.toastStyle.position,
        title: `Email is invalid`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    nextStep();
  };
  return (
    <Box>
      <Box marginBottom={{ sm: "25px", base: "22px" }}>
        <LabelInput
          state={State.name}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter First Name"
          label={"First Name"}
        />
      </Box>

      <Box marginBottom={{ sm: "25px", base: "22px" }}>
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
          placeholder="Enter Last Name"
          label={"Last Name"}
        />
      </Box>

      <Box marginBottom={{ sm: "10px", base: "10px" }}>
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
          placeholder="Enter  Email"
          label={"Email"}
        />
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <Checkbox
          borderRadius={"10px"}
          onChange={handleSelectCompany}
          checked={company}
          size="md"
          defaultChecked
          colorScheme="blue"
          // border={"1px solid "}
          borderColor={company ? "blue.500" : "gray.text"}
          rounded={"sm"}
          sx={globalStyles.checkBoxStyle}
        />
        <Heading
          variant={"p1"}
          color={company ? "blue.500" : "gray.text"}
          margin={"0px"}
        >
          Register as Employer{" "}
        </Heading>
      </Box>

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "43px" }}
        pb={"30px"}
        gap={4}
      >
        <Button
          isDisabled={activeStep === 0}
          onClick={handlePrevious}
          variant="outline-blue"
        >
          {" Back"}
        </Button>
        <Button
          // width={{ md: "200px", sm: "180px", base: "130px" }}
          variant={"blue-btn"}
          onClick={handleNext}
        >
          {State.loading ? <Loader /> : "Next"}
        </Button>
      </Flex>
    </Box>
  );
};

export default PersonalInfo;
