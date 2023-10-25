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

const Skills = () => {
  const [State, setState] = useState({
    links: [{ platform: "", link: "" }],
  });
  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");
  const handleDelete = (index) => {
    const updatedLinks = [...State.links];
    updatedLinks.splice(index, 1);
    // setlinkArray(deleteArray);
    setState((prev) => {
      return {
        ...prev,
        links: updatedLinks,
      };
    });
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

  return (
    <Box pr={"20px"}>
      {State?.links.map((item, index) => {
        return (
          <InputWrapper
            style={{ marginBottom: "15px" }}
            key={index}
            gap={"15px"}
          >
            <LabelInput
              state={item.platform}
              setState={(e) => handlePlatformChange(e, index)}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Name of skill"
              label={"Name"}
            />
            {/* <LabelInput
                state={item.link}
                setState={ (e)=> handleLinkChange(e, index)}
                labelVariant={"label"}
                type="text"
                variant={"bg-input"}
                placeholder="Paste link to company social network page"
                label={"Link"}
              /> */}
            <Box width={isSmallerThe500 ? "96%" : "100%"} position={"relative"}>
              {isSmallerThe500 ? (
                <Input
                  value={item.link}
                  onChange={(e) => handleLinkChange(e, index)}
                  variant={"bg-input"}
                  placeholder="Select level of your skill"
                />
              ) : (
                <LabelInput
                  state={item.link}
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
                <AiOutlineDelete onClick={() => handleDelete(index)} />
              </Box>
            </Box>
          </InputWrapper>
        );
      })}

      {/* <Flex justifyContent={"center"}> */}
      <Button
        onClick={handleaddMore}
        variant={"blue-btn"}
        width={"max-content"}
        px={{ md: "33px", base: "20px" }}
      >
        Add Skill
      </Button>
      {/* </Flex> */}
    </Box>
  );
};

export default Skills;
