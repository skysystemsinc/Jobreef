import {
  Box,
  CircularProgress,
  HStack,
  Heading,
  Link,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React from "react";

const Otp = ({ text, State, setState }) => {
  return (
    <Box textAlign={"center"}>
      <Heading
        as={"p"}
        
        textAlign={"center"}
        m={{
          "2xl": "60px 0px 76px -62px",
          md: "30px 0px 62px 0px",
          base: "30px 0px 46px 0px",
        }}
        whiteSpace={{ lg: "nowrap", base: "wrap" }}
        variant={"p11"}
      >
        {/* Please enter the 4 digit code sent to your email */}
        {text}
      </Heading>
      <HStack gap={"15px"} display={"flex"} justifyContent={"center"}>
        <PinInput
          value={State?.otp}
          onChange={(e) => {
            setState((prev) => {
              return { ...prev, otp: e };
            });
          }}
          variant={"otp"}
          placeholder="0"
          size={"xl"}
        >
          <PinInputField className="nintoFont" />
          <PinInputField className="nintoFont" />
          <PinInputField className="nintoFont" />
          <PinInputField className="nintoFont" />
        </PinInput>
      </HStack>

      <Box mt={"26px"}>
        <Link
          _hover={{ textDecoration: "none" }}
          variant={"blue-link"}
          href="/"
        >
          Resend OTP
        </Link>

        <Box
          display={"flex"}
          alignItems={"center"}
          gap={{ md: "20px", base: "10px" }}
          justifyContent={"center"}
          mt={"18px"}
        >
          <CircularProgress
            value={52}
            thickness={"13px"}
            size={{ md: "27px", base: "20px" }}
            color="blue.500"
          />
          <Heading fontWeight={400} variant={"p7"} color={"gray.600"}>
            Code will expire in 5 minutes.
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Otp;
