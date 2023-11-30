import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import axios from "axios";
import { useRouter } from "next/router";
import CompanyLogoPreview from "../CompanyLogoPreview/CompanyLogoPreview";
import UploadBox from "../UploadBox/UploadBox";

const BlogContent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    logo: "",
    description:""
  });

  const handleSend = async () => {
    try {
      router.push("/operator/blog");
    } catch (error) {}
  };
  const handleCancel = async () => {
    try {
      router.push("/operator/blog");
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
  const list = [
    "Please upload Image in minimum 200x200 resolution",
    
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
  ];

  return (
    <Box
      minHeight={"82vh"}
      width={{ md: "100%", base: "100%" }}
      px={"10px"}
      
    >
  

      <InputWrapper>
        <LabelInput
          state={formData.description}
          setState={handleChange}
          name={"description"}
          labelVariant={"label"}
          type="text"
          textFormattter
          variant={"bg-input"}
          placeholder="Enter Content"
          label={"Content"}
        />
      </InputWrapper>

      {formData?.logo ? (
        <CompanyLogoPreview logo={formData.logo} />
      ) : (
        <UploadBox
          style={{
            width: "100%",
            p: { md: "15px 10px 6px 5px", base: "15px 10px 6px 5px" },
          }}
          titie={"Upload Cover  Image"}
          handleEvent={handleLogo}
          list={list}
        />
      )}

      <Flex
        justifyContent={"center"}
        mt={{ md: "70px", base: "40px" }}
        mb={"75px"}
        gap={{ md: "21px", base: "13px" }}
      >
        <Button
          //   px={{ md: "35px", base: "20px" }}
          onClick={handleCancel}
          //   width={"max-content"}
          variant="outline-blue"
        >
          Cancel
        </Button>
        <Button
          //   width={"max-content"}
          onClick={handleSend}
          //   px={{ md: "35px", base: "20px" }}
          variant={"blue-btn"}
        >
          {id ? "Update" : " Save"}
        </Button>
      </Flex>
    </Box>
  );
};

export default BlogContent;
