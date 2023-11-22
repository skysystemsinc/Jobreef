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
import { httpRequest } from "@/helper/httpRrequest";
import { addUser } from "@/Reudx/slices/userRegistration";
import { registration } from "@/schema/stateSchema";

const Otp = ({
  text,
  // State,
  // setState,
  activeStep,
  handlePrevious,
  nextStep,
}) => {
  const userState = useSelector((state) => state.userRegistration.value);
  const [otp, setOtp] = useState("");
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    otp: "",
    loading: false,
  });
  const verifyOtp = async () => {
    if (state.otp === "") {
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
      const body = {
        userId: userState.userId,
        otp: parseInt(state.otp),
      };
      const verify = await httpRequest(
        `${BACKEND_URL}${endPoints.verifyOtp}`,
        "POST",
        body
      );
     
      if (verify.success) {
        dispatch(addUser(registration));
        dispatch(
          setAuthentication({
            role: verify?.data?.role,
            userId: verify?.data?.id,
          })
        );
        toast({
          position: "bottom-right",
          title: verify.message,
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
        if (verify?.data?.role == roles.company) {
          router.push("/company/registration");
        } else {
          router.push("/candidate/registration");
        }
      } else {
        toast({
          position: "bottom-right",
          title: verify.message,
          status: "error",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
      }
    } catch (err) {
      console.log("err", err);

      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: "Error!",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

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
        fontWeight={400}
        whiteSpace={{ lg: "nowrap", base: "wrap" }}
        variant={"p11"}
      >
        {/* Please enter the 4 digit code sent to your email */}
        {text}
      </Heading>
      <HStack gap={"15px"} display={"flex"} justifyContent={"center"}>
        <PinInput
          value={state.otp}
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
          {state.loading ? <Loader /> : "Verify"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Otp;
