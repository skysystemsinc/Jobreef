import { Box, Button, Checkbox, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
import PasswordInput from "@/Components/PasswordInput/PasswordInput";
import LabelInput from "@/Components/LabelInput/LabelInput";
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
