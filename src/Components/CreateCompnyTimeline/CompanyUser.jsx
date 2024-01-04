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
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot, BsPlusLg } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";
import white_edit from "@/assets/Images/white-edit.svg";
import CustomMultiSelect from "../MultiSelect/MultiSelect";
import { useRouter } from "next/router";

const CompanyUser = ({ prevStep }) => {
  const router = useRouter()
  const handleCreate = () => {
    router.push("/operator/companies");
  };
  return (
    <>
      <InputWrapper style={{ marginBottom: "15px" }} gap={"25px"}>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select the company owner"
          label={"Company Owner"}
          dropdown
        />
        <Box width={"100%"}>
          <CustomMultiSelect />
        </Box>
        {/* <LabelInput
        labelVariant={"label"}
        type="text"
        variant={"bg-input"}
        placeholder="Select the company employees"
        label={"Company Employees"}
        dropdown
      /> */}
      </InputWrapper>

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "53px", base: "43px" }}
        pb={"30px"}
        gap={4}
      >
        <Button onClick={prevStep} variant="outline-blue">{" Back"}</Button>
        <Button
          // width={{ md: "200px", sm: "180px", base: "130px" }}
          variant={"blue-btn"}
          onClick={handleCreate}
        >
          Create
        </Button>
      </Flex>
    </>
  );
};

export default CompanyUser;
