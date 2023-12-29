import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  Textarea,
  UnorderedList,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot, BsPlusLg } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { skills, skillsLevel } from "@/schema/stateSchema";
import { useDispatch, useSelector } from "react-redux";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import endPoints from "@/Utils/endpoints";
import { post, put } from "@/helper/fetch";
import { addEmployee } from "@/Redux/slices/employee";
import Loader from "../Loader/Loader";

const Skills = ({ prevStep, nextStep }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(employeeState?.skills);
  console.log("formData", formData);
  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");
  const handleDelete = (index) => {
    const updatedLinks = [...formData];
    updatedLinks.splice(index, 1);

    setFormData((prev) => {
      return updatedLinks;
    });
  };
  const handlePlatformChange = (event, index) => {
    let updatedLinks = [...formData];
    // updatedLinks[index].name = event.target.value;
    updatedLinks[index] = { ...updatedLinks[index], name: event.target.value };

    setFormData((prev) => {
      return updatedLinks;
    });
  };

  const handleLinkChange = (event, index) => {
    let updatedLinks = [...formData];
    // updatedLinks[index].level = event.target.value;
    updatedLinks[index] = { ...updatedLinks[index], level: event.target.value };

    setFormData((prev) => {
      return updatedLinks;
    });
  };

  const handleAddMore = () => {
    const updatedLinks = [...formData];
    updatedLinks.push({ name: "", level: "" });
    setFormData((prev) => {
      return updatedLinks;
    });
  };
  const handleNext = async () => {
    setLoading(true);
    if (loading) return;
    const modifyPayload = formData.map((item) => {
      return {
        name: item.name,
        level: item.level,
        employeeId: employeeState.id,
      };
    });

    try {
      const postData = await post(
        `${endPoints.employee}/${endPoints.employeeSkills}/${employeeState.id}`,
        modifyPayload
      );
      if (postData.success) {
        nextStep();

        setLoading(false);
        setFormData(postData.data);
        dispatch(
          addEmployee({
            ...employeeState,
            skills: postData.data,
          })
        );
      }
      toast({
        position: "bottom-right",
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (err) {
      console.log("err", err);
      setLoading(false);
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

  return (
    <Box pr={"20px"}>
      {formData?.map((item, index) => {
        return (
          <InputWrapper
            style={{ marginBottom: "15px" }}
            key={index}
            gap={"15px"}
          >
            <LabelInput
              state={item.name}
              setState={(e) => handlePlatformChange(e, index)}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Name of skill"
              label={"Name"}
            />
            <Box width={isSmallerThe500 ? "96%" : "100%"} position={"relative"}>
              {isSmallerThe500 ? (
                <Input
                  value={item.level}
                  onChange={(e) => handleLinkChange(e, index)}
                  variant={"bg-input"}
                  placeholder="Select level of your skill"
                />
              ) : (
                <LabelInput
                  dropdownOption={skillsLevel}
                  state={item.level}
                  setState={(e) => handleLinkChange(e, index)}
                  labelVariant={"label"}
                  type="text"
                  variant={"bg-input"}
                  // readOnly={readOnly}
                  dropdown
                  placeholder="Select level of your skill"
                  label={"Level"}
                />
              )}

              <Box
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  top: {
                    "2xl": "65px ",
                    xl: "37px",
                    lg: "37px",
                    sm: "9px",
                    base: "9px",
                  },
                  right: isSmallerThe500 ? "-30px" : "-30px",
                  fontSize: "23px",
                  color: "#2CA5C3",
                }}
              >
                <AiOutlineDelete
                  onClick={() =>
                    formData.length > 1 ? handleDelete(index) : null
                  }
                />
              </Box>
            </Box>
          </InputWrapper>
        );
      })}

      {/* <Flex justifyContent={"center"}> */}
      <Button
        onClick={formData.length < 5 ? handleAddMore : null}
        variant={"blue-btn"}
        width={"max-content"}
        px={{ md: "33px", base: "20px" }}
      >
        Add Skill
      </Button>

      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "3px" }}
        pb={"30px"}
        gap={4}
      >
        <>
          <Button onClick={prevStep} variant="outline-blue">
            {" Back"}
          </Button>
          <Button onClick={handleNext} variant={"blue-btn"}>
            {loading ? <Loader /> : "Next"}
          </Button>
        </>
      </Flex>
      {/* </Flex> */}
    </Box>
  );
};

export default Skills;
