import DropDown from "@/Compomnents/DropDown/DropDown";
import {
  Box,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
  css,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
import { AiOutlineCheck } from "react-icons/ai";
import calendar from "@/assets/Images/calendar.svg";
import DatePicker from "../DatePicker/DatePicker";
import info from "@/assets/Images/info.svg";
import TextFormatting from "../TextFormatting/TextFormatting";

const LabelInput = ({
  dropdownOption,
  textarea,
  iconStyle,
  icon,
  state,
  setState,
  textFormattter,
  handleEdit,
  type,
  showEndLable,
  imoptnatIcon,
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
        <Box display={"flex"} gap={"10px"}>
          {label}
          {imoptnatIcon ? <Image src={info.src} width={"16px"} /> : null}
        </Box>
        {showEndLable ? (
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={{ md: "15px", base: "10px" }}
          >
            {readOnly ? (
              <Box
                cursor={"pointer"}
                display={"flex"}
                alignItems={"center"}
                gap={"12px"}
                onClick={handleEdit}
              >
                {/* {icon} */}
                <Image
                  width={{ md: "17px", base: "15px" }}
                  cursor={"pointer"}
                  src={edit_outline.src}
                />
                <Heading className="nintoFont" variant={"p5"}>
                  Edit
                </Heading>
              </Box>
            ) : null}
          </Box>
        ) : null}
      </FormLabel>

      {textarea ? (
        <Textarea
          value={state}
          onChange={setState}
          placeholder={placeholder}
          size="sm"
          variant={variant}
          resize={"none"}
        />
      ) : textFormattter ? (
        <TextFormatting
          value={state}
          onChange={setState}
          placeholder={placeholder}
        />
      ) : dropdown ? (
        <DropDown dropdownOption={dropdownOption} state={state} setState={setState} placeholder={placeholder} />
      ) : passworInput ? (
        <PasswordInput
          setState={setState}
          state={state}
          iconStyle={iconStyle}
          readOnly={readOnly}
          placeholder={placeholder}
          variant={variant}
        />
      ) : type == "date" ? (
        <DatePicker setState={setState} state={state} />
      ) : (
        <Input
          ref={inputRef}
          readOnly={readOnly}
          value={state ?? ""}
          onChange={setState}
          variant={variant}
          placeholder={placeholder}
          type={type}
        />
      )}
    </Box>
  );
};

export default LabelInput;
