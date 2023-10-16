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

import IconButton from "../IconButton/IconButton";
import white_edit from "@/assets/Images/white-edit.svg";

const CompanyLocation = () => {
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
          dropdown={readOnly ? false : true}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Country"
          label={"Country*"}
        />
        <LabelInput
          dropdown={readOnly ? false : true}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select State/Province"
          label={"State/Province"}
          readOnly={readOnly}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          readOnly={readOnly}
          variant={"bg-input"}
          placeholder="Select Option"
          label={"Enter City"}
        />
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Street Address"
          label={"Street Address"}
        />
      </InputWrapper>

      {isEdit ? (
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
            Save
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
