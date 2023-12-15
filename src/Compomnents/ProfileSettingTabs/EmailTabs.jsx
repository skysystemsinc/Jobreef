import { Box, Button, Heading, Image, useToast } from "@chakra-ui/react";
import LabelInput from "../LabelInput/LabelInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
import { useRef, useState } from "react";
import white_edit from "@/assets/Images/white-edit.svg";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";

import { httpRequest } from "@/helper/httpRrequest";
import { BACKEND_URL } from "@/Utils/urls";
import endPoints from "@/Utils/endpoints";
import { setLoginUser } from "@/Reudx/slices/LoginUser";
import Loader from "../Loader/Loader";
import { put } from "@/helper/fetch";
import Otp from "./Otp";

const EmailTabs = () => {
  const loginUser = useSelector((state) => state.LoginUser.value);
  const dispatch = useDispatch();
  const toast = useToast();
  const [state, setState] = useState({
    email: loginUser.email,
    isEdit: false,
    readOnly: true,
    loading: false,
    otp: false,
  });

  const inputRef = useRef();
  const handleEdit = () => {
    setState((prev) => {
      return {
        ...prev,
        isEdit: true,
        readOnly: false,
      };
    });
  };
  const handleSave = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    const id = localStorage.getItem("id");
    const body = {
      email: state.email,
      userId: id,
    };
    try {
      const postData = await put(
        `${endPoints.resendOtp}`,

        body
      );
      if (postData.success) {
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            readOnly: true,
            isEdit: false,
            otp: true,
          };
        });
      }
      toast({
        position: "bottom-right",
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (error) {
      setState((prev) => {
        return {
          ...prev,
          loading: false,
          isEdit: false,
          readOnly: true,
        };
      });
    }
  };
  const handleCancel = () => {
    setState((prev) => {
      return {
        ...prev,
        isEdit: false,
        readOnly: true,
        otp: false,
      };
    });
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
  useSkipInitialEffect(() => {
    if (loginUser) {
      setState((prev) => {
        return {
          ...prev,
          email: loginUser.email,
        };
      });
    }
  }, [loginUser]);
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {state.isEdit ? (
        <Heading
          textAlign={"center"}
          mt={{ md: "40px", base: "20px" }}
          variant={"p6"}
        >
          Change Email
        </Heading>
      ) : null}

      {state.otp ? (
        // <OtpBox handleCancel={handleCancel} />
        <Box mt={{ md: "20px", base: "0px" }}>
          <Otp
            emailChange
            email={state.email}
            handlePrevious={handleCancel}
            setOtpState={setState}
            text={"Please enter the 4 digit code sent to your email"}
          />
        </Box>
      ) : (
        <Box
          mt={{ md: "40px", base: "20px" }}
          minHeight={"44vh"}
          width={{ md: "564px", base: "100%" }}
        >
          <LabelInput
            showEndLable
            readOnly={state.readOnly}
            handleEdit={handleEdit}
            labelVariant={"label"}
            type="text"
            inputRef={inputRef}
            variant={"shadow-input"}
            iconStyle={{ marginTop: "7px" }}
            placeholder="Enter email"
            label={"Email"}
            state={state.email}
            name={"email"}
            setState={handleChange}
            icon={
              <Image
                width={{ md: "17px", base: "15px" }}
                src={edit_outline.src}
              />
            }
          />
        </Box>
      )}

      {state.isEdit ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "20px", base: "10px" }}
        >
          <Button onClick={handleCancel} variant="outline-blue">
            Cancel
          </Button>
          <Button onClick={handleSave} variant={"blue-btn"}>
            {state.loading ? <Loader /> : "Save"}
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

export default EmailTabs;
