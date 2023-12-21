import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Checkbox,
  FormLabel,
  Heading,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import endPoints from "@/Utils/endpoints";
import { addEmployee, setFormData } from "@/Redux/slices/employee";
import Loader from "../Loader/Loader";
import { post, put } from "@/helper/fetch";
const SkillsForm = ({
  setState,

  state,
}) => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();

  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const formData = useSelector(
    (state) => state.employeeRegister.value.formData
  );
  const [skills, setSkills] = useState({
    name: "",
    level: "",
  });
  const [loading, setLoading] = useState(false);
  console.log("formData", formData);
  useSkipInitialEffect(() => {
    if (formData) {
      setSkills({ ...formData });
    }
  }, [formData]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSkills((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const option = [
    {
      label: "beginner",
      value: "beginner",
    },
    {
      label: "intermediate",
      value: "intermediate",
    },
    {
      label: "proficient",
      value: "proficient",
    },
    {
      label: "expert",
      value: "expert",
    },
  ];

  const handleSave = async () => {
    //TODO add validation of date
    if (loading) return;
    const isValid = Object.values(skills).some((value) => value === "");

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
    setLoading(true);

    console.log("body", skills);
    try {
      const postData = await post(`${endPoints.skills}`, {
        ...skills,
        employeeId: employeeState.id,
      });
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, add: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            skills: [...employeeState.skills, postData.data],
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
      setLoading(false);
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

  const handleUpdate = async () => {
    //TODO add validation of date
    if (loading) return;
    const isValid = Object.values(skills).some((value) => value === "");
    console.log("isValid", isValid);
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
    setLoading(true);

    const body = {};

    try {
      const postData = await put(`${endPoints.skills}/${formData.id}`, skills);
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, edit: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            skills: employeeState.skills.map((item) =>
              item.id === postData.data.id ? postData.data : item
            ),
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
      setLoading(false);
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleCancel = () => {
    setState((prev) => {
      return { ...prev, add: false, edit: false };
    });
  };
  return (
    <Box
      minH={"60vh"}
      mt={{ md: "30px", base: "16px" }}
      width={{ lg: "60%", base: "100%" }}
    >
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            setState={handleChange}
            name={"name"}
            state={skills.name}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Name of skill"
            label={" Name"}
          />
          <LabelInput
            setState={handleChange}
            name={"level"}
            dropdownOption={option}
            state={skills.level}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Select level of your skill"
            dropdown
            label={"Level"}
          />
        </InputWrapper>

        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "40px", base: "10px" }}
          my={{ md: "56px", base: "20px" }}
          mt={"50px"}
          pb={"39px"}
        >
          <Button onClick={handleCancel} variant="outline-blue">
            Cancel
          </Button>

          <Button
            onClick={formData.id ? handleUpdate : handleSave}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            // width={"max-content"}
            // px={{ md: "30px", base: "20px" }}

            variant={"blue-btn"}
          >
            {loading ? <Loader /> : state.edit ? "Update Skill" : " Save Skill"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsForm;
