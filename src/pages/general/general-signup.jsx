import React from "react";

import { Box, Heading, Image } from "@chakra-ui/react";

import SignUp from "./signupComponent/SignUpComponent";

const index = () => {
  return (
    <Box height={{ base: "100vh" }}>
      <SignUp  />
    </Box>
  );
};

export default index;
