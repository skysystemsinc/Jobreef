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
import Loader from "../Loader/Loader";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { roles } from "@/Utils/role";
import { Role_context } from "@/context/context";
import { BACKEND_URL } from "@/Utils/urls";
import { useDispatch, useSelector } from "react-redux";
import { httpRequest } from "@/helper/httpRrequest";
import { addUser } from "@/Reudx/slices/userRegistration";

const Password = ({

  activeStep,
  handlePrevious,
  nextStep,
}) => {
  
  const userState = useSelector((state) => state.userRegistration.value);
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...userState, loading: false });
  const toast = useToast();

  const handleRegister = () => {
    if (state.confirmPassword == "" || state.password == "") {
      toast({
        position: "bottom-right",
        title: `Required fields are empty`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    if (state.confirmPassword != state.password) {
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
      if (userState.userId) {
        handleUpdateUser();
      } else {
        handleCreateUser();
      }
    } catch (err) {

      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCreateUser = async () => {
    const body = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      role: userState.isCompany ? roles.company : roles.employee,
    };
    const postData = await httpRequest(
      `${BACKEND_URL}${endPoints.user}`,
      "POST",
      body
    );
    setState((prev) => {
      return {
        ...prev,
        loading: false,
      };
    });
    if (!postData.success) {
    dispatch(addUser({ ...state, }));
      
      toast({
        position: "bottom-right",
        title: postData.message,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    nextStep();
    dispatch(addUser({ ...state, userId: postData.data.id }));

    // if (postData.success) {
    //   dispatch(addUser({ ...userState, userId: postData.data.id }));
    //   toast({
    //     position: "bottom-right",
    //     title: postData.message,
    //     status: "success",
    //     variant: "subtle",
    //     isClosable: true,
    //   });
    // } else {
    //   toast({
    //     position: "bottom-right",
    //     title: postData.message,
    //     status: "error",
    //     variant: "subtle",
    //     isClosable: true,
    //   });
    // }
  };
  const handleUpdateUser = async () => {
    const body = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      role: userState.isCompany ? roles.company : roles.employee,
    };
    const postData = await httpRequest(
      `${BACKEND_URL}${endPoints.user}/${userState.userId}`,
      "PUT",
      body
    );
    setState((prev) => {
      return {
        ...prev,
        loading: false,
      };
    });
    if (!postData.success) {
      dispatch(addUser({ ...userState, userId: postData.data.id }));
      toast({
        position: "bottom-right",
        title: postData.message,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    nextStep();
    dispatch(addUser({ ...state }));

    // if (postData.success) {
    //   toast({
    //     position: "bottom-right",
    //     title: postData.message,
    //     status: "success",
    //     variant: "subtle",
    //     isClosable: true,
    //   });
    // } else {
    //   toast({
    //     position: "bottom-right",
    //     title: postData.message,
    //     status: "error",
    //     variant: "subtle",
    //     isClosable: true,
    //   });
    // }
  };
  return (
    <Box>
      <Box marginBottom={{ sm: "25px", base: "25px" }}>
        <LabelInput
          state={state.password}
          setState={handleChange}
          name={"password"}
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
          state={state.confirmPassword}
          setState={handleChange}
          name={"confirmPassword"}
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
          onClick={handleRegister}
        >
          {state.loading ? <Loader /> : "Next"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Password;
