import { Box, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import LabelInput from "@/Compomnents/LabelInput/LabelInput";

const PersonalInfo = ({ State, setState }) => {
  //
  return (
    <Box>
      <Heading
        textAlign={"center"}
        variant={"p6"}
        color={"gray.text"}
        margin={"0px"}
      >
        Forget Password
      </Heading>
      <Box mt={8}>
        <Heading
          fontWeight={400}
          as={"p"}
          textAlign={"center"}
          m={{
            md: "40px 0px 42px 0px",
            base: "30px 0px 46px 0px",
          }}
          whiteSpace={{ lg: "nowrap", base: "wrap" }}
          variant={"p11"}
        >
          Please enter the email address associated with your Jobreef account
        </Heading>
      </Box>
      <Box mt={10} px={{ md: 10, base: 0 }}>
        <LabelInput
          state={State?.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter  Email"
          label={"Email"}
        />
      </Box>
    </Box>
  );
};

export default PersonalInfo;
