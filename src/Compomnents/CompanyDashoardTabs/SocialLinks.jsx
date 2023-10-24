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

const SocialLink = () => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");

  const companyProfile = useSelector((state) => state.companyProfile.value);

  const [State, setState] = useState({
    links: [
      {
        platform: "",
        link: "",
      },
    ],
  });

  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);
  const handleDelete = (index) => {
    const updatedLinks = [...State.links];
    updatedLinks.splice(index, 1);

    setState((prev) => {
      return {
        ...prev,
        links: updatedLinks,
      };
    });
  };
  const handleEdit = () => {
    setreadOnly(false);
    setisEdit(true);
  };
  const handleSave = async () => {
    const response = await axios("/api/company/companyProfile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...State },
    });
    console.log("response", response);
    setreadOnly(true);
    setisEdit(false);
  };
  const handleCancel = () => {
    setreadOnly(true);
    setisEdit(false);
  };

  const handlePlatformChange = (event, index) => {
    let updatedLinks = [...State.links];
    updatedLinks[index].platform = event.target.value;
    setState((prev) => {
      return {
        ...prev,
        links: updatedLinks,
      };
    });
  };

  const handleLinkChange = (event, index) => {
    let updatedLinks = [...State.links];
    updatedLinks[index].link = event.target.value;
    setState((prev) => {
      return {
        ...prev,
        links: updatedLinks,
      };
    });
  };

  const handleaddMore = () => {
    const updatedLinks = [...State.links];
    updatedLinks.push({ platform: "", link: "" });
    setState((prev) => {
      return {
        ...prev,
        links: updatedLinks,
      };
    });
    // setFormData(updatedFormData);
  };
  useSkipInitialEffect(() => {
    setState({
      links: companyProfile.links,
    });
  }, [companyProfile]);

  return (
    <Box minH={"55vh"} mt={{ md: "60px", base: "10px" }}>
      {State?.links?.map((item, index) => {
        return (
          <InputWrapper key={index} gap={"15px"}>
            <LabelInput
              state={item.platform}
              setState={(e) => handlePlatformChange(e, index)}
              readOnly={readOnly}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Select Platform"
              dropdown={readOnly ? false : true}
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
                  readOnly={readOnly}
                  placeholder="Paste link to company social network page"
                  label={"Link"}
                />
              )}
              {isEdit ? (
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

      {isEdit ? (
        <Button onClick={handleaddMore} variant={"blue-btn"}>
          Add More
        </Button>
      ) : null}

      {isEdit ? (
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
            Save
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
