import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormLabel,
  Image,
  Input,
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
const AboutYouTabs = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfileSlice.value);

  const [state, setstate] = useState({
    firstName: "",
    lastName: "",
    accountType: "",
    number: "",
    profilePic: false,
  });

  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);
  const router = useRouter();
  const handleEditProfile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected file
      setstate((prev) => {
        return {
          ...prev,
          profilePic: imageURL,
        };
      });
    }
  };

  const handleSave = async () => {
    setisEdit(false);
    setreadOnly(true);
    const response = await axios("/api/company/userProfile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...state },
    });
    console.log("response", response);
  };

  const getData = async () => {
    try {
      const userProfile = await axios({
        method: "GET",
        url: "/api/company/userProfile",
      });
      dispatch(getUserProfile(userProfile.data));
    } catch (err) {}
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  useSkipInitialEffect(() => {
    setstate({
      firstName: userProfile.name,
      lastName: userProfile.lastName,
      accountType: userProfile.accountType,
      number: userProfile.number,
      profilePic: userProfile.profilePic,
    });
  }, [userProfile]);
  return (
    <Box mt={{ md: "91px", lg: "60px", base: "40px" }}>
      <Box display={"flex"} justifyContent={"center"}>
        <EditProifle
          readOnly={readOnly}
          handleEvent={handleEditProfile}
          profile={state.profilePic}
        />
      </Box>
      <Box mt={"50px"}>
        <InputWrapper gap={{ xl: "70px", "2xl": "142px", base: "20px" }}>
          <LabelInput
            state={state.firstName}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, firstName: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            variant={"bg-input"}
            placeholder="Enter Name"
            label={"First Name"}
          />
          <LabelInput
            state={state.lastName}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, lastName: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            variant={"bg-input"}
            placeholder="Enter Last Name"
            label={"Last Name"}
          />
        </InputWrapper>

        <InputWrapper gap={{ xl: "70px", "2xl": "142px", base: "20px" }}>
          {router.pathname.includes(roles.candidate) ? (
            <LabelInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              readOnly={readOnly}
              setreadOnly={setreadOnly}
              dropdown={isEdit ? true : false}
              placeholder="Yes"
              label={"Visible to Employers"}
            />
          ) : (
            <LabelInput
              labelVariant={"label"}
              readOnly={true}
              setreadOnly={setreadOnly}
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
            state={state.number}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, number: e.target.value };
              });
            }}
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="+92 XXX XXXXXXX"
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
        {isEdit ? (
          <>
            <Button
              onClick={() => {
                setisEdit(false);
                setreadOnly(true);
              }}
              variant="outline-blue"
            >
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              Save
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              setisEdit(true);
              setreadOnly(false);
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
