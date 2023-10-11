import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
const Overview = ({setTabIndex , tabIndex}) => {
  const router = useRouter()
  return (
    <Box mt={{ md: "50px", lg: "60px", base: "20px" }} width={{md:"70%", sm:"100%"}}  >
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            dropdown
            placeholder="Select your home country"
            label={"Country"}
          />
          <LabelInput
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
            variant={"bg-input"}
            placeholder="Select your city"
            dropdown
            label={"City"}
          />
          <LabelInput
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
          type="text"
          variant={"bg-teaxtarea"}
          placeholder="Describe yourself for your emoployers"
          textarea
          label={"Summary"}
        />
        {/* </InputWrapper> */}

        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "40px", base: "10px" }}
          my={{ md: "56px", base: "20px" }}
          pb={"39px"}
        >
          <Button
            onClick={() => {
              // tabIndex == 0 ? null : setTabIndex(--tabIndex);
              router.push("/")
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            variant="outline-blue"
          >
            Cencel
          </Button>

          <Button
            onClick={() => {
              // tabIndex == 2 ? null : setTabIndex(++tabIndex);
              router.push("/")

            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            variant={"blue-btn"}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
