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
import IconButton from "../IconButton/IconButton";
import white_edit from "@/assets/Images/white-edit.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import Loader from "../Loader/Loader";
import { put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";

const SocialLink = () => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");
  const companyState = useSelector((state) => state.companyRegister.value);
const toast = useToast()
  const [state, setState] = useState({
    isEdit: false,
    readOnly: true,
  });
  const [formData, setFormData] = useState(companyState);
  console.log("formData", formData);

  const handleCancel = () => {
    setState((prev) => {
      return {
        ...prev,
        isEdit: false,
        readOnly: true,
      };
    });
  };
  const handleEdit = () => {
    setState((prev) => {
      return {
        ...prev,
        isEdit: true,
        readOnly: false,
      };
    });
  };
  const handleSave = async () => {
    if (state.loading) return;
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    const body = {
      socialLinks:formData.socialLinks
    };
    delete body.id;
    try {
      const postData = await put(
        `${endPoints.company}/${companyState.id}`,

        body
      );
      if (postData.success) {
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            readOnly: true,
            isEdit: false,
          };
        });
      }
      toast({
        position: "bottom-right",
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (error) {
      setState((prev) => {
        return {
          ...prev,
          loading: false,
          isEdit: false,
          readOnly: true,
        };
      });
    }
  };
  const handleDelete = (index) => {
    const updatedLinks = [...formData.socialLinks];
    updatedLinks.splice(index, 1);

    setFormData((prev) => {
      return {
        ...prev,
        socialLinks: updatedLinks,
      };
    });
  };
  const handlePlatformChange = (event, index) => {
    let updatedLinks = [...formData.socialLinks];
    updatedLinks[index] = {
      ...updatedLinks[index],
      platform: event.target.value,
    };
    setFormData((prev) => {
      return {
        ...prev,
        socialLinks: updatedLinks,
      };
    });
  };

  const handleLinkChange = (event, index) => {
    let updatedLinks = [...formData.socialLinks];
    updatedLinks[index] = { ...updatedLinks[index], link: event.target.value };

    setFormData((prev) => {
      return {
        ...prev,
        socialLinks: updatedLinks,
      };
    });
  };

  const handleAddMore = () => {
    const updatedLinks = [...formData.socialLinks];
    updatedLinks.push({ platform: "", link: "" });
    setFormData((prev) => {
      return {
        ...prev,
        socialLinks: updatedLinks,
      };
    });
    // setFormData(updatedFormData);
  };
  useSkipInitialEffect(() => {
    if (companyState) {
      setFormData(companyState);
    }
  }, [companyState]);

  return (
    <Box minH={"55vh"} mt={{ md: "50px", base: "10px" }}>
      {formData?.socialLinks?.map((item, index) => {
        return (
          <InputWrapper key={index} gap={"15px"}>
            <LabelInput
              state={item.platform}
              setState={(e) => handlePlatformChange(e, index)}
              readOnly={state.readOnly}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Select Platform"
              dropdown={state.readOnly ? false : true}
              label={"Social Links"}
            />
            {/* <LabelInput
              state={item.link}
              setState={(e) => handleLinkChange(e, index)}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              readOnly={readOnly}
              placeholder="Paste link to company social network page"
              label={"Link"}
            /> */}
            <Box width={isSmallerThe500 ? "96%" : "100%"} position={"relative"}>
              {isSmallerThe500 ? (
                <Input
                  value={item.link}
                  onChange={(e) => handleLinkChange(e, index)}
                  variant={"bg-input"}
                  placeholder="Paste link to company social network page"
                />
              ) : (
                <LabelInput
                  state={item.link}
                  setState={(e) => handleLinkChange(e, index)}
                  labelVariant={"label"}
                  type="text"
                  variant={"bg-input"}
                  readOnly={state.readOnly}
                  placeholder="Paste link to company social network page"
                  label={"Link"}
                />
              )}
              {state.isEdit ? (
                <Box
                  sx={{
                    cursor: "pointer",
                    position: "absolute",

                    right: isSmallerThe500 ? "-30px" : "-30px",
                    fontSize: "23px",
                    color: "#2CA5C3",
                    top: {
                      "2xl": "65px ",
                      xl: "41px",
                      lg: "40px",
                      sm: "9px",
                      base: "9px",
                    },
                  }}
                >
                  <AiOutlineDelete onClick={() => handleDelete(index)} />
                </Box>
              ) : null}
            </Box>
          </InputWrapper>
        );
      })}

      {state.isEdit ? (
        <Button onClick={handleAddMore} variant={"blue-btn"}>
          Add More
        </Button>
      ) : null}

      {state.isEdit ? (
        <Flex
          gap={"20px"}
          mt={{ md: "122px", base: "60px" }}
          mb={"70px"}
          justifyContent={"center"}
        >
          <Button onClick={handleCancel} variant="outline-blue">
            Cancel
          </Button>
          <Button onClick={handleSave} variant={"blue-btn"}>
            { state.loading? <Loader/>:"Save"}
          </Button>
        </Flex>
      ) : (
        <Flex
          gap={"20px"}
          mt={{ md: "82px", base: "50px" }}
          mb={"70px"}
          justifyContent={"center"}
        >
          <IconButton
            variant={"blue-btn"}
            iconSize="18px"
            btnLabel={"Edit"}
            handleEvent={handleEdit}
            icon={white_edit}
          />
        </Flex>
      )}
    </Box>
  );
};

export default SocialLink;
