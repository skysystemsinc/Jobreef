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
  useToast,
} from "@chakra-ui/react";
import React from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import Loader from "../Loader/Loader";
import globalStyles from "@/styles/globalStyles";

const CompanyLocation = ({nextStep, handlePrevious, State, setState }) => {
  const toast = useToast();

  const handleNext = () => {
    if (
      State.country === "" ||
      State.province === "" ||
      State.city === "" ||
      State.address === ""
    ) {
      toast({
        position: globalStyles.toastStyle.position,
        title: `Required fields are empty`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    nextStep();
  };
  return (
    <Box>
      <InputWrapper>
        <LabelInput
          state={State.country}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, country: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Country"
          dropdown
          label={"Country*"}
        />
        <LabelInput
          state={State.province}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, province: e.target.value };
            });
          }}
          dropdown
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select State/Province"
          label={"State/Province"}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={State.city}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, city: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter City"
          label={"City"}
        />
        <LabelInput
          state={State.address}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, address: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Street Address"
          label={"Street Address"}
        />
      </InputWrapper>
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "43px" }}
        pb={"30px"}
        gap={4}
      >
        <Button onClick={handlePrevious} variant="outline-blue">
          {" Back"}
        </Button>
        <Button
          // width={{ md: "200px", sm: "180px", base: "130px" }}
          variant={"blue-btn"}
          onClick={handleNext}
        >
          {State.loading ? <Loader /> : "Next"}
        </Button>
      </Flex>
    </Box>
  );
};

export default CompanyLocation;
