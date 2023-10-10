import DropDown from "@/Compomnents/DropDown/DropDown";
import { Box, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import PasswordInput from "../PasswordInput/PasswordInput";

const LabelInput = ({
  textarea,
  icon,
  type,
  showEndLable,
  passworInput,
  labelVariant,
  variant,
  placeholder,
  dropdown,
  label,
}) => {
  return (
    <Box width={"100%"}>
      <FormLabel
        marginBottom={{ xl: "10px", "2xl": "15px", base: "10px" }}
        variant={labelVariant}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {label}
        {showEndLable ? (
          <Box display={"flex"} alignItems={"center"} gap={"21px"}>
            {icon}
            <Heading className="nintoFont" variant={"p5"}>
              Edit
            </Heading>
          </Box>
        ) : null}
      </FormLabel>

      {textarea ? (
        <Textarea
          placeholder={placeholder}
          size="sm"
          variant={variant}
          resize={"none"}
        />
      ) : dropdown ? (
        <DropDown placeholder={placeholder} />
      ) : passworInput ? (
        <PasswordInput placeholder={placeholder} variant={variant} />
      ) : (
        <Input variant={variant} placeholder={placeholder} type={type} />
      )}
    </Box>
  );
};

export default LabelInput;
