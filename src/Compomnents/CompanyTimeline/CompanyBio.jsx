import {
  Box,
  Checkbox,
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
import React from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";

const CompanyBio = () => {
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Website url"
          label={"Company Website"}
        />
        <LabelInput
          dropdown
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Industry"
          label={"Industry"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdown
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
          type="text"
          variant={"bg-input"}
          placeholder="Enter Year in Numbers"
          label={"Year Established*"}
        />
        <LabelInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Tags"
          label={"Tags"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          labelVariant={"label"}
          textarea
          variant={"bg-teaxtarea"}
          placeholder="Describe Your Company..."
          label={"Description*"}
        />
      </InputWrapper>
      <Box
        border={"lpx solid red !important"}
        sx={{ border: "1px solid red" }}
        borderColor={"gray.500 !important"}
        borderRadius={"8px"}
        p={"15px"}
        mt={{ md: "80px", base: "40px" }}
      >
        <Box textAlign={"center"}>
          <Link
            _hover={{ textDecoration: "none" }}
            textDecoration={"none"}
            variant={"blue-link"}
            href={"/"}
          >
            Upload Company Logo
          </Link>
        </Box>

        <Box display={"flex"} justifyContent={"center"} mb={"9px"} mt={"5px"}>
          <List>
            <ListItem
              sx={{
                fontWeight: 600,

                color: "gray.light",
                display: "flex",
                alignItems: "center",
                // lineHeight: "28px",
                fontFamily: "var(--chakra-\fonts-Nunito)",
                fontSize: { "2xl": "18px", sm: "15px", base: "13px" },
              }}
            >
              <ListIcon fontSize={"40px"} as={BsDot} color="blue.500" />
              Please upload logo in minimum 200x200 resolution
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",

                fontWeight: 600,
                color: "gray.light",
                // lineHeight: "28px",
                fontFamily: "var(--chakra-\fonts-Nunito)",
                fontSize: { "2xl": "18px", sm: "15px", base: "13px" },
              }}
            >
              <ListIcon as={BsDot} fontSize={"40px"} color="blue.500" />
              The acceptable formats of the copy are .PDF, .JPEG or .PNG
            </ListItem>
          </List>
        </Box>

        <Box
          mt={{ base: "20px", md: "0px" }}
          display={"flex"}
          justifyContent={"center"}
        >
          <FormLabel
            border={"lpx solid red dashed  #BBBBC7"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"14px"}
            variant={"lightblue"}
          >
            <Image src={upload.src} width={{ md: "20px", base: "17px" }} /> Drag
            & Drop
            <Input type="file" hidden />
          </FormLabel>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyBio;
