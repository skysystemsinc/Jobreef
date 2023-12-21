import globalStyles from "@/styles/globalStyles";
import { Checkbox, Heading } from "@chakra-ui/react";
import React from "react";

const CheckBox = ({ defaultCheck, selectSate, label, handleEvent }) => {
  return (
    <Checkbox
      // display={"flex"}
      // alignItems={"center"}
      // gap={"6px"}
      borderRadius={"10px"}
      onChange={handleEvent}
      checked={selectSate}
      defaultChecked={defaultCheck ? defaultCheck : false}
      size="md"
      colorScheme="blue"
      
      rounded={"sm"}
      borderColor={selectSate ? "blue.500" : "gray.text"}
      sx={globalStyles.checkBoxStyle}

    >
      <Heading
        variant={"p1"}
        color={selectSate ? "blue.500" : "gray.text"}
        margin={"0px"}
      >
        {/* Register as Employer{" "} */}
        {label}
      </Heading>
    </Checkbox>
  );
};

export default CheckBox;
