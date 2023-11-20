import {
  Box,
  Button,
  CircularProgress,
  Flex,
  HStack,
  Heading,
  Link,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { useRouter } from "next/router";
import axios from "axios";
import { BACKEND_URL } from "@/Utils/urls";
import endPoints from "@/Utils/endpoints";
import { roles } from "@/Utils/role";
import { setAuthentication } from "@/Reudx/slices/authentication";
import { useDispatch, useSelector } from "react-redux";

const Otp = ({
  text,
  State,
  setState,
  activeStep,
  handlePrevious,
  nextStep,
}) => {
  
  const [test, settest] = useState();
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  const verifyOtp = async () => {
    if (State.otp == "") {
      toast({
        position: "bottom-right",
        title: `Please enter otp`,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    try {
      setState((prev) => {
        return {
          ...prev,
          loading: true,
        };
      });
      const verify = await axios({
        method: "POST",
        url: `${BACKEND_URL}${endPoints.verifyOtp}`,
        data: {
          userId: State.userId,
          otp: parseInt(State.otp),
        },
      });
      if (verify) {
        dispatch(
          setAuthentication({
            role: verify.data.data.role,
            userId: verify.data.data.id,
          })
        );
        // localStorage.setItem("id", verify.data.data.id);
        // localStorage.setItem("role", verify.data.data.role);

        toast({
          position: "bottom-right",
          title: `Email verified successfully`,
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
        // setTimeout(() => {
        if (verify.data.data.role == roles.company) {
          router.push("/company/registration");
        } else {
          // window.location.href = "/candidate/registration";
          router.push("/candidate/registration");

        }
        // }, 1000);
      }
    } catch (err) {
      console.log("err", err);
      const errorMessage = err?.response?.data.message;

      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: errorMessage,
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

  return (
    <Box textAlign={"center"}>
      {/* <button
        onClick={() => {
          console.log("runn")
          settest({

            role:"test",
            userId: "asasas",
          })
          setAuthentication ({
            role:"test",
            userId: "asasas",
          });
        }}
      >
        test
      </button> */}
      <Heading
        as={"p"}
        textAlign={"center"}
        m={{
          "2xl": "60px 0px 76px -62px",
          md: "30px 0px 62px 0px",
          base: "30px 0px 46px 0px",
        }}
        fontWeight={400}
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

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "43px" }}
        pb={"30px"}
        gap={4}
      >
        <Button
          isDisabled={activeStep === 0}
          onClick={handlePrevious}
          variant="outline-blue"
        >
          {" Back"}
        </Button>
        <Button
          // width={{ md: "200px", sm: "180px", base: "130px" }}
          variant={"blue-btn"}
          onClick={verifyOtp}
        >
          {State.loading ? <Loader /> : "Verify"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Otp;
