import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import React from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { BACKEND_URL } from "@/Utils/urls";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const Overview = ({ nextStep, activeStep, prevStep, state, setState }) => {
  const isAuthenticated = useSelector((state) => state.authentication.value);
  const toast = useToast();

  const handleRegister = async () => {
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
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await axios({
        method: "POST",
        url: `${BACKEND_URL}${endPoints.employee}`,
        data: {
          phoneNumber: parseInt(state.number),
          summary: state.description,
          workExperience: [],
          education: [],
          certification: [],
          skills: [],
          achievement: {},
          attachment: {},
        },
      });
      if (postData) {
        handleUserAssociation(postData.data.data.id);
        // console.log("postData", postData);
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
  const handleUserAssociation = (employeeId) => {
    const role = isAuthenticated.role;
    const id = isAuthenticated.userId;
    try {
      const userAssociation = axios({
        method: "PUT",
        url: `${BACKEND_URL}${endPoints.user}/${id}`,
        data: {
          role: role,
          location: [
            {
              country: state.country,
              province: state.province,
              city: state.city,
              // address: state.address,
            },
          ],
          ["employeeId"]: employeeId,
        },
      });
      if (userAssociation) {
        setState((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
        // router.push("/company/profile-setting");
        nextStep();
      }
    } catch (err) {
      console.log("user error ", err);
    }
  };
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
          dropdown
          label={"Country"}
        />

        <LabelInput
          state={state.province}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, province: e.target.value };
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
            {state.loading ? <Loader /> : "Next"}
          </Button>
        </>
      </Flex>
    </Box>
  );
};

export default Overview;
