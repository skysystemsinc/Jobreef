import DropDown from "@/Components/DropDown/DropDown";
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
  className,
  dropdownOption,
  pattern,
  name,
  textAreaStyle,
  textarea,
  multipleSelectDropdown,
  defaultDropdown,
  inputStyle,
  iconStyle,
  defaultValue,
  icon,
  state,
  setState,
  textFormatter,
  handleEdit,
  type,
  showEndLable,
  importantIcon,
  inputRef,
  passwordInput,
  labelVariant,
  variant,
  placeholder,
  dropdown,
  readOnly,
  label,
  style,
}) => {
  return (
    <Box width={"100%"} sx={style}>
      <FormLabel
        marginBottom={"9px"}
        variant={labelVariant}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} gap={"10px"}>
          {label}
          {importantIcon ? <Image src={info.src} width={"16px"} /> : null}
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
          name={name}
          readOnly={readOnly}
          variant={variant}
          sx={textAreaStyle}
          
          resize={"none"}
        />
      ) : textFormatter ? (
        <TextFormatting
          className={className}
          readOnly={readOnly}
          value={state}
          setValue={setState}
          placeholder={placeholder}
        />
      ) : dropdown ? (
        <DropDown
          name={name}
          defaultDropdown={defaultDropdown}
          multipleSelectDropdown={multipleSelectDropdown}
          dropdownOption={dropdownOption}
          state={state}
          setState={setState}
          placeholder={placeholder}
        />
      ) : passwordInput ? (
        <PasswordInput
          setState={setState}
          state={state}
          iconStyle={iconStyle}
          readOnly={readOnly}
          name={name}
          placeholder={placeholder}
          variant={variant}
        />
      ) : type == "date" ? (
        <DatePicker
          defaultValue={defaultValue}
          setState={setState}
          state={state}
          readOnly={readOnly}
        />
      ) : (
        <Input
          pattern={pattern}
          ref={inputRef}
          sx={inputStyle}
          readOnly={readOnly}
          value={state ?? ""}
          name={name}
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
