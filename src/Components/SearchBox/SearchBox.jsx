import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import search from "@/assets/Images/search.svg";
import { Image } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";

const SearchBox = ({placeholder}) => {
  return (
    <InputGroup>
      <InputRightElement height={"35px"} pointerEvents="none">
        <Image src={search.src} width={"15px"} />
      </InputRightElement>
      <Input
        type="text"
        color={"blue.700"}
        variant={"bg-input"}
        borderRadius={"5px"}
        bg={"transparent"}
        border={"1px solid "}
        borderColor={"white.300"}

        placeholder={placeholder}
        sx={{
          height: "35px",
          _placeholder: {
            fontSize: "14px",
            color: "blue.700",
          },
        }}
      />
    </InputGroup>
  );
};

export default SearchBox;
