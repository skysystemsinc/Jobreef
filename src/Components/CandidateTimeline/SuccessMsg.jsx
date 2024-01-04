import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import blueclick from "@/assets/Images/blueclick.svg";
import { useRouter } from "next/router";

const SuccessMsg = () => {
  const router = useRouter()
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      m={{
        "2xl": "100px 0px 100px 0px",
        sm: "30px 0px 30px 0px",
        base: "0px 0px 20px 0px",
      }}
    >
      <Image
        width={{ md: "60px", base: "40px" }}
        mb={{ md: "40px", base: "30px" }}
        src={blueclick.src}
      />
      <Heading
        maxW={"500px"}
        fontSize={{ "2xl": "30px", md: "23px", base: "18px" }}
        lineHeight={{ "2xl": "51px", md: "37px", base: "26px" }}
        textAlign={"center"}
        variant={"p3"}
      >
        Thank you for signing up! We have received your registration details and
        are currently reviewing your account.
      </Heading>

      <Button
        mt={"50px"}
        onClick={() => {
          router.push("/login");
        }}
        variant="blue-btn"
      >
        {"Login"}
      </Button>
    </Box>
  );
};

export default SuccessMsg;
