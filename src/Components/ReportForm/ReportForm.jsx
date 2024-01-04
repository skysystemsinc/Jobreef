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
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import UploadBox from "../UploadBox/UploadBox";
import CompanyLogoPreview from "../CompanyLogoPreview/CompanyLogoPreview";
import Loader from "../Loader/Loader";
import globalStyles from "@/styles/globalStyles";
import endPoints from "@/Utils/endpoints";
import axios from "axios";
import { BACKEND_URL } from "@/Utils/urls";
import { company, directory, industryOptions } from "@/schema/stateSchema";
import { useDispatch, useSelector } from "react-redux";
import { addCompany } from "@/Redux/slices/company";
import { addAbuseReport } from "@/Redux/slices/abuseReports";

const ReportForm = ({setOpen}) => {
  const toast = useToast();
  const abuseReportStateState = useSelector(
    (state) => state.abuseReports.value
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(abuseReportStateState);

  const handleNext = () => {
    if (
      formData.companyName === "" ||
      formData.directory === "" ||
      formData.description === "" ||
      formData.logo === false
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
    setOpen(false)
    dispatch(addAbuseReport(formData));
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

  return (
    <Box width={{ md: "80%" }} mt={"10px"} mx={"auto"}>
      <InputWrapper>
        <LabelInput
          state={formData.reportId}
          setState={handleChange}
          name={"reportId"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Report ID"
          label={"Report ID"}
        />
        <LabelInput
          state={formData.abuseCategory}
          setState={handleChange}
          name={"abuseCategory"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Abuse Category"
          label={"Abuse Category"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={formData.contentType}
          setState={handleChange}
          name={"contentType"}
          labelVariant={"label"}
          type="text"
          //   dropdownOption={directory}
          variant={"bg-input"}
          dropdown
          placeholder="Select Content Type"
          label={"Content Type"}
        />
        <LabelInput
          state={formData.reportedOn}
          setState={(e) => setFormData((prev) => ({ ...prev, reportedOn: e }))}
          name={"reportedOn"}
          labelVariant={"label"}
          type="date"
          variant={"bg-input"}
          placeholder="Reported On"
          label={"Reported On"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={formData.status}
          setState={handleChange}
          name={"status"}
          labelVariant={"label"}
          dropdown
          variant={"bg-input"}
          placeholder="Select Status"
          label={"Status"}
        />
        <LabelInput
          state={formData.resolution}
          setState={handleChange}
          name={"resolution"}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select resolution action"
          dropdown
          label={"Resolution*"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={formData.description}
          setState={handleChange}
          name={"description"}
          labelVariant={"label"}
          textarea
          variant={"bg-teaxtarea"}
          placeholder="Enter Content"
          label={"Reported Content"}
          textAreaStyle={{ height: "220px" }}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={formData.operatorComments}
          setState={handleChange}
          name={"operatorComments"}
          labelVariant={"label"}
          textarea
          variant={"bg-teaxtarea"}
          placeholder="Enter comments about this report"
          label={"Operator Comments"}
          textAreaStyle={{ minHeight: "106px !important" }}

        />
      </InputWrapper>

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "17px", base: "14px" }}
        gap={4}
      >
        <Button variant={"outline-blue"} onClick={handleNext}>
          {"Cancel"}
        </Button>
        <Button variant={"blue-btn"} onClick={handleNext}>
          {"Save"}
        </Button>
      </Flex>
    </Box>
  );
};

export default ReportForm;
