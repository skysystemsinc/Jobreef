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

const SocialLink = () => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");

  const [linkArray, setlinkArray] = useState([1]);
  const handleDelete = (index) => {
    const deleteArray = [...linkArray];
    deleteArray.splice(index, 1);
    setlinkArray(deleteArray);
  };

  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);

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
    <Box minH={"55vh"} mt={{ md: "60px", base: "10px" }}>
      {linkArray.map((item, index) => {
        return (
          <InputWrapper key={index} gap={"15px"}>
            <LabelInput
              readOnly={readOnly}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Select Platform"
              dropdown={readOnly ? false : true}
              label={"Social Links"}
            />

            <Box width={isSmallerThe500 ? "96%" : "100%"} position={"relative"}>
              {isSmallerThe500 ? (
                <Input
                  variant={"bg-input"}
                  placeholder="Paste link to company social network page"
                />
              ) : (
                <LabelInput
                  labelVariant={"label"}
                  type="text"
                  variant={"bg-input"}
                  readOnly={readOnly}
                  placeholder="Paste link to company social network page"
                  label={"Link"}
                />
              )}
              {isEdit ? (
                <AiOutlineDelete
                  onClick={() => handleDelete(index)}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: isSmallerThe500 ? "7px" : "61px",
                    right: isSmallerThe500 ? "-30px" : "-30px",
                    fontSize: "23px",
                    color: "#2CA5C3",
                  }}
                />
              ) : null}
            </Box>
          </InputWrapper>
        );
      })}

      {isEdit ? (
        <Button
          onClick={() => setlinkArray([...linkArray, 2])}
          variant={"blue-btn"}
        >
          Add more
        </Button>
      ) : null}

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

export default SocialLink;
