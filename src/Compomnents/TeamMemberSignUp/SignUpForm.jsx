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
import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { get, put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { setLoginUser } from "@/Reudx/slices/LoginUser";
import { addCompany } from "@/Reudx/slices/company";
const SignUpForm = () => {
  const router = useRouter();
  const { id } = router.query;
  // const [isContinue, setIsContinue] = useState(false);
  const [state, setState] = useState({
    loading:false,
    isContinue:false
  })
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  console.log("formData", formData);
  const profileStyle = {
    width: { md: "100px", base: "70px" },
    height: { md: "100px", base: "70px" },
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const getUser = async () => {
    try {
      const postData = await get(`${endPoints.user}/${id}`);
      if (postData.success) {
        const { data } = postData;
        setFormData({ ...formData, ...postData.data });
        // dispatch(setLoginUser(postData.data));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleUpdateUser = async () => {
    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      
    };
    const postData = await put(
      `${endPoints.user}/${id}`,

      body
    );
    setState((prev) => {
      return {
        ...prev,
        loading: false,
      };
    });
    if (!postData.success) {
      dispatch(addUser({ ...userState }));
    } else {
      nextStep();
      dispatch(addUser({ ...state, userId: postData.data.id }));
    }
    toast({
      position: "bottom-right",
      title: postData.message,
      status: postData.success ? "success" : "error",
      variant: "subtle",
      isClosable: true,
    });
  };
  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [router.query]);
  return (
    <Box mt={{ base: "34px" }}>
      {state.isContinue ? (
        <Box mt={{ md: "60px", base: "40px" }}>
          <ConfirmationBox
            description={
              "Thank you for signing up! You can login and begin posting jobs on behalf of your company!"
            }
          />

          <Flex mt={{ md: "150px", base: "50px" }} justifyContent={"center"}>
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
              <EditProifle
                profileStyle={profileStyle}
                profile={formData.profilePic}
              />
            </Box>
            <Box>
              <Heading variant={"p6"}>
                {`${formData?.firstName} `} {`${formData?.lastName}`}
              </Heading>
              <Box
                display={"flex"}
                alignItems={"center"}
                mt={{ md: "14px", base: "6px" }}
                gap={{ md: "52px", base: "20px" }}
              >
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image src={company.src} width={"25px"} />
                  <Heading variant={"p7"} color={"gray.light"} fontWeight={400}>
                    {formData?.company?.companyName}
                  </Heading>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image src={email.src} width={"25px"} />
                  <Heading variant={"p7"} color={"gray.light"} fontWeight={400}>
                    {formData?.email}
                    {/* charles@jobreef.com */}
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
                state={formData.password}
                setState={handleChange}
                name={"password"}
                labelVariant={"label"}
                type="text"
                passwordInput
                variant={"bg-input"}
                placeholder="Enter your Password"
                label={"Enter Password"}
              />
              <LabelInput
                labelVariant={"label"}
                type="text"
                state={formData.confirmPassword}
                setState={handleChange}
                name={"confirmPassword"}
                passwordInput
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
                state={formData.phoneNumber}
                setState={handleChange}
                name={"phoneNumber"}
                labelVariant={"label"}
                type="number"
                variant={"bg-input"}
                placeholder="Enter your Phone Number"
                label={"Phone Number"}
              />
              <LabelInput
                state={formData.jobTitle}
                setState={handleChange}
                name={"jobTitle"}
                labelVariant={"label"}
                type="text"
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
                setIsContinue(true);
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
