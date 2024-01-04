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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import axios from "axios";
import { useRouter } from "next/router";
import globalStyles from "@/styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeamMember,
  getSingleMember,
  getTeamMembers,
} from "@/Redux/slices/teamMembers";
import { post, put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import Loader from "../Loader/Loader";
import { role, roles } from "@/Utils/constant";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";

const AddMemebersForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.companyRegister.value);

  const toast = useToast();
  const [state, setState] = useState({
    loading: false,
  });
  const userState = useSelector((state) => state.teamMembers.value.allMembers);
  const formDataState = useSelector(
    (state) => state.teamMembers.value.formData
  );
  console.log("formDataState", formDataState);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  console.log("role", formData.role);
  const handleSend = async () => {
    try {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValidEmail = emailPattern.test(formData.email);
      if (
        formData.firstName == "" ||
        formData.lastName == "" ||
        formData.email == "" ||
        formData.role == ""
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
      setState({ ...state, loading: true });
      // handleCreateUser();

      if (id) {
        console.log("formDataState.id", id);
        handleUpdateUser();
      } else {
        console.log("else", id);

        handleCreateUser();
      }
    } catch (error) {}
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleCreateUser = async () => {
    const postData = await post(`${endPoints.user}`, {
      ...formData,
      companyId: companyState.id,
      role: formData.role,
    });
    setState((prev) => {
      return {
        ...prev,
        loading: false,
      };
    });
    dispatch(addTeamMember({ ...formData }));
    if (userState.length) {
      dispatch(getTeamMembers([...userState, postData.data]));
    } else {
      dispatch(getTeamMembers([postData.data]));
    }
    setState({ ...state, loading: false });

    router.push("/company/team-members");
    toast({
      position: "bottom-right",
      title: postData.message,
      // status: "error",
      status: postData.success ? "success" : "error",
      variant: "subtle",
      isClosable: true,
    });
  };
  const handleUpdateUser = async () => {
    delete formData?.id;

    const postData = await put(`${endPoints.user}/${id}`, formData);
    setState((prev) => {
      return {
        ...prev,
        loading: false,
      };
    });

    dispatch(addTeamMember({ ...formData }));
    if (userState) {
      dispatch(
        getTeamMembers([
          ...userState?.map((item) =>
            item.id === postData.data.id ? postData.data : item
          ),
        ])
      );
    }
    router.push("/company/team-members");

    toast({
      position: "bottom-right",
      title: postData.message,
      status: postData.success ? "success" : "error",
      variant: "subtle",
      isClosable: true,
    });
  };
  const handleCancel = () => {
    router.push("/company/team-members");
  };

  const roleDropdown = [
    { label: "Company Administrator", value: roles.company },
    { label: "Recruiter", value: roles.recruiter },
  ];

  useEffect(() => {
    if (formDataState) {
      setFormData(formDataState);
    }
  }, [formDataState]);
  useEffect(() => {
    if (!formDataState && id) {
      dispatch(getSingleMember(id));
    }
  }, [id]);

  return (
    <Box minHeight={"82vh"} width={{ md: "70%", base: "100%" }} px={"10px"}>
      <Heading
        textAlign={"center"}
        m={{ md: "42px 0px 40px 0px", base: "0px 0px 30px 0px" }}
        variant={"p6"}
      >
        {id ? "Update" : " Add"} Team Member
      </Heading>
      <InputWrapper>
        <LabelInput
          state={formData.firstName}
          name={"firstName"}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter First Name "
          label={"First Name*"}
        />
        <LabelInput
          state={formData.lastName}
          name={"lastName"}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Last Name "
          label={"Last Name*"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={formData.email}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          name={"email"}
          variant={"bg-input"}
          placeholder="Enter Employee Email Address"
          label={"Email*"}
        />
        <LabelInput
          dropdown
          dropdownOption={roleDropdown}
          state={formData.role}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          name={"role"}
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
        <Button onClick={handleCancel} variant="outline-blue">
          Cancel
        </Button>
        <Button
          onClick={handleSend}
          width={"max-content"}
          px={{ md: "35px", base: "20px" }}
          variant={"blue-btn"}
        >
          {state.loading ? (
            <Loader />
          ) : id ? (
            "Update member"
          ) : (
            "Send Invitation"
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default AddMemebersForm;
