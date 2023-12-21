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
  RadioGroup,
  Textarea,
  UnorderedList,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot, BsPlusLg } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import Loader from "../Loader/Loader";
import { roles } from "@/Utils/role";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { BACKEND_URL } from "@/Utils/urls";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { httpRequest } from "@/helper/httpRrequest";
import { addCompany } from "@/Reudx/slices/company";
import { post, put } from "@/helper/fetch";
import NextPrevBtn from "./NextPrevBtn";
import { addJob } from "@/Reudx/slices/jobPost";
import CheckBox from "../CheckBox/CheckBox";
import { RiDeleteBin6Line } from "react-icons/ri";
import blueDelete from "@/assets/Images/blueDelete.svg";
import RadioButton from "../RadioButton/RadioButton";
const ScreeningQuestion = ({ disableNextPrev, nextStep, prevStep }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const jobState = useSelector((state) => state.jobPost.value);
  console.log("jobState", jobState);

  let [State, setState] = useState({
    loading: false,
  });

  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");
  const handleDelete = (index) => {
    const updatedLinks = [...jobState.screeningQuestions];
    updatedLinks.splice(index, 1);

    dispatch(addJob({ ...jobState, screeningQuestions: updatedLinks }));
  };
  const handlePlatformChange = (event, index) => {
    let updatedLinks = [...jobState.screeningQuestions];

    updatedLinks[index] = {
      ...updatedLinks[index],
      question: event.target.value,
    };
    dispatch(addJob({ ...jobState, screeningQuestions: updatedLinks }));
  };

  const handleLinkChange = (event, index) => {
    console.log("event", event);
    let updatedLinks = [...jobState.screeningQuestions];
    updatedLinks[index] = { ...updatedLinks[index], type: event.target.value };
    dispatch(addJob({ ...jobState, screeningQuestions: updatedLinks }));
  };
  const handleAnsChange = (value, index) => {
    let updatedLinks = [...jobState.screeningQuestions];
    updatedLinks[index] = {
      ...updatedLinks[index],
      rightAns: value,
    };
    dispatch(addJob({ ...jobState, screeningQuestions: updatedLinks }));
  };

  const handleAddMore = () => {
    const updatedLinks = [...jobState.screeningQuestions];
    updatedLinks.push({
      question: "",
      type: "",
      rightAns: "",
      options: [{ name: "" }, { name: "" }, { name: "" }],
    });
    dispatch(addJob({ ...jobState, screeningQuestions: updatedLinks }));
  };
  const handleChangeOption = (event, index, data, dataIndex) => {
    let updateOptionItem = [...data.options];
    updateOptionItem[index] = {
      ...updateOptionItem[index],
      name: event.target.value,
    };

    let updateOtp = [...jobState.screeningQuestions];
    updateOtp[dataIndex] = {
      ...updateOtp[dataIndex],
      options: updateOptionItem,
    };

    dispatch(addJob({ ...jobState, screeningQuestions: updateOtp }));
  };

  const questionType = ["Short Answer", "Yes/No", "Multiple Choice"];
  const checkBox = ["Yes", "No"];

  return (
    <Box pr={"20px"}>
      {jobState?.screeningQuestions?.map((item, index) => {
        return (
          <>
            <InputWrapper
              style={{ marginBottom: "15px" }}
              key={index}
              gap={"15px"}
            >
              <Box width={"100%"}>
                <LabelInput
                  state={item.question}
                  setState={(e) => handlePlatformChange(e, index)}
                  labelVariant={"label"}
                  type="text"
                  variant={"bg-input"}
                  placeholder="Enter Question"
                  label={""}
                />
              </Box>
              <Box
                width={isSmallerThe500 ? "96%" : "30%"}
                position={"relative"}
              >
                {isSmallerThe500 ? (
                  <LabelInput
                    defaultDropdown
                    dropdown
                    dropdownOption={questionType}
                    state={item.type}
                    setState={(e) => handleLinkChange(e, index)}
                    labelVariant={"label"}
                    type="text"
                    variant={"bg-input"}
                    // readOnly={readOnly}
                    placeholder="Question Type"
                    label={""}
                  />
                ) : (
                  <LabelInput
                    defaultDropdown
                    dropdown
                    dropdownOption={questionType}
                    state={item.type}
                    setState={(e) => handleLinkChange(e, index)}
                    labelVariant={"label"}
                    type="text"
                    variant={"bg-input"}
                    // readOnly={readOnly}
                    placeholder="Question Type"
                    label={""}
                  />
                )}

                <Box
                  sx={{
                    cursor: "pointer",
                    position: "absolute",
                    top: {
                      md: "16px",
                      base: "16px",
                    },
                    right: isSmallerThe500 ? "-30px" : "-30px",
                    fontSize: "23px",
                    color: "#2CA5C3",
                  }}
                >
                  {/* <RiDeleteBin6Line  onClick={() => handleDelete(index)} /> */}
                  <Image
                    width={"18px"}
                    src={blueDelete.src}
                    onClick={() => handleDelete(index)}
                  />
                </Box>
              </Box>
            </InputWrapper>
            <Box
              mb={"20px"}
              borderBottom={"1px solid"}
              borderColor={"gray.100"}
              pb={"20px"}
            >
              {item.type == questionType[0] ? (
                <Input
                  value={item.rightAns}
                  onChange={(e) => handleAnsChange(e.target.value, index)}
                  variant={"bg-input"}
                  placeholder="Enter Preferred Answer"
                />
              ) : item.type == questionType[1] ? (
                <Box>
                  <Box
                    mb={"14px"}
                    display={"flex"}
                    justifyContent={"center"}
                    gap={{ md: "60px", base: "20px" }}
                  >
                    <LabelInput
                      style={{ maxWidth: "130px" }}
                      defaultDropdown
                      state={"Yes"}
                      labelVariant={"label"}
                      type="text"
                      variant={"bg-input"}
                      // readOnly={readOnly}
                      readOnly={true}
                      inputStyle={{ paddingLeft: "56px" }}
                      placeholder="Yes"
                      label={""}
                    />
                    <LabelInput
                      style={{ maxWidth: "130px" }}
                      defaultDropdown
                      state={"No"}
                      inputStyle={{ paddingLeft: "56px" }}
                      labelVariant={"label"}
                      type="text"
                      variant={"bg-input"}
                      // readOnly={readOnly}
                      readOnly={true}
                      placeholder="Yes"
                      label={""}
                    />
                  </Box>

                  <RadioGroup
                    defaultValue={item.rightAns}
                    onChange={(e) => handleAnsChange(e, index)}
                    display={"flex"}
                    justifyContent={"center"}
                    gap={{ md: "60px", base: "30px" }}
                  >
                    <RadioButton value={"Yes"} label={"Preferred Answer"} />
                    <RadioButton value={"No"} label={"Preferred Answer"} />
                  </RadioGroup>
                </Box>
              ) : item.type == questionType[2] ? (
                <Box>
                  <RadioGroup
                    defaultValue="null"
                    onChange={(e) => {
                      handleAnsChange(e, index);
                    }}
                    width={"100%"}
                  >
                    <InputWrapper
                      style={{ marginBottom: "15px" }}
                      key={index}
                      gap={"15px"}
                    >
                      {item?.options?.map((option, ind) => {
                        return (
                          <Box width={"100%"}>
                            <Input
                              mb={"10px"}
                              value={option.name}
                              onChange={(e) =>
                                handleChangeOption(e, ind, item, index)
                              }
                              variant={"bg-input"}
                              placeholder={`Enter option ${ind + 1}`}
                            />
                            <RadioButton
                              value={option.name}
                              label={"Preferred Answer"}
                            />
                          </Box>
                        );
                      })}
                    </InputWrapper>
                  </RadioGroup>
                  {/* <Input
                    value={item.rightAns}
                    onChange={(e) => handleAnsChange(e, index)}
                    variant={"bg-input"}
                    placeholder="Enter right answer"
                  /> */}
                </Box>
              ) : null}
            </Box>
          </>
        );
      })}

      <Button
        onClick={handleAddMore}
        variant={"blue-btn"}
        width={"max-content"}
        px={{ md: "30px", base: "20px" }}
      >
        Add Question
      </Button>

      {/* //option for Question Type */}

      {disableNextPrev ? null : (
        <Box mt={"6em"}>
          <NextPrevBtn handleNext={nextStep} handlePrev={prevStep} />
        </Box>
      )}
    </Box>
  );
};

export default ScreeningQuestion;
