import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { BACKEND_URL } from "@/Utils/urls";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { employee } from "@/schema/stateSchema";
import { httpRequest } from "@/helper/httpRrequest";
import { addEmployee } from "@/Reudx/slices/employee";
import { post, put } from "@/helper/fetch";

const Overview = ({ nextStep, activeStep, prevStep }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authentication.value);
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [state, setState] = useState({ ...employeeState });
  const [loading, setLoading] = useState(false);
  const handleRegister = () => {
    if (
      state.country === "" ||
      state.province === "" ||
      state.city === "" ||
      state.number === "" ||
      state.description === ""
    ) {
      toast({
        position: "bottom-right",
        title: "Required fields are empty",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    try {
      if (employeeState.id) {
        handleUpdateEmployee();
      } else {
        handleCreateEmployee();
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
  const handleUserAssociation = (employeeId) => {
    const role = isAuthenticated.role;
    const id = isAuthenticated.userId;
    try {
      const body = {
        role: role,
        phoneNumber: parseInt(state.number),

        location: [
          {
            country: state.country,
            province: state.province,
            city: state.city,
            // address: state.address,
          },
        ],
        ["employeeId"]: employeeId,
      };
      const userAssociation = httpRequest(
        `${BACKEND_URL}${endPoints.user}/${id}`,
        "PUT",
        body
      );

      if (userAssociation) {
        setLoading(false);
        // router.push("/company/profile-setting");
        nextStep();
      }
    } catch (err) {
      console.log("user error ", err);
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
  const handleCreateEmployee = async () => {
    const body = {
      // phoneNumber: parseInt(state.number),
      summary: state.description,
      workExperience: [],
      education: [],
      certification: [],
      skills: [],
      achievement: {},
      attachment: {},
    };
    const postData = await post(`${endPoints.employee}`, body);
    console.log("postData",postData)
    handleUserAssociation(postData.data.id);

    dispatch(addEmployee({ ...state, id: postData.data.id }));
  };
  const handleUpdateEmployee = async () => {
    const body = {
      phoneNumber: parseInt(state.number),
      summary: state.description,
    };
    const postData = await put(
      `${endPoints.employee}/${employeeState.id}`,
      body
    );
    handleUserAssociation(postData.data.id);

    dispatch(addEmployee({ ...state }));
  };
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={state.country}
          setState={handleChange}
          labelVariant={"label"}
          name={"country"}
          type="text"
          variant={"bg-input"}
          placeholder="Select your home country"
          dropdown
          label={"Country"}
        />

        <LabelInput
          state={state.province}
          setState={handleChange}
          labelVariant={"label"}
          name={"province"}
          dropdown
          type="text"
          variant={"bg-input"}
          placeholder="Select your state / province"
          label={"State / Province"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={state.city}
          setState={handleChange}
          name={"city"}
          labelVariant={"label"}
          type="text"
          dropdow
          variant={"bg-input"}
          placeholder="Enter City"
          label={"City"}
        />
        <LabelInput
          state={state.number}
          setState={handleChange}
          name={"number"}
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
          setState={handleChange}
          name={"description"}
          labelVariant={"label"}
          textarea
          variant={"bg-teaxtarea"}
          placeholder="Describe yourself for your employers"
          label={"Summary"}
        />
      </InputWrapper>

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "3px" }}
        pb={"30px"}
        gap={4}
      >
        <>
          <Button
            isDisabled={activeStep === 0}
            onClick={() => {
              prevStep();
            }}
            variant="outline-blue"
          >
            {" Back"}
          </Button>
          <Button variant={"blue-btn"} onClick={handleRegister}>
            {loading ? <Loader /> : "Next"}
          </Button>
        </>
      </Flex>
    </Box>
  );
};

export default Overview;
