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

const BlogForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [State, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
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

  return (
    <Box
      minHeight={"82vh"}
      width={{ md: "70%", base: "100%" }}
      px={"10px"}
      mx={"auto"}
    >
      <Heading
        textAlign={"center"}
        m={{ md: "42px 0px 40px 0px", base: "0px 0px 30px 0px" }}
        variant={"p6"}
      >
        {id ? "Update Blog" : " Upload Blog"}
      </Heading>
      <InputWrapper>
        <LabelInput
          state={State.firstName}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, firstName: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Title Of Blog "
          label={"Title Of Blog"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={State.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter One line Summary"
          label={"Summary"}
        />
      </InputWrapper>
      
      <InputWrapper>
        <LabelInput
          state={State.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          textFormattter
          variant={"bg-input"}
          placeholder="Enter Description"
          label={"Description"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={State.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          
          variant={"bg-input"}
          placeholder="Enter Category"
          label={"Category"}
        />
        <LabelInput
          state={State.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          
          variant={"bg-input"}
          placeholder="Enter keywords for this blog "
          label={"Keywords"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={State.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          
          variant={"bg-input"}
          placeholder="Enter name of Author"
          label={"Author"}
        />
        <LabelInput
          state={State.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          
          variant={"bg-input"}
          placeholder="Enter time read"
          label={"Time Read"}
        />
      </InputWrapper>


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

export default BlogForm;
