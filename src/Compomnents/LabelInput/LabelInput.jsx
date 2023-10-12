import DropDown from "@/Compomnents/DropDown/DropDown";
import {
  Box,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
import { AiOutlineCheck } from "react-icons/ai";
import calendar from "@/assets/Images/calendar.svg";
const LabelInput = ({
  textarea,
  icon,
  state,
  setState,
  handleEdit,
  type,
  showEndLable,
  inputRef,
  passworInput,
  labelVariant,
  variant,
  placeholder,
  dropdown,
  readOnly,
  setreadOnly,
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
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={{ md: "15px", base: "10px" }}
          >
            {readOnly ? (
              <>
                {/* {icon} */}
                <Image
                  onClick={handleEdit}
                  width={{ md: "17px", base: "15px" }}
                  cursor={"pointer"}
                  src={edit_outline.src}
                />
                <Heading className="nintoFont" variant={"p5"}>
                  Edit
                </Heading>
              </>
            ) : null}
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
        <PasswordInput
          readOnly={readOnly}
          placeholder={placeholder}
          variant={variant}
        />
      ) : (
        <Input
        
          ref={inputRef}
          readOnly={readOnly}
          variant={variant}
          placeholder={placeholder}
          type={type}
        />
      )}
    </Box>
  );
};

export default LabelInput;
