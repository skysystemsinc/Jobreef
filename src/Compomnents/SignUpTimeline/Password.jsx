import { Box, Checkbox, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import LabelInput from "../LabelInput/LabelInput";

const Password = ({ State, setState }) => {
  return (
    <Box>
      <Box marginBottom={{ sm: "25px", base: "25px" }}>
        <LabelInput
          state={State.password}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          passworInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter your Password"
          label={"Enter Password"}
        />
      </Box>

      <Box marginBottom={{ sm: "22px", base: "22px" }}>
        <LabelInput
          state={State.confirmPassword}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, confirmPassword: e.target.value };
            });
          }}
          passworInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Re-enter your Password"
          label={"Confirm Password"}
        />
      </Box>
    </Box>
  );
};

export default Password;
