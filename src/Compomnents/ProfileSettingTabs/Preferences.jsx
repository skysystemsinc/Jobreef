import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormLabel,
  Heading,
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
const Preferences = () => {
  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);
  const router = useRouter();
  const dropDownOptions = ["Yes", "No"]

  const [state, setstate] = useState({
    firstName: "",
    lastName: "",
    accountType: "",
    number: "",
    profilePic: false,
  });

  return (
    <Box minH={"58vh"} >
      <Box mt={{ md: "60px" , base:"30px"}}>
        <Heading mb={ { md: "70px" , base:"40px"}} variant={"p7"}  color={"gray.text"}>Receive Email Communications For:</Heading>
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
            dropdownOption={dropDownOptions}
            variant={"bg-input"}
            placeholder="Yes/No"
            dropdown={readOnly ?false:true}
            label={"New job applications received"}
          />
          <LabelInput
            labelVariant={"label"}
            readOnly={true}
            setreadOnly={setreadOnly}
            dropdownOption={dropDownOptions}

            state={state.accountType}
            setState={(e) => {
              setstate((prev) => {
                return { ...prev, accountType: e.target.value };
              });
            }}
            dropdown={readOnly ?false:true}

            type="text"
            variant={"bg-input"}
            placeholder="Yes/No"
            label={"New messages and replies"}
          />
        </InputWrapper>

        <InputWrapper gap={{ xl: "70px", "2xl": "142px", base: "20px" }}>
          <LabelInput
            state={state.lastName}
            dropdownOption={dropDownOptions}

            setState={(e) => {
              setstate((prev) => {
                return { ...prev, lastName: e.target.value };
              });
            }}
            dropdown={readOnly ?false:true}

            labelVariant={"label"}
            type="text"
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            variant={"bg-input"}
            placeholder=" Yes/No"
            label={"Recommendations and insights"}
          />

          <LabelInput
            state={state.number}
            dropdownOption={dropDownOptions}

            setState={(e) => {
              setstate((prev) => {
                return { ...prev, number: e.target.value };
              });
            }}
            dropdown={readOnly ?false:true}

            readOnly={readOnly}
            setreadOnly={setreadOnly}
            labelVariant={"label"}
            type="number"
            variant={"bg-input"}
            placeholder="Yes/No"
            label={" Newsletter and promotions"}
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

export default Preferences;
