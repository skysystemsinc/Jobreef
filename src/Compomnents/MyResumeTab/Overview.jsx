import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
const Overview = ({ setTabIndex, tabIndex }) => {
  const [state, setstate] = useState({
    readOnly: true,
    isEdit: true,
  });
  const router = useRouter();
  return (
    <Box
      mt={{ md: "50px", lg: "60px", base: "20px" }}
      width={{ md: "70%", sm: "100%" }}
    >
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            dropdown
            placeholder="Select your home country"
            label={"Country"}
          />
          <LabelInput
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Select your state / province"
            label={"State / Province"}
            dropdown
          />
        </InputWrapper>

        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            readOnly={state.readOnly}
            variant={"bg-input"}
            placeholder="Select your city"
            dropdown
            label={"City"}
          />
          <LabelInput
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="number"
            variant={"bg-input"}
            placeholder="Enter your phone number"
            label={"Phone Number"}
          />
        </InputWrapper>
        {/* <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}> */}
        <LabelInput
          labelVariant={"label"}
          readOnly={state.readOnly}
          type="text"
          variant={"bg-teaxtarea"}
          placeholder="Describe yourself for your emoployers"
          textarea
          label={"Summary"}
        />
        {/* </InputWrapper> */}

        {/* {isEdit ? (
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
              setstate((pre)=>{
                return{

                }
              })
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
        )} */}

        {/* <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "40px", base: "10px" }}
          my={{ md: "56px", base: "20px" }}
          pb={"39px"}
        >
          <Button
            onClick={() => {
              // tabIndex == 0 ? null : setTabIndex(--tabIndex);
              router.push("/");
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              // tabIndex == 2 ? null : setTabIndex(++tabIndex);
              router.push("/");
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            variant={"blue-btn"}
          >
            Save
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Overview;
