import React from "react";
import blueclick from "@/assets/Images/blueclick.svg";
import { Box, Button, Heading, Image } from "@chakra-ui/react";

const Success = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      m={{
        "2xl": "160px 0px 100px 0px",
        sm: "80px 0px 30px 0px",
        base: "0px 0px 20px 0px",
      }}
    >
      <Image
        width={{ md: "60px", base: "40px" }}
        mb={{ md: "40px", base: "30px" }}
        src={blueclick.src}
      />
      <Heading
        maxW={"733px"}
        fontSize={{ "2xl": "30px", md: "23px", base: "18px" }}
        lineHeight={{ "2xl": "51px", md: "37px", base: "26px" }}
        textAlign={"center"}
        variant={"p3"}
      >
        Password Changed Successfully
      </Heading>
            <Button 
                mt={"12%"}
                variant={"blue-btn"}
                onClick={()=>{    
            }}
            >
                Login
            </Button>
    </Box>
  );
};

export default Success;
