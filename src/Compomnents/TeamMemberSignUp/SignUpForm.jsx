import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import white_edit from "@/assets/Images/white-edit.svg";
import company from "@/assets/Images/company.svg";
import email from "@/assets/Images/email.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import { roles } from "@/Utils/role";
import EditProifle from "../EditProifle/EditProifle";
import ConfirmationBox from "../ConfirmationBox/ConfirmationBox";
const SignUpForm = () => {
  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);
  const [isCountinue, setisCountinue] = useState(false);
  const router = useRouter();
  const profileStyle = {
    width: { md: "100px", base: "70px" },
    height: { md: "100px", base: "70px" },
  };
  return (
    <Box mt={{ base: "34px" }}>
      {isCountinue ? (
        <Box  mt={{ md: "60px" , base:"40px"}}>
          <ConfirmationBox
            description={
              "Thank you for signing up! You can login and begin posting jobs on behalf of your company!"
            }
          />

          <Flex mt={{ md: "150px" , base:'50px'}} justifyContent={"center"}>
            <Button onClick={() => router.push("/")} variant={"blue-btn"}>
              Login
            </Button>
          </Flex>
        </Box>
      ) : (
        <>
          <Box
            display={"flex"}
            justifyContent={"center"}
            // flexWrap={{ md: "nowrap", base: "wrap" }}
            flexDirection={{ sm: "row", base: "column" }}
            textAlign={{ sm: "start", base: "center" }}
            alignItems={"center"}
            gap={{ md: "25px", base: "10px" }}
          >
            <Box>
              <EditProifle profileStyle={profileStyle} profile={profile} />
            </Box>
            <Box>
              <Heading variant={"p6"}>Charles Cartwright</Heading>
              <Box
                display={"flex"}
                alignItems={"center"}
                mt={{ md: "14px", base: "6px" }}
                gap={{ md: "52px", base: "20px" }}
              >
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image src={company.src} width={"25px"} />
                  <Heading variant={"p7"} color={"gray.light"} fontWeight={400}>
                    Jobreef
                  </Heading>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image src={email.src} width={"25px"} />
                  <Heading variant={"p7"} color={"gray.light"} fontWeight={400}>
                    charles@jobreef.com
                  </Heading>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={"50px"}>
            <InputWrapper
              style={{
                gap: { md: "30px", base: "15px" },
                marginBottom: { md: "20px", base: "15px" },
              }}
            >
              <LabelInput
                labelVariant={"label"}
                type="text"
                readOnly={readOnly}
                passworInput
                setreadOnly={setreadOnly}
                variant={"bg-input"}
                placeholder="Enter your Password"
                label={"Enter Password"}
              />
              <LabelInput
                labelVariant={"label"}
                type="text"
                passworInput
                readOnly={readOnly}
                setreadOnly={setreadOnly}
                variant={"bg-input"}
                placeholder="Enter your Password"
                label={"Confirm Password"}
              />
            </InputWrapper>
            <InputWrapper
              style={{
                gap: { md: "30px", base: "15px" },
                marginBottom: { md: "20px", base: "15px" },
              }}
            >
              <LabelInput
                labelVariant={"label"}
                type="number"
                readOnly={readOnly}
                setreadOnly={setreadOnly}
                variant={"bg-input"}
                placeholder="Enter your Phone Number"
                label={"Mobile Number"}
              />
              <LabelInput
                labelVariant={"label"}
                type="text"
                passworInput
                readOnly={readOnly}
                setreadOnly={setreadOnly}
                variant={"bg-input"}
                placeholder="Enter your Job Title"
                label={"Job Title"}
              />
            </InputWrapper>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={{ md: "20px", base: "10px" }}
            // my={{ md: "96px", base: "20px" }}
            mt={{ md: "60px", base: "30px" }}
          >
            <Button
              onClick={() => {
                setisCountinue(true);
              }}
              variant={"blue-btn"}
              display={"flex"}
              alignItems={"center"}
              gap={"7px"}
            >
              Continue
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SignUpForm;
