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
import React, { useContext } from "react";

import LabelInput from "../LabelInput/LabelInput";
import Loader from "../Loader/Loader";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { roles } from "@/Utils/role";
import { Role_context } from "@/context/context";
import { BACKEND_URL } from "@/Utils/urls";

const Password = ({
  State,
  setState,
  activeStep,
  handlePrevious,
  nextStep,
}) => {
  const { company } = useContext(Role_context);
  const toast = useToast();

  const handleNext = () => {
    handleRegister();
  };
  const handleRegister = async () => {
    if (State.confirmPassword == "" || State.password == "") {
      toast({
        position: "bottom-right",
        title: `Required fields are empty`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    if (State.confirmPassword != State.password) {
      toast({
        position: "bottom-right",
        title: `password does not match`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await axios({
        method: "POST",
        url: `${BACKEND_URL}${endPoints.user}`,
        data: {
          firstName: State.name,
          lastName: State.lastName,
          email: State.email,
          password: State.password,
          role: company ? roles.company : roles.employee,
        },
      });
      if (postData) {
        nextStep();

        setState((prev) => {
          return {
            ...prev,
            loading: false,
            name: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            email: "",
            showEmail: postData.data.data.email,
            userId: postData.data.data.id,
          };
        });
      } else {
      }
    } catch (err) {
      const errorMessage = err?.response?.data.message;
      console.log("errr", err);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",

        title: errorMessage,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  return (
    <Box>
      <Box marginBottom={{ sm: "25px", base: "25px" }}>
        <LabelInput
          state={State.password}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          passworInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter your Password"
          label={"Enter Password"}
        />
      </Box>

      <Box marginBottom={{ sm: "22px", base: "22px" }}>
        <LabelInput
          state={State.confirmPassword}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, confirmPassword: e.target.value };
            });
          }}
          passworInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Re-enter your Password"
          label={"Confirm Password"}
        />
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

export default Password;
