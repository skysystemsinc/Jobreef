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

const DesiredSkills = ({ style }) => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");

  const [linkArray, setlinkArray] = useState([1]);
  const handleDelete = (index) => {
    const deleteArray = [...linkArray];
    deleteArray.splice(index, 1);
    setlinkArray(deleteArray);
  };

  const [isEdit, setisEdit] = useState(true);
  const [readOnly, setreadOnly] = useState(true);

  return (
    <Box  sx={style}>
      {linkArray.map((item, index) => {
        return (
          <InputWrapper key={index} gap={"15px"}>
            <LabelInput
              readOnly={readOnly}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Enter Desired Skills"
              dropdown={readOnly ? false : true}
              label={"Desired Skills"}
            />

            <LabelInput
              labelVariant={"label"}
              type="text"
              dropdown
              variant={"bg-input"}
              readOnly={readOnly}
              placeholder="Select Tags for Job Post"
              label={"Tags"}
            />
          </InputWrapper>
        );
      })}

      {/* {isEdit ? (
        <Button
          onClick={() => setlinkArray([...linkArray, 2])}
          variant={"blue-btn"}
        >
          Add more
        </Button>
      ) : null} */}
    </Box>
  );
};

export default DesiredSkills;
