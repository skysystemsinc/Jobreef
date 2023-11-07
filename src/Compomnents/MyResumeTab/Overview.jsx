import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
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
import white_edit from "@/assets/Images/white-edit.svg";

const Overview = ({ setTabIndex, tabIndex }) => {
  const [state, setState] = useState({
    readOnly: true,
    isEdit: false,
    country: "",
    state: "",
    city: "",
    number: "",
    description: "",
  });
  const router = useRouter();
  return (
    <Box mt={{ md: "30px", base: "16px" }} mb={"40px"} width={{ lg: "60%", base: "100%" }}>
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={state.country}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, country: e.target.value };
              });
            }}
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            dropdown={state.readOnly ? false : true}
            variant={"bg-input"}
            placeholder="Select your home country"
            label={"Country"}
          />
          <LabelInput
            state={state.state}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, state: e.target.value };
              });
            }}
            readOnly={state.readOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Select your state / province"
            label={"State / Province"}
            dropdown={state.readOnly ? false : true}
          />
        </InputWrapper>

        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={state.city}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, city: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            readOnly={state.readOnly}
            variant={"bg-input"}
            placeholder="Enter City"
            label={"City"}
          />
          <LabelInput
            readOnly={state.readOnly}
            labelVariant={"label"}
            state={state.number}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, number: e.target.value };
              });
            }}
            type="number"
            variant={"bg-input"}
            placeholder="Enter your phone number"
            label={"Phone Number"}
          />
        </InputWrapper>
        {/* <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}> */}
        <LabelInput
          state={state.description}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
          labelVariant={"label"}
          readOnly={state.readOnly}
          type="text"
          variant={"bg-teaxtarea"}
          placeholder="Describe yourself for your emoployers"
          textarea
          label={"Summary"}
        />
        {/* </InputWrapper> */}

        <Flex mt="50px" justifyContent={"center"} gap={"30px"}>
          {state.isEdit ? (
            <>
              <Button
                onClick={() => {
                  setState((pre) => {
                    return {
                      isEdit: false,
                      readOnly: true,
                    };
                  });
                }}
                variant="outline-blue"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setState((pre) => {
                    return {
                      isEdit: false,
                      readOnly: true,
                    };
                  });
                }}
                variant={"blue-btn"}
              >
                Save
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                setState((pre) => {
                  return {
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
        </Flex>
      </Box>
    </Box>
  );
};

export default Overview;
