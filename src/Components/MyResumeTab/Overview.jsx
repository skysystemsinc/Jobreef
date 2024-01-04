import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import white_edit from "@/assets/Images/white-edit.svg";
import { useDispatch, useSelector } from "react-redux";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import Loader from "../Loader/Loader";
import { put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { addEmployee } from "@/Redux/slices/employee";

const Overview = ({ setTabIndex, tabIndex }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );

  const [formData, setFormData] = useState({
    ...employeeState,
  });

  const [state, setState] = useState({
    readOnly: true,
    isEdit: false,
    loading: false,
  });
  const router = useRouter();
  const handleChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    if (employeeState) {
      setFormData({
        ...employeeState,
        ...employeeState?.location,
      });
    }
  }, [employeeState]);
  const handleEdit = () => {
    setState({ ...state, readOnly: false, isEdit: true });
  };
  const handleCancel = () => {
    setState({ ...state, readOnly: false, edit: true });
  };
  const handleSave = async () => {
    if (state.loading) return;
    setState({ ...state, loading: true });
    const isValid = Object.values(formData).some((value) => value === "");
    if (isValid) {
      toast({
        position: "bottom-right",
        title: " required fields are empty",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setState({ ...state, loading: true });

    const body = {
      description: formData.description,
      phoneNumber: parseInt(formData.phoneNumber),
      location: {
        country: formData.country,
        province: formData.province,
        city: formData.city,
        address: formData.address,
      },
    };

    try {
      const postData = await put(
        `${endPoints.employee}/${employeeState.id}`,
        body
      );
      if (postData.success) {
        setState({ ...state, loading: false, isEdit: false, readOnly: true });
        dispatch(
          addEmployee({
            ...postData.data,
          })
        );
      }
      toast({
        position: "bottom-right",
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (err) {
      console.log("err", err);
      setState({ ...state, loading: false });
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  return (
    <Box
      mt={{ md: "30px", base: "16px" }}
      mb={"40px"}
      width={{ lg: "60%", base: "100%" }}
    >
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={formData.country}
            setState={handleChange}
            name={"country"}
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            dropdown={state.readOnly ? false : true}
            variant={"bg-input"}
            placeholder="Select your home country"
            label={"Country"}
          />
          <LabelInput
            state={formData.province}
            setState={handleChange}
            name={"province"}
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Select your state / province"
            label={"State / Province"}
            dropdown={state.readOnly ? false : true}
          />
        </InputWrapper>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={formData.city}
            setState={handleChange}
            name={"city"}
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            
            variant={"bg-input"}
            placeholder="Enter city"
            label={"City"}
          />
          <LabelInput
            state={formData.phoneNumber}
            setState={handleChange}
            name={"phoneNumber"}
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Phone Number"
            label={" Enter your phone number"}
            
          />
        </InputWrapper>
        <LabelInput
          textFormatter
          state={formData.description}
          setState={(e) => {
            setFormData((prev) => {
              return { ...prev, description: e };
            });
          }}
          name={"description"}
          labelVariant={"label"}
          readOnly={state.readOnly}
          type="text"
          variant={"bg-teaxtarea"}
          placeholder="Describe yourself for your employer"
          label={"Summary"}
        />
        

        <Flex mt="50px" justifyContent={"center"} gap={"30px"}>
          {state.isEdit ? (
            <>
              <Button onClick={handleCancel} variant="outline-blue">
                Cancel
              </Button>
              <Button onClick={handleSave} variant={"blue-btn"}>
                {state.loading ? <Loader /> : "Save"}
              </Button>
            </>
          ) : (
            <Button
              onClick={handleEdit}
              variant={"blue-btn"}
              display={"flex"}
              alignItems={"center"}
              gap={"7px"}
            >
              <Image mt={"3px"} src={white_edit.src} width={"18px"} />
              Edit
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Overview;
