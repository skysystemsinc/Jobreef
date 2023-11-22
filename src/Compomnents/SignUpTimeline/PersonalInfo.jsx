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
import { useDispatch, useSelector } from "react-redux";

import { addUser } from "@/Reudx/slices/userRegistration";
import { registration } from "@/schema/stateSchema";
import CheckBox from "../CheckBox/CheckBox";
const PersonalInfo = ({
  handlePrevious,
  activeStep,
  nextStep,
}) => {
  
  const toast = useToast();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userRegistration.value);

  const [personalInfo, setPersonalInfo] = useState(userState);
  const handleSelectCompany = (e) => {
    dispatch(
      addUser({
        ...registration,
        isCompany: e.target.checked,
      })
    );

    setPersonalInfo((prev) => {
      return {
        ...prev,
        isCompany: e.target.checked,
      };
    });
  };
  const handleNext = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailPattern.test(personalInfo.email);
    if (
      personalInfo.firstName == "" ||
      personalInfo.lastName == "" ||
      personalInfo.email == ""
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
    dispatch(addUser({ ...personalInfo }));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonalInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Box>
      <Box marginBottom={{ sm: "25px", base: "22px" }}>
        <LabelInput
          state={personalInfo.firstName}
          name={"firstName"}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter First Name"
          label={"First Name"}
        />
      </Box>

      <Box marginBottom={{ sm: "25px", base: "22px" }}>
        <LabelInput
          state={personalInfo.lastName}
          name={"lastName"}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Last Name"
          label={"Last Name"}
        />
      </Box>

      <Box marginBottom={{ sm: "10px", base: "10px" }}>
        <LabelInput
          state={personalInfo.email}
          name={"email"}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter  Email"
          label={"Email"}
        />
      </Box>
      <CheckBox
        selectSate={personalInfo.isCompany}
        label={"Register as Employer"}
        handleEvent={handleSelectCompany}
      />
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
          {"Next"}
        </Button>
      </Flex>
    </Box>
  );
};

export default PersonalInfo;
