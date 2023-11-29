import {
  Divider,
  Image,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const IconTextArea = ({ placeholder, icon }) => {
  return (
    <InputGroup>
      <InputLeftElement
        mt={"7px"}
        ml="10px"
        p={"6px"}
        height={"35px"}
        pointerEvents="none"
      >
        <Image src={icon.src} width={"19px"} />
        <Divider ml={"14px"} borderColor={"gray.300"} orientation="vertical" />
      </InputLeftElement>
      <Textarea
        variant={"simple"}
        p={{
          lg: "5px 40px 20px 12px",
          sm: "12px 63px 20px 12px",
          base: "6px 63px 20px 12px",
        }}
        pl={"63px !important"}
        overflow={"hidden"}
        width={{ lg: "300px", base: "100%" }}
        borderRadius={"5px"}
        minHeight={"52px"}
        placeholder={placeholder}
        size="sm"
        _placeholder={{
          color: "gray.textColor",
          // fontSize:"12px"
        }}
        resize={"none"}
      />
    </InputGroup>
  );
};

export default IconTextArea;
