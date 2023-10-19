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

const SocialLink = ({ State, setState }) => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");

  const [linkArray, setlinkArray] = useState([1]);
  const handleDelete = (index) => {
    const deleteArray = [...linkArray];
    deleteArray.splice(index, 1);
    setlinkArray(deleteArray);
  };
  const handleAdd = () => {
    setlinkArray([...linkArray, 2]);
    setState((prev) => {
      return {
        ...prev,
        links: [...prev.links, { platform: State.platform, link: State.link }],
        platform:"",
        link:"",
      };
    });
  };
  return (
    <Box pr={"20px"}>
      {linkArray.map((item, index) => {
        return (
          <InputWrapper
            style={{ marginBottom: "15px" }}
            key={index}
            gap={"15px"}
          >
            <LabelInput
              state={State.platform}
              setState={(e) => {
                setState((prev) => {
                  return { ...prev, platform: e.target.value };
                });
              }}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Select Platform"
              dropdown
              label={"Social Links"}
            />
            <LabelInput
              state={State.link}
              setState={(e) => {
                setState((prev) => {
                  return { ...prev, link: e.target.value };
                });
              }}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Paste link to company social network page"
              label={"Link"}
            />
          </InputWrapper>
        );
      })}

      {/* <Flex justifyContent={"center"}> */}
      <Button
        onClick={handleAdd}
        variant={"blue-btn"}
        width={"max-content"}
        px={{ md: "30px", base: "20px" }}
      >
        Add More
      </Button>
      {/* </Flex> */}
    </Box>
  );
};

export default SocialLink;
