import {
  Avatar,
  AvatarBadge,
  Box,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
const AboutYouTabs = () => {
  return (
    <Box mt={{ md: "91px", lg:'60px', base: "40px" }}>
      {/* <Image src={profile.src} /> */}
      <Box display={"flex"} justifyContent={"center"}>
        <Avatar
          src={profile.src}
          width={{ md: "120px", base: "90px" }}
          height={{ md: "120px", base: "90px" }}
        >
          <FormLabel>
            <AvatarBadge
              boxSize={{ md: "5em", base: "4em" }}
              border={"none"}
              bg="transparent"
            >
              <Image src={edit.src} width={{ md: "30px", base: "20px" }} />
            </AvatarBadge>
            <Input type="file" hidden />
          </FormLabel>
        </Avatar>
      </Box>
      <Box mt={"50px"}>
        <InputWrapper gap={{ xl:"70px", "2xl": "142px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Name"
            label={"First Name"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Last Name"
            label={"Last Name"}
          />
        </InputWrapper>

        <InputWrapper gap={{ xl:"70px", "2xl": "142px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Employer"
            label={"Account Type"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="+92 XXX XXXXXXX"
            label={"Phone Number"}
          />
        </InputWrapper>
      </Box>
    </Box>
  );
};

export default AboutYouTabs;
