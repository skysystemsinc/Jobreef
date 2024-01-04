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
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import UploadBox from "../UploadBox/UploadBox";
import CompanyLogoPreview from "../CompanyLogoPreview/CompanyLogoPreview";
import IconButton from "../IconButton/IconButton";
import white_edit from "@/assets/Images/white-edit.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCompanyProfile } from "@/Redux/slices/companyProfile";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import endPoints from "@/Utils/endpoints";
import Loader from "../Loader/Loader";
import { put } from "@/helper/fetch";
import { directory, industryOptions } from "@/schema/stateSchema";

const CompanyBio = () => {
  const toast = useToast();
  const companyState = useSelector((state) => state.companyRegister.value);
  console.log("companyState", companyState);

  const [formData, setFormData] = useState(companyState);
  const [state, setState] = useState({
    isEdit: false,
    readOnly: true,
    loading: false,
  });

  const dispatch = useDispatch();

  const uploadList = [
    "Please upload logo in minimum 200x200 resolution",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
  ];

  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected file
      setFormData((prev) => {
        return {
          ...prev,
          logo: imageURL,
        };
      });
    }
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
      ...companyState,
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
    console.log("e", e);
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
      setFormData(companyState);
    }
  }, [companyState]);
  return (
    // <></>
    <Box mt={{ md: "50px", base: "10px" }}>
      <InputWrapper>
        <LabelInput
          state={formData.companyName}
          name={"companyName"}
          setState={handleChange}
          readOnly={state.readOnly}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Name"
          label={"Company Name*"}
        />
        <LabelInput
          defaultDropdown={industryOptions}
          state={formData.industry}
          name={"industry"}
          setState={handleChange}
          dropdown={state.readOnly ? false : true}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Industry"
          label={"Industry"}
          readOnly={state.readOnly}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={formData.directory}
          name={"directory"}
          defaultDropdown={directory}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          readOnly={state.readOnly}
          variant={"bg-input"}
          dropdown={state.readOnly ? false : true}
          placeholder="Select Option"
          label={"Listed in Directory*"}
        />
        <LabelInput
          state={formData.noOfEmployees}
          name={"noOfEmployees"}
          setState={handleChange}
          labelVariant={"label"}
          readOnly={state.readOnly}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Number of Employees"
          label={"Number of Employees"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={formData.yearEstablished}
          name={"yearEstablished"}
          setState={handleChange}
          labelVariant={"label"}
          readOnly={state.readOnly}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Year in Numbers"
          label={"Year Established"}
        />
        <LabelInput
          state={formData.webUrl}
          name={"webUrl"}
          setState={handleChange}
          labelVariant={"label"}
          type="text"
          readOnly={state.readOnly}
          variant={"bg-input"}
          placeholder="Enter Company Website URL"
          label={"Website"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={formData.telePhone}
          name={"telePhone"}
          setState={handleChange}
          labelVariant={"label"}
          readOnly={state.readOnly}
          type="number"
          variant={"bg-input"}
          placeholder="Enter Telephone "
          label={"Telephone"}
        />
        <LabelInput
          state={formData.VatId}
          name={"VatId"}
          setState={handleChange}
          labelVariant={"label"}
          readOnly={state.readOnly}
          type="number"
          variant={"bg-input"}
          placeholder="Enter VAT/TAX ID "
          label={"VAT/TAX ID"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={formData.description}
          name={"description"}
          setState={handleChange}
          labelVariant={"label"}
          textarea
          readOnly={state.readOnly}
          variant={"bg-teaxtarea"}
          placeholder="Describe Your Company..."
          label={"Description*"}
        />
      </InputWrapper>

      <Box mt={{ md: "80px", base: "40px" }}>
        {state.isEdit ? (
          <UploadBox
            handleEvent={handleLogo}
            list={uploadList}
            titie={"Upload Company Logo"}
          />
        ) : (
          <CompanyLogoPreview logo={formData.logo} />
        )}
      </Box>

      <Flex
        gap={"20px"}
        mt={{ md: "75px", base: "40px" }}
        mb={"70px"}
        justifyContent={"center"}
      >
        {state.isEdit ? (
          <>
            <Button onClick={handleCancel} variant="outline-blue">
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              {state.loading ? <Loader /> : "  Save"}
            </Button>
          </>
        ) : (
          <IconButton
            iconSize="18px"
            variant={"blue-btn"}
            btnLabel={"Edit"}
            handleEvent={handleEdit}
            icon={white_edit}
          />
        )}
      </Flex>
    </Box>
  );
};

export default CompanyBio;
