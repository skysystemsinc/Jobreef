import { Box,Heading} from "@chakra-ui/react";
import React from "react";
import LabelInput from "@/Compomnents/LabelInput/LabelInput";

const Password = ({ State, setState }) => {
  return (
    <Box>
        <Heading
            textAlign={"center"}
            variant={"p8"}
            color={"gray.text"}
            margin={"0px"}
          >
          Forget Password
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
      <Box marginBottom={{ sm: "25px", base: "25px" }}>
        <LabelInput
          state={State?.password}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          passworInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter your New Password"
          label={"Enter Password"}
        />
      </Box>

      <Box marginBottom={{ sm: "22px", base: "22px" }}>
        <LabelInput
          state={State?.confirmPassword}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, confirmPassword: e.target.value };
            });
          }}
          passworInput
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Re-enter your New Password"
          label={"Confirm Password"}
        />
      </Box>
    </Box>
  );
};

export default Password;
