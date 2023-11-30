import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormLabel,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import white_edit from "@/assets/Images/white-edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import { roles } from "@/Utils/role";
import EditProifle from "../EditProifle/EditProifle";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "@/Reudx/slices/userProfileSlice";
import axios from "axios";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import { BACKEND_URL } from "@/Utils/urls";
import { httpRequest } from "@/helper/httpRrequest";
import endPoints from "@/Utils/endpoints";
import { setLoginUser } from "@/Reudx/slices/LoginUser";
import Loader from "../Loader/Loader";
const AboutYouTabs = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const loginUser = useSelector((state) => state.LoginUser.value);

  const [state, setState] = useState({
    ...loginUser,
    loading: false,
    readOnly: true,
  });
  
  const router = useRouter();
  const handleEditProfile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected file
      setState((prev) => {
        return {
          ...prev,
          profilePic: imageURL,
        };
      });
    }
  };

  const handleSave = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    if (state.loading) return;
    const id = localStorage.getItem("id");

    const body = {
      firstName: state.firstName,
      lastName: state.lastName,
      accountType: state.accountType,
      phoneNumber: parseInt(state.phoneNumber),
      profilePic: state.profilePic,
    };
    try {
      const postData = await httpRequest(
        `${BACKEND_URL}${endPoints.user}/${id}`,
        "PUT",
        body
      );
      if (postData.success) {
        const { data } = postData;
        localStorage.setItem("id", data.id);
        dispatch(setLoginUser(postData.data));

        toast({
          position: "bottom-right",
          title: postData.message,
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
      }
      setState((prev) => {
        return {
          ...prev,
          loading: false,
          readOnly: true,
        };
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
  useSkipInitialEffect(() => {
    if (loginUser) {
      setState({ ...loginUser, loading: false, readOnly: true });
    }
  }, [loginUser]);
  return (
    <Box mt={{ md: "91px", lg: "60px", base: "40px" }}>
      <Box display={"flex"} justifyContent={"center"}>
        <EditProifle
          readOnly={state.readOnly}
          handleEvent={handleEditProfile}
          profile={state.profilePic}
        />
      </Box>
      <Box mt={"50px"}>
        <InputWrapper gap={{ xl: "70px", "2xl": "142px", base: "20px" }}>
          <LabelInput
            state={state.firstName}
            setState={handleChange}
            name={"firstName"}
            labelVariant={"label"}
            type="text"
            readOnly={state.readOnly}
            variant={"bg-input"}
            placeholder="Enter Name"
            label={"First Name"}
          />
          <LabelInput
            state={state.lastName}
            setState={handleChange}
            name={"lastName"}
            labelVariant={"label"}
            type="text"
            readOnly={state.readOnly}
            variant={"bg-input"}
            placeholder="Enter Last Name"
            label={"Last Name"}
          />
        </InputWrapper>

        <InputWrapper gap={{ xl: "70px", "2xl": "142px", base: "20px" }}>
          {loginUser.role == roles.employee ? (
            <LabelInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              readOnly={state.readOnly}
              // setreadOnly={setreadOnly}
              dropdown
              state={state.accountType}
              setState={handleChange}
              name={"accountType"}
              placeholder="Yes"
              imoptnatIcon
              label={"Visible to Employers"}
            />
          ) : (
            <LabelInput
              labelVariant={"label"}
              readOnly={true}
              // setreadOnly={setreadOnly}

              state={state.accountType}
              setState={(e) => {
                setstate((prev) => {
                  return { ...prev, accountType: e.target.value };
                });
              }}
              type="text"
              variant={"bg-input"}
              placeholder="Employer"
              label={"Account Type"}
            />
          )}

          <LabelInput
            state={state.phoneNumber}
            setState={handleChange}
            name={"phoneNumber"}
            readOnly={state.readOnly}
            // setreadOnly={setreadOnly}
            labelVariant={"label"}
            type="number"
            variant={"bg-input"}
            placeholder="Enter your phone number"
            label={"Phone Number"}
          />
        </InputWrapper>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={{ md: "20px", base: "10px" }}
        // my={{ md: "96px", base: "20px" }}
        mt={{ md: "90px", base: "60px" }}
        mb={"30px"}
        pb={"39px"}
      >
        {state.isEdit ? (
          <>
            <Button
              onClick={() => {
                setState((prev) => {
                  return {
                    ...prev,
                    isEdit: false,
                    readOnly: true,
                  };
                });
              }}
              variant="outline-blue"
            >
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              {state.loading ? <Loader /> : "Save"}
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              setState((prev) => {
                return {
                  ...prev,
                  isEdit: true,
                  readOnly: false,
                };
              });
            }}
            variant={"blue-btn"}
            display={"flex"}
            alignItems={"center"}
            gap={"7px"}
          >
            <Image mt={"3px"} src={white_edit.src} width={"18px"} />
            Edit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default AboutYouTabs;
