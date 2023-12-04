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
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";

import IconButton from "../IconButton/IconButton";
import white_edit from "@/assets/Images/white-edit.svg";
import { useSelector } from "react-redux";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { put } from "@/helper/fetch";
import Loader from "../Loader/Loader";

const CompanyLocation = () => {
  const toast = useToast()
  const companyState = useSelector((state) => state.companyRegister.value);
  console.log("companyState", companyState);

  const [state, setState] = useState({
    isEdit: false,
    readOnly: true,
  });
  const [formData, setFormData] = useState(
    companyState?.location && companyState?.location[0]
  );
  console.log("formData",formData)
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
      location: [{...formData}],
    };
    delete body.id;
    try {
      const postData = await put(
        `${endPoints.company}/${companyState.id}`,

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
  useSkipInitialEffect(() => {
    if (companyState) {
      setFormData(companyState?.location && companyState?.location[0]);
    }
  }, [companyState]);
  return (
    <Box mt={{ md: "50px", base: "10px" }}>
      <InputWrapper>
        <LabelInput
          state={formData?.country}
          setState={handleChange}
          name={"country"}
          readOnly={state.readOnly}
          dropdown={state.readOnly ? false : true}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Country"
          label={"Country*"}
        />
        <LabelInput
          state={formData?.province}
          setState={handleChange}
          name={"province"}
          dropdown={state.readOnly ? false : true}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select State/Province"
          label={"State/Province"}
          readOnly={state.readOnly}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={formData?.city}
          setState={handleChange}
          name={"city"}
          labelVariant={"label"}
          type="text"
          readOnly={state.readOnly}
          variant={"bg-input"}
          placeholder="Enter City"
          label={"Enter City"}
        />
        <LabelInput
          state={formData?.address}
          setState={handleChange}
          name={"address"}
          readOnly={state.readOnly}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Street Address"
          label={"Street Address"}
        />
      </InputWrapper>

      {state.isEdit ? (
        <Flex
          gap={"20px"}
          mt={{ md: "122px", base: "60px" }}
          mb={"70px"}
          justifyContent={"center"}
        >
          <Button onClick={handleCancel} variant="outline-blue">
            Cancel
          </Button>
          <Button onClick={handleSave} variant={"blue-btn"}>
            {state.loading ? <Loader /> : " Save"}
          </Button>
        </Flex>
      ) : (
        <Flex
          gap={"20px"}
          mt={{ md: "82px", base: "50px" }}
          mb={"70px"}
          justifyContent={"center"}
        >
          <IconButton
            variant={"blue-btn"}
            iconSize="18px"
            btnLabel={"Edit"}
            handleEvent={handleEdit}
            icon={white_edit}
          />
        </Flex>
      )}
    </Box>
  );
};

export default CompanyLocation;
