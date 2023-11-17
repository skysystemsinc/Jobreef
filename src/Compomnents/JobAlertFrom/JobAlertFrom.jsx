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
const JobAlertFrom = ({ handleSave }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfileSlice.value);

  const [state, setstate] = useState({
    alertFrequency: "",
    alertStatus: "",
    employeeType: "",
    locationtype: "",
    minimumEdu: "",
    maxExperiance: "",
    keyWords: "",
    location: "",
  });

  const [isEdit, setisEdit] = useState(true);
  const [readOnly, setreadOnly] = useState(true);
  const router = useRouter();

  // const handleSave = async () => {
  //   setisEdit(false);
  //   setreadOnly(true);

  // };

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
    <Box mt={{ md: "51px", base: "20px" }}>
      <Box width={{ md: "60%", base: "100%" }} mx={"auto"}>
        <InputWrapper gap={{ xl: "50px", base: "20px" }}>
          <LabelInput
            state={state.alertFrequency}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, alertFrequency: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            dropdown={readOnly ? false : true}
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            variant={"bg-input"}
            placeholder="Select Alert Frequency"
            label={"Alert Frequency"}
          />
          <LabelInput
            state={state.alertStatus}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, alertStatus: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            readOnly={readOnly}
            dropdown={readOnly ? false : true}
            setreadOnly={setreadOnly}
            variant={"bg-input"}
            placeholder="Select Status"
            label={"Alert Status"}
          />
        </InputWrapper>

        <InputWrapper gap={{ xl: "50px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            dropdown={readOnly ? false : true}
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            state={state.employeeType}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, employeeType: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Select Employment Type"
            label={"Employment Type"}
          />

          <LabelInput
            state={state.locationtype}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, locationtype: e.target.value };
              });
            }}
            dropdown={readOnly ? false : true}
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Select Location Type"
            label={"Location Type"}
          />
        </InputWrapper>

        <InputWrapper gap={{ xl: "50px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            dropdown={readOnly ? false : true}
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            state={state.minimumEdu}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, minimumEdu: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Select Minimum Education"
            label={"Education"}
          />

          <LabelInput
            state={state.maxExperiance}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, maxExperiance: e.target.value };
              });
            }}
            dropdown={readOnly ? false : true}
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            labelVariant={"label"}
            type="number"
            variant={"bg-input"}
            placeholder="Select Minimum Experience"
            label={"Experience"}
          />
        </InputWrapper>
        <InputWrapper gap={{ xl: "50px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            state={state.keyWords}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, keyWords: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Search for Jobs, Companies, and Keywords"
            label={"Search Keywords"}
          />

          <LabelInput
            state={state.location}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, location: e.target.value };
              });
            }}
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Search by Location (e.g. Nassau, Bahamas)"
            label={"Search Location"}
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
            <Button onClick={handleSave} variant="outline-blue">
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

export default JobAlertFrom;
