import React, { useState } from "react";
import UploadBox from "../UploadBox/UploadBox";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import UploadedCard from "../UploadedCard/UploadedCard";
import dummy_resume from "@/assets/Images/dummy_resume.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { achievement } from "@/schema/stateSchema";
import { useDispatch, useSelector } from "react-redux";
import endPoints from "@/Utils/endpoints";
import { addEmployee } from "@/Reudx/slices/employee";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import Loader from "../Loader/Loader";
import { post, put } from "@/helper/fetch";

// import dummy_resume from "@/assets/pdf/dummy.pdf";
const AchievementForm = ({ state, setState, style, handleSaveAch }) => {
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const formDataState = useSelector(
    (state) => state.employeeRegister.value.formData
  );
  const toast = useToast();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(achievement);
  const [loading, setLoading] = useState(false);

  const list = [
    "The acceptable file formats are PDF, Word, PNG, and JPEG files",
    "This will be included in submitted job applications",
  ];

  const handleUpload = (event, key, index) => {
    //  = Array.from(event.target.files);
    const selectedFile = Array.from(event.target.files).map((file, index) => {
      return {
        name: file.name,
        url: "",
      };
      // console.log("file.name", file);
      // if (file) {
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     mediaArray.push({ name: file.name, url: e.target.result });
      //   };
      //   reader.readAsDataURL(file);
      // }
    });

    setFormData((prev) => {
      return {
        ...prev,
        media: [...formData.media, ...selectedFile],
        // certificateMedia: mediaArray,
      };
    });
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
  const handleSave = async () => {
    if (loading) return;
    const isValid = Object.values(formData).some((value) => value === "");

    if (isValid || formData.issuedOn == null) {
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

    const body = {
      ...formData,
      employeeId: employeeState.id,
    };
    try {
      const postData = await post(`${endPoints.achievement}`, body);
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, add: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            achievement: [...employeeState.achievement, postData.data],
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
    const isValid = Object.values(formData).some((value) => value === "");
    console.log("isValid", isValid);
    if (isValid || formData.issuedOn == null) {
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

    const body = {
      name: formData.name,
      issueOrganization: formData.issueOrganization,
      issuedOn: formData.issuedOn,
      media: formData.media,
    };

    try {
      const postData = await put(
        `${endPoints.achievement}/${formData.id}`,
        body
      );
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, edit: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            achievement: employeeState.achievement.map((item) =>
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

  useSkipInitialEffect(() => {
    if (formDataState) {
      setFormData({ ...formDataState });
    }
  }, [formDataState]);
  return (
    <Box minHeight={"59vh"}>
      <Box width={"100%"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            state={formData.name}
            setState={handleChange}
            name={"name"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your certificate"
            label={"Name of Achievement"}
          />
          <LabelInput
            labelVariant={"label"}
            state={formData.issueOrganization}
            setState={handleChange}
            name={"issueOrganization"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of issuing organization"
            label={"Issuing Organization"}
          />
        </InputWrapper>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <Box width={{ md: "49%", base: "100%" }}>
            <LabelInput
              labelVariant={"label"}
              state={formData.issuedOn}
              setState={(e) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    issuedOn: e,
                  };
                });
              }}
              name={"issuedOn"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Issued On"}
            />
          </Box>
        </InputWrapper>
      </Box>
      <UploadBox
        showSelectedImage={formData.media}
        handleEvent={handleUpload}
        list={list}
        titie={"Upload in Digital Format"}
      />

      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={{ md: "36px", base: "10px" }}
        mt={"50px"}
        pb={"39px"}
      >
        <Button onClick={handleCancel} variant="outline-blue">
          Cancel
        </Button>

        <Button
          onClick={formData.id ? handleUpdate : handleSave}
          variant={"blue-btn"}
        >
          {loading ? (
            <Loader />
          ) : state.edit ? (
            "Update   Awards"
          ) : (
            " Save  Awards"
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default AchievementForm;
