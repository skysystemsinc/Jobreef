import React from "react";
import General_login from "../../assets/Images/General_login.svg";
import Login from "@/Compomnents/Login/Login";
import { Box, Heading, Image } from "@chakra-ui/react";

const userLogin = () => {
  return (
    <Box height={"100vh"} display={"flex"}>
      <Box
        display={{ md: "block", base: "none" }}
        backgroundColor={"blue.500"}
        position="relative"
        flex={1}
      >
        <Box
          p={"20%"}
          px={"8%"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
          // border={"1px solid red"}
        >
          <Image width={"64%"} src={General_login.src} />
          <Heading
            variant="p6"
            textAlign="center"
            color="white.100"
            
            fontWeight={700}
            fontSize={{
              xl: "22px",
              lg: "20px",
              md: "18px",
              sm: "12px",
              base: "10px",
            }}
          >
            Find Opportunity Here.
          </Heading>
        </Box>
      </Box>
      <Box display="flex" flex={1} justifyContent="center" alignItems="center">
        <Box width={{ md: "70%", sm:"60%",  base: "90%" }}>
          <Login />
        </Box>
      </Box>
    </Box>
  );
};

export default userLogin;
