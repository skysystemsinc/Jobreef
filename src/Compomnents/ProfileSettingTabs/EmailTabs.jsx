import { Box, Image } from "@chakra-ui/react";
import LabelInput from "../LabelInput/LabelInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
import { useRef, useState } from "react";
const EmailTabs = () => {
  const [email, setemail] = useState("");
  const inputRef = useRef();

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      mt={{ md: "140px", base: "50px" }}
      mb={{ md: "120px", base: "0px" }}
    >
      <Box width={{ md: "564px", base: "100%" }}>
        <LabelInput
          showEndLable
          labelVariant={"label"}
          type="text"
          inputRef={inputRef}
          variant={"shadow-input"}
          placeholder="jacobjones9@gmail.com"
          label={"Email"}
          state={email}
          setState={setemail}
          icon={
            <Image
              width={{ md: "17px", base: "15px" }}
              src={edit_outline.src}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default EmailTabs;
