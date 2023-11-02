import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Checkbox,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
const SkillsForm = ({
  handleSave,
  setexperianceData,
  setaddExperiance,
  setTabIndex,
  tabIndex,
  state,
}) => {
  const router = useRouter();
  const [skills, setskills] = useState({
    skillName: "",
    skillLevel: "",
  });
  return (
    <Box
      minH={"60vh"}
      mt={{ md: "30px", base: "16px" }}
      width={{ lg: "60%", base: "100%" }}
    >
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            setState={(e) => {
              setskills((prev) => {
                return {
                  ...prev,
                  skillName: e.target.value,
                };
              });
            }}
            state={skills.skillName}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Name of skill"
            label={" Name"}
          />
          <LabelInput
            setState={(e) => {
              setskills((prev) => {
                return {
                  ...prev,
                  skillLevel: e.target.value,
                };
              });
            }}
            state={skills.skillLevel}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Select level of your skill"
            dropdown
            label={"Level"}
          />
        </InputWrapper>

        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "40px", base: "10px" }}
          my={{ md: "56px", base: "20px" }}
          mt={"50px"}
          pb={"39px"}
        >
          <Button
            onClick={() => {
              handleSave();
            }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              handleSave();
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            // width={"max-content"}
            // px={{ md: "30px", base: "20px" }}

            variant={"blue-btn"}
          >
            {state.edit ?"Update Skill" :" Save Skill"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsForm;
