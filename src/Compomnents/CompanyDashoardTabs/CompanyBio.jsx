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
} from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import UploadBox from "../UploadBox/UploadBox";
import CompanyLogoPreview from "../CompanyLogoPreview/CompanyLogoPreview";
import IconButton from "../IconButton/IconButton";
import white_edit from "@/assets/Images/white-edit.svg";

const CompanyBio = () => {
  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);

  const uploadList = [
    "Please upload logo in minimum 200x200 resolution",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
  ];
  const handleEdit = () => {
    setreadOnly(false);
    setisEdit(true);
  };
  const handleSave = () => {
    setreadOnly(true);
    setisEdit(false);
  };
  const handleCancel = () => {
    setreadOnly(true);
    setisEdit(false);
  };

  return (
    <Box mt={{ md: "60px", base: "10px" }}>
      <InputWrapper>
        <LabelInput
          readOnly={readOnly}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Name"
          label={"Company Name*"}
        />
        <LabelInput
          dropdown={readOnly ? false : true}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Industry"
          label={"Industry"}
          readOnly={readOnly}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          readOnly={readOnly}
          variant={"bg-input"}
          dropdown={readOnly ? false : true}
          placeholder="Select Option"
          label={"Listed in Directory*"}
        />
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Number of Employees"
          label={"Number of Employees"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          readOnly={readOnly}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Year in Numbers"
          label={"Year Established*"}
        />
        <LabelInput
          labelVariant={"label"}
          type="text"
          readOnly={readOnly}
          variant={"bg-input"}
          placeholder="Enter Company Website URL"
          label={"Website"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          textarea
          readOnly={readOnly}
          variant={"bg-teaxtarea"}
          placeholder="Describe Your Company..."
          label={"Description*"}
        />
      </InputWrapper>

      <Box mt={{ md: "80px", base: "40px" }}>
        {isEdit ? (
          <UploadBox list={uploadList} titie={"Upload Company Logo"} />
        ) : (
          <CompanyLogoPreview />
        )}
      </Box>

      <Flex
        gap={"20px"}
        mt={{ md: "75px", base: "40px" }}
        mb={"70px"}
        justifyContent={"center"}
      >
        {isEdit ? (
          <>
            <Button onClick={handleCancel} variant="outline-blue">
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              Save
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
