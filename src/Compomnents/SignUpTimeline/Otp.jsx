import {
  Box,
  HStack,
  Heading,
  Link,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React from "react";

const Otp = () => {
  return (
    <Box textAlign={"center"}>
      <Heading
        as={"p"}
        fontSize={{ lg: "30px", base: "16px", sm: "19px" }}
        textAlign={"center"}
        m={{ lg: "60px 0px 76px -62px", base: "30px 0px 46px 0px" }}
        whiteSpace={{ lg: "nowrap", base: "wrap" }}
        variant={"p2"}
      >
        Please enter the 4 digit code send to example@email.com
      </Heading>
      <HStack gap={"22px"} display={"flex"} justifyContent={"center"}>
        <PinInput variant={"otp"} placeholder="0" size={"xl"}>
          <PinInputField className="nintoFont" />
          <PinInputField className="nintoFont" />
          <PinInputField className="nintoFont" />
          <PinInputField className="nintoFont" />
        </PinInput>
      </HStack>

      <Box mt={"49px"}>
        <Link variant={"blue-link"} href="/">
          Resend OTP
        </Link>
      </Box>
    </Box>
  );
};

export default Otp;
