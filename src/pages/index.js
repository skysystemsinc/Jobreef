import Head from "next/head";
// import Image from 'next/image'
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import leftBlue from "@/assets/Images/leftBlue.png";
import rightYellow from "@/assets/Images/lightYellow.png";
import logo from "@/assets/Images/logo.svg";
import google from "@/assets/Images/google.svg";
import PasswordInput from "@/Compomnents/PasswordInput/PasswordInput";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  const [isSmallerThe500] = useMediaQuery("(max-width: 500px)");
  return (
    <>
      <Image
        width={"40%"}
        position={"absolute"}
        top={"0px"}
        right={"0px"}
        zIndex={"-1"}
        src={leftBlue.src}
        alt="Dan Abramov"
      />
      <Image
        zIndex={"-1"}
        width={"40%"}
        position={"absolute"}
        bottom={"0px"}
        // zIndex={2}
        left={"0px"}
        src={rightYellow.src}
        alt="Dan Abramov"
      />
      <Box
        //  height={isSmallerThe500 ? "auto" : "100vh"} width={"100%"}
        minH={"100vh"}
        display={"flex"}
        padding={"70px 0px 50px 0px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          mx={"20px"}
          width={{
            "2xl": "564px",
            xl: "490px",
            lg: "564px",
            md: "564px",
            sm: "100%",
            base: "100%",
          }}
          textAlign={"center"}
        >
          <Box display={"flex"} justifyContent={"center"} mb={"41px"}>
            <Image
              width={isSmallerThe500 ? "200px" : "250px"}
              src={logo.src}
              alt="Dan Abramov"
            />
          </Box>
          <Box marginBottom={{ sm: "50px", base: "40px" }}>
            <FormLabel
              marginBottom={{ md: "15px", base: "10px" }}
              variant={"label"}
            >
              Email
            </FormLabel>
            <Input
              variant={"shadow-input"}
              placeholder="Enter Email"
              type="email"
            />
          </Box>
          <Box>
            <FormLabel
              marginBottom={{ md: "15px", base: "10px" }}
              variant={"label"}
            >
              Password
            </FormLabel>
            <PasswordInput
              variant={"shadow-input"}
              placeholder={"Enter your Password"}
            />
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Link
              variant={"blue-link"}
              marginTop={{ md: "24px", base: "18px" }}
              _hover={{ textDecoration: "none" }}
              href={"/"}
            >
              Forgot Password
            </Link>
          </Box>
          <Box margin={{ md: "41px 0px 69px 0px", base: "31px 0px 49px 0px" }}>
            <Heading
              variant="p7"
              // variant={"blue-link"}
              as={"p"}
              // size={"sm"}
              color={"black.100 !important"}
            >
              Don’t have an account?{" "}
              <Link
                href={"/sign-up"}
                display={"inline"}
                _hover={{ textDecoration: "underline" }}
                color={"blue.500"}
              >
                {" "}
                Sign up
              </Link>
            </Heading>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Button
              marginBottom={"15px"}
              className="nintoFont"
              variant={"blue-btn"}
            >
              Login
            </Button>

            <Image
              width={{ sm: "193px", md: "212px ", base: "193px" }}
              src={google.src}
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
