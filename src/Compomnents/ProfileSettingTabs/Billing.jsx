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
import EditProifle from "../EditProifle/EditProifle";
const Billing = () => {
  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);
  const router = useRouter();
  return (
    <Box
      minH={"59vh"}
      display={"flex"}
      alignItems={"flex-end"}
      justifyContent={"center"}
      mt={{ md: "91px", lg: "60px", base: "40px" }}
    >
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
            <Button
              onClick={() => {
                setisEdit(false);
                setreadOnly(true);
              }}
              variant={"blue-btn"}
            >
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

export default Billing;
