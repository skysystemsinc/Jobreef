import DropDown from "@/DropDown/DropDown";
import { Box, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";

const LabelInput = ({
  textarea,
  type,
  labelVariant,
  variant,
  placeholder,
  dropdown,
  label,
}) => {
  return (
    <Box width={"100%"}>
      <FormLabel
        marginBottom={{ md: "17px", base: "10px" }}
        variant={labelVariant}
      >
        {label}
      </FormLabel>

      {textarea ? (
        <Textarea
          placeholder={placeholder}
          size="sm"
          variant={variant}
          resize={"none"}
        />
      ) : dropdown ? (
        <DropDown  placeholder={placeholder}/>
      ) : (
        <Input variant={variant} placeholder={placeholder} type={type} />
      )}
    </Box>
  );
};

export default LabelInput;
