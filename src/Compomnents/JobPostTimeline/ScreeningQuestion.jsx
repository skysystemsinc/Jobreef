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

const ScreeningQuestion = ({ disableNextPrev, nextStep, prevStep }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const jobState = useSelector((state) => state.jobPost.value);

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

  const handleAddMore = () => {
    const updatedLinks = [...jobState.screeningQuestions];
    updatedLinks.push({ question: "", type: "" });
    dispatch(addJob({ ...jobState, screeningQuestions: updatedLinks }));
  };

  return (
    <Box pr={"20px"}>
      {jobState?.screeningQuestions.map((item, index) => {
        return (
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
            <Box width={isSmallerThe500 ? "96%" : "30%"} position={"relative"}>
              {isSmallerThe500 ? (
                <Input
                  dropdown
                  value={item.type}
                  defaultDropdown
                  onChange={(e) => handleLinkChange(e, index)}
                  variant={"bg-input"}
                  placeholder="Question Type"
                />
              ) : (
                <LabelInput
                  defaultDropdown
                  dropdown
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
                    base: "9px",
                  },
                  right: isSmallerThe500 ? "-30px" : "-30px",
                  fontSize: "23px",
                  color: "#2CA5C3",
                }}
              >
                <AiOutlineDelete onClick={() => handleDelete(index)} />
              </Box>
            </Box>
          </InputWrapper>
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

      {disableNextPrev ? null : (
        <Box mt={"6em"}>
          <NextPrevBtn handleNext={nextStep} handlePrev={prevStep} />
        </Box>
      )}
    </Box>
  );
};

export default ScreeningQuestion;
