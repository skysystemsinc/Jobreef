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

const SocialLink = ({ State, setState }) => {
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
              placeholder="Select Platform"
              dropdown
              label={"Social Links"}
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
                  placeholder="Paste link to company social network page"
                />
              ) : (
                <LabelInput
                  state={item.link}
                  setState={(e) => handleLinkChange(e, index)}
                  labelVariant={"label"}
                  type="text"
                  variant={"bg-input"}
                  // readOnly={readOnly}
                  placeholder="Paste link to company social network page"
                  label={"Link"}
                />
              )}

              <Box
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  top: {
                 
                    md: "37px",
                
                    // sm: "9px",
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
        px={{ md: "30px", base: "20px" }}
      >
        Add More
      </Button>
      {/* </Flex> */}
    </Box>
  );
};

export default SocialLink;
