import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormLabel,
  Heading,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import white_edit from "@/assets/Images/white-edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import { roles } from "@/Utils/role";
import EditProifle from "../EditProifle/EditProifle";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import { useSelector } from "react-redux";
import {  put } from "@/helper/fetch";
import Loader from "../Loader/Loader";
import endPoints from "@/Utils/endpoints";
const Preferences = () => {
  const toast = useToast();
  const dropDownOptions = [
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
  ];
  const loginUser = useSelector((state) => state.LoginUser.value);

  const [formData, setFormData] = useState({
    ...loginUser.emailPreferences,
  });
  console.log("formData", formData);

  const [state, setState] = useState({
    readOnly: true,
    isEdit: false,
    loading: false,
  });

  const handleChange = (e) => {
    console.log("e", e);
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: { label: value == "true" ? "Yes" : "No", value },
      };
    });
  };

  const handleCancel = () => {
    setState((prev) => {
      return {
        ...prev,
        isEdit: false,
        readOnly: true,
      };
    });
  };
  const handleEdit = () => {
    setState((prev) => {
      return {
        ...prev,
        isEdit: true,
        readOnly: false,
      };
    });
  };
  const handleSave = async () => {
    if (state.loading) return;
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });

    const body = {
      jobUpdates: !!formData.jobUpdates.value,
      messageThread: !!formData.messageThread.value,
      insightfulTips: !!formData.insightfulTips.value,
      promoNewsletter: !!formData.promoNewsletter.value,
    };
    try {
      const id = localStorage.getItem("id");
      const postData = await put(
        `${endPoints.emailPreferences}/${id}`,

        body
      );
      if (postData.success) {
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            readOnly: true,
            isEdit: false,
          };
        });
      }
      toast({
        position: "bottom-right",
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (error) {
      setState((prev) => {
        return {
          ...prev,
          loading: false,
          isEdit: false,
          readOnly: true,
        };
      });
    }
  };

  useSkipInitialEffect(() => {
    if (loginUser) {
      setFormData(loginUser.emailPreferences);
    }
  }, [loginUser]);
  return (
    // <></>
    <Box minH={"58vh"}>
      <Box mt={{ md: "60px", base: "30px" }}>
        <Heading
          mb={{ md: "70px", base: "40px" }}
          variant={"p7"}
          color={"gray.text"}
        >
          Receive Email Communications For:
        </Heading>
        <InputWrapper gap={{ xl: "70px", "2xl": "142px", base: "20px" }}>
          <LabelInput
            state={formData?.jobUpdates?.label}
            setState={handleChange}
            labelVariant={"label"}
            type="text"
            name={"jobUpdates"}
            readOnly={state.readOnly}
            dropdownOption={dropDownOptions}
            variant={"bg-input"}
            placeholder="Yes/No"
            dropdown={state.readOnly ? false : true}
            label={"Job application updates"}
          />
          <LabelInput
            labelVariant={"label"}
            readOnly={state.readOnly}
            dropdownOption={dropDownOptions}
            state={formData?.messageThread?.label}
            name={"messageThread"}
            setState={handleChange}
            dropdown={state.readOnly ? false : true}
            type="text"
            variant={"bg-input"}
            placeholder="Yes/No"
            label={"New messages and replies"}
          />
        </InputWrapper>

        <InputWrapper gap={{ xl: "70px", "2xl": "142px", base: "20px" }}>
          <LabelInput
            dropdownOption={dropDownOptions}
            state={formData?.insightfulTips?.label}
            setState={handleChange}
            name={"insightfulTips"}
            dropdown={state.readOnly ? false : true}
            labelVariant={"label"}
            type="text"
            readOnly={state.readOnly}
            variant={"bg-input"}
            placeholder=" Yes/No"
            label={"Recommendations and insights"}
          />

          <LabelInput
            dropdownOption={dropDownOptions}
            state={formData?.promoNewsletter?.label}
            setState={handleChange}
            name={"promoNewsletter"}
            dropdown={state.readOnly ? false : true}
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Yes/No"
            label={" Newsletter and promotions"}
          />
        </InputWrapper>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={{ md: "20px", base: "10px" }}
        // my={{ md: "96px", base: "20px" }}
        mt={{ md: "90px", base: "60px" }}
        mb={"30px"}
        pb={"39px"}
      >
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
      </Box>
    </Box>
  );
};

export default Preferences;
