import { Box, Checkbox, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
import PasswordInput from "../PasswordInput/PasswordInput";

const Password = () => {
  return (
    <Box>
      <Box marginBottom={{ sm: "25px", base: "25px" }}>
        <FormLabel
          marginBottom={{ sm: "19px", base: "10px" }}
          variant={"label"}
        >
          Enter Password
        </FormLabel>
        <PasswordInput placeholder="Enter your Password" variant={"bg-input"} />
      </Box>

      <Box marginBottom={{ sm: "22px", base: "22px" }}>
        <FormLabel
          marginBottom={{ sm: "19px", base: "10px" }}
          variant={"label"}
        >
          Confirm Password
        </FormLabel>
        <PasswordInput
          placeholder="Re-enter your Password"
          variant={"bg-input"}
        />
      </Box>
    </Box>
  );
};

export default Password;
