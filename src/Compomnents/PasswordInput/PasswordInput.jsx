import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
function PasswordInput({ iconStyle, variant, placeholder, readOnly }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        readOnly={readOnly}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        variant={variant}
      />
      <InputRightElement  width="3.5rem">
        <Icon
          fontSize={{ "2xl": "25px", sm: "20px", base: "16px" }}
          onClick={handleClick}
          // marginTop={{ md: "0px", base: "8px" }}
          cursor={"pointer"}
          color={"gray.100"}
          sx={iconStyle}
          as={show ? HiOutlineEye : AiOutlineEyeInvisible}
        />
      </InputRightElement>
    </InputGroup>
  );
}
export default PasswordInput;
