import Head from "next/head";
// import Image from 'next/image'
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  Center,
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
import LabelInput from "@/Compomnents/LabelInput/LabelInput";
import { FcGoogle } from "react-icons/fc";
import { color } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSmallerThe500] = useMediaQuery("(max-width: 500px)");
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Image
        width={{ "2xl": "40%", base: "30%" }}
        position={"absolute"}
        top={"0px"}
        right={"0px"}
        zIndex={"-1"}
        src={leftBlue.src}
        alt="Dan Abramov"
      />
      <Image
        zIndex={"-1"}
        width={{ "2xl": "40%", base: "30%" }}
        position={"absolute"}
        bottom={"0px"}
        // zIndex={2}
        left={"0px"}
        src={rightYellow.src}
        alt="Dan Abramov"
      />
      <Box
        minH={"100vh"}
        // border={"1px solid red"}
        display={"flex"}
        padding={{ "2xl": "70px 0px 50px 0px", base: "30px 0px 30px 0px" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          mx={"20px"}
          width={{
            "2xl": "564px",
            xl: "420px",
            lg: "420px",
            md: "420px",

            sm: "80%",
            base: "100%",
          }}
          textAlign={"center"}
        >
          <Box display={"flex"} justifyContent={"center"} mb={"41px"}>
            <Image
              width={{
                "2xl": "250px",
                md: "190px",
                sm: "160px",
                base: "140px",
              }}
              src={logo.src}
              alt="Dan Abramov"
            />
          </Box>
          <Box marginBottom={{ "2xl": "50px", base: "30px" }}>
            <LabelInput
              state={state.email}
              setState={(e) => {
                setstate((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
              labelVariant={"label"}
              type="email"
              variant={"shadow-input"}
              placeholder="Enter Email"
              label={"Email"}
            />
          </Box>
          <Box>
            <LabelInput
              state={state.password}
              setState={(e) => {
                setstate((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              iconStyle={{ marginTop: "7px" }}
              labelVariant={"label"}
              type="password"
              passworInput
              variant={"shadow-input"}
              placeholder="Enter your Password"
              label={"Password"}
            />
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Link
              variant={"blue-link"}
              marginTop={{ "2xl": "24px", base: "12px" }}
              _hover={{ textDecoration: "none" }}
              href={"/"}
            >
              Forgot Password
            </Link>
          </Box>
          <Box
            margin={{ "2xl": "41px 0px 69px 0px", base: "31px 0px 49px 0px" }}
          >
            <Heading
              variant="p7"
              // variant={"blue-link"}
              as={"p"}
              // size={"sm"}
              color={"black.100 !important"}
            >
              Don’t have an account?{" "}
              <Link
                href={"/company/sign-up"}
                display={"inline"}
                _hover={{ textDecoration: "none" }}
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
              width={{ "2xl": "200px", sm: "175px", base: "140px" }}
            >
              Login
            </Button>
            <Button
              width={{ base: "max-content" }}
              boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
              variant={"outline"}
              fontSize={{ "2xl": "16px", sm: "14px", base: "12px" }}
              leftIcon={<FcGoogle />}
              px={{ "2xl": "20px", base: "10px" }}
            >
              <Center>
                <Text
                  variant={"p1"}
                  color={"gray.text"}
                  fontSize={{ "2xl": "16px", sm: "13px", base: "11px" }}
                >
                  Sign in with Google
                </Text>
              </Center>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
