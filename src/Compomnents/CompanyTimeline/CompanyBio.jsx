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
import UploadBox from "../UploadBox/UploadBox";

const CompanyBio = ({ State, setState }) => {
  const list = [
    "Please upload logo in minimum 200x200 resolution",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
  ];
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={State.companyName}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, companyName: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Name"
          label={"Company Name*"}
        />
        <LabelInput
          dropdown
          state={State.industry}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, industry: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Industry"
          label={"Industry"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={State.directory}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, directory: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          dropdown
          placeholder="Select Option"
          label={"Listed in Directory*"}
        />
        <LabelInput
          state={State.noOfEmployees}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, noOfEmployees: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter Number of Employees"
          label={"Number of Employees"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={State.yearEstablished}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, yearEstablished: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="number"
          variant={"bg-input"}
          placeholder="Enter Year in Numbers"
          label={"Year Established"}
        />
        <LabelInput
          state={State.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="email"
          variant={"bg-input"}
          placeholder="Enter Company Website URL"
          // dropdown
          label={"Website"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={State.decsription}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, decsription: e.target.value };
            });
          }}
          labelVariant={"label"}
          textarea
          variant={"bg-teaxtarea"}
          placeholder="Describe Your Company..."
          label={"Description*"}
        />
      </InputWrapper>

      <UploadBox
        style={{width:"100%",  p: { md: "15px 10px 6px 5px", base: "15px 10px 6px 5px" } }}
        titie={"Upload Company Logo"}
        list={list}
      />

      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default CompanyBio;
