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
import white_edit from "@/assets/Images/white-edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import { roles } from "@/Utils/role";
const AboutYouTabs = () => {
  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);
  const router = useRouter();
  return (
    <Box mt={{ md: "91px", lg: "60px", base: "40px" }}>
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
        <InputWrapper gap={{ xl: "70px", "2xl": "142px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            variant={"bg-input"}
            placeholder="Enter Name"
            label={"First Name"}
          />
          <LabelInput
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
              readOnly={readOnly}
              setreadOnly={setreadOnly}
              type="text"
              variant={"bg-input"}
              placeholder="Employer"
              label={"Account Type"}
            />
          )}

          <LabelInput
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
              variant={"blue-btn"}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                setisEdit(false);
                setreadOnly(true);
              }}
              variant="outline-blue"
            >
              Cancel
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
