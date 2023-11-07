import { Box, Button, Checkbox, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
import PasswordInput from "@/Compomnents/PasswordInput/PasswordInput";
import LabelInput from "@/Compomnents/LabelInput/LabelInput";
import Success from "./success";
const PassChangeSuccessful = ({ State, setState }) => {
  return (
    <Box>
        <Box mt={10}>
            <Success/>
        </Box>
    </Box>
  );
};

export default PassChangeSuccessful;
