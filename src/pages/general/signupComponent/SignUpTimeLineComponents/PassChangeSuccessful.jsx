import { Box, Checkbox, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
import PasswordInput from "@/Compomnents/PasswordInput/PasswordInput";
import LabelInput from "@/Compomnents/LabelInput/LabelInput";

const PassChangeSuccessful = ({ State, setState }) => {
  return (
    <Box>
        <Heading
            textAlign={"center"}
            variant={"p8"}
            color={"gray.text"}
            margin={"0px"}
          >
          Forget Password Hold oN
        </Heading>
        <Box my={6}>
          <Heading
            as={"p"}
            fontSize={{ "2xl": "30px", base: "16px", sm: "17px" }}
            textAlign={"center"}
            m={{
              "2xl": "60px 0px 76px -62px",
              md: "30px 0px 62px 0px",
              base: "30px 0px 46px 0px",
            }}
            whiteSpace={{ lg: "nowrap", base: "wrap" }}
            variant={"p2"}
          >
            Please create a new password for your Jobreef account
          </Heading>
        </Box>
    </Box>
  );
};

export default PassChangeSuccessful;
