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

const LabelInput = ({
  textarea,
  icon,
  state,
  setState,
  type,
  showEndLable,
  inputRef,
  passworInput,
  labelVariant,
  variant,
  placeholder,
  dropdown,
  label,
}) => {
  const [readOnly, setreadOnly] = useState(showEndLable ? true : false);
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [readOnly]);

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
                  onClick={() => setreadOnly(false)}
                  width={{ md: "17px", base: "15px" }}
                  src={edit_outline.src}
                />
                <Heading className="nintoFont" variant={"p5"}>
                  Edit
                </Heading>
              </>
            ) : (
              <>
                {/* {icon} */}
                <AiOutlineCheck
                  onClick={() => setreadOnly(true)}
                  color="#2CA5C3"
                />
                <Heading className="nintoFont" variant={"p5"}>
                  Save
                </Heading>
              </>
            )}
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
