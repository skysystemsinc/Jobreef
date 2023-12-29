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
  useToast,
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
import { useRouter } from "next/router";
import { httpRequest } from "@/helper/httpRrequest";
import { BACKEND_URL } from "@/Utils/urls";
import endPoints from "@/Utils/endpoints";
import Loader from "@/Compomnents/Loader/Loader";
import { useDispatch } from "react-redux";
import { setLoginUser } from "@/Redux/slices/LoginUser";
import { roles } from "@/Utils/role";
import { addCompany } from "@/Redux/slices/company";
import { addEmployee } from "@/Redux/slices/employee";
import { post } from "@/helper/fetch";

export default function Login() {
  const router = useRouter();
  const [isSmallerThe500] = useMediaQuery("(max-width: 500px)");
  const toast = useToast();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogin = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    const body = {
      email: state.email,
      password: state.password,
    };
    try {
      const postData = await post(
        `${endPoints.login}`,

        body
      );
      if (postData.success) {
        const { data } = postData;
        localStorage.setItem("id", data.id);
        dispatch(setLoginUser(postData.data));
        dispatch(addCompany(postData?.data?.company));
        

        dispatch(addEmployee(postData?.data?.employee));
        if (data.role == roles.company) {
          router.push("/company/profile-setting");
        } else {
          router.push("/candidate/profile-setting");
        }
        toast({
          position: "bottom-right",
          title: postData.message,
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
      } else {
        toast({
          position: "bottom-right",
          title: postData.message,
          status: "error",
          variant: "subtle",
          isClosable: true,
        });
      }
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
    } catch (error) {
      console.log("error", error);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

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
        minH={"100vh"}
        // border={"1px solid red"}
        display={"flex"}
        padding={"30px 0px 30px 0px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          mx={"20px"}
          width={{
            md: "402px",

            sm: "80%",
            base: "100%",
          }}
          textAlign={"center"}
        >
          <Box display={"flex"} justifyContent={"center"} mb={"25px"}>
            <Image
              width={{
                md: "170px",

                base: "140px",
              }}
              src={logo.src}
              alt="Dan Abramov"
            />
          </Box>
          <Box marginBottom={"20px"}>
            <LabelInput
              state={state.email}
              setState={handleChange}
              name={"email"}
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
              setState={handleChange}
              name={"password"}
              iconStyle={{ marginTop: "7px" }}
              labelVariant={"label"}
              type="password"
              passwordInput
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
          <Box margin={"25px 0px 42px 0px"}>
            <Heading
              variant="p7"
              fontSize={"14px"}
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
              onClick={handleLogin}
              marginBottom={"15px"}
              className="nintoFont"
              variant={"blue-btn"}
              width={{ md: "162px", base: "140px" }}
            >
              {state.loading ? <Loader /> : "  Login"}
            </Button>
            <Button
              // width={{ base: "max-content" }}
              width={{ md: "162px", base: "140px" }}

              boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
              variant={"outline"}
              fontSize={{  sm: "14px", base: "12px" }}
              leftIcon={<FcGoogle />}
              px={{ "2xl": "20px", base: "10px" }}
            >
              <Center>
                <Text
                  variant={"p1"}
                  color={"gray.text"}
                  fontSize={{  sm: "13px", base: "11px" }}
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
