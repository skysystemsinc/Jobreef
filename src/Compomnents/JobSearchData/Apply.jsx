// import Image from 'next/image'
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
import { Link } from "@chakra-ui/next-js";
import LabelInput from "@/Compomnents/LabelInput/LabelInput";
import { FcGoogle } from "react-icons/fc";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import { useEffect, useState } from "react";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import microsoft from "@/assets/Images/microsoft.svg";

export default function Apply({object}) {
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
      <Box  width={"100%"} textAlign={"center"}>
        <Box display={"flex"} justifyContent={"center"} mb={"25px"}>
            <Heading>Apply for this job</Heading>
        </Box>
        <Box
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              borderBottom={"1px solid "}
              flexWrap={{ xl: "nowrap", base: "wrap" }}
              borderColor={"gray.400"}
              pb={{ lg: "20px", base: "10px" }}
            >
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                gap={{ md: "18px", base: "12px" }}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  mt={"0px"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                >
                  <Image    
                    width={{ md: "53px", base: "35px" }}
                    src={microsoft.src}
                    marginRight={2}
                  />
                  <Heading
                    variant={"p7"}
                    fontWeight={700}
                    color={"gray.text"}
                  >
                    {object.title}
                    <Box display={"flex"} alignItems={"center"}>
                      <Heading
                        variant={"p4"}
                        color={"gray.text"}
                        marginRight={1}
                      >
                        {object.name}
                      </Heading>
                      <Box
                        ml={1}
                        mt={"4px"}
                        display="flex"
                        alignItems="center"
                      >
                        <ComponentMyChip label={object.tags} />
                      </Box>
                    </Box>
                  </Heading>
                </Box>
                <Image
                  width={"10px"}
                  src={EmptyVector.src}
                  mt={1.5}
                  marginRight={2}
                />
              </Box>
            </Box>
        <Box marginBottom={"20px"}>
          <LabelInput
            state={state.email}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="email"
            variant={"bg-input"}
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
            variant={"bg-input"}
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
            marginBottom={"15px"}
            className="nintoFont"
            variant={"blue-btn"}
            width={{ md: "162px", base: "140px" }}
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
    </>
  );
}



