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

const SocialLink = () => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");

  const [linkArray, setlinkArray] = useState([1]);
  const handleDelete = (index) => {
    const deleteArray = [...linkArray];
    deleteArray.splice(index, 1);
    setlinkArray(deleteArray);
  };
  return (
    <Box pr={"20px"}>
      {linkArray.map((item, index) => {
        return (
          <InputWrapper gap={"15px"}>
            <LabelInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Select Platform"
              dropdown
              label={"Social Links"}
            />

            <Box width={"100%"} position={"relative"}>
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
                  placeholder="Paste link to company social network page"
                  label={"Link"}
                />
              )}
              <AiOutlineDelete
                onClick={() => handleDelete(index)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: isSmallerThe500 ? "10px" : "44px",
                  right: "-30px",
                  fontSize: "23px",
                  color: "#2CA5C3",
                }}
              />
            </Box>
          </InputWrapper>
        );
      })}

      <Flex justifyContent={"center"}>
        <Button
          onClick={() => setlinkArray([...linkArray, 2])}
          variant={"blue-btn"}
        >
          Add more
        </Button>
      </Flex>
    </Box>
  );
};

export default SocialLink;
