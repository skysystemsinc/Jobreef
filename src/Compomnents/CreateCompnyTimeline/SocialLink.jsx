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

const SocialLink = ({ nextStep, handlePrevious }) => {
  const toast = useToast();
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authentication.value);
  let companyState = useSelector((state) => state.companyRegister.value);
  console.log("companyState", companyState);

  let [State, setState] = useState({
    loading: false,
  });

  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");
  const handleDelete = (index) => {
    const updatedLinks = [...companyState.links];
    updatedLinks.splice(index, 1);

    dispatch(addCompany({ ...companyState, links: updatedLinks }));
  };
  const handlePlatformChange = (event, index) => {
    let updatedLinks = [...companyState.links];

    updatedLinks[index] = {
      ...updatedLinks[index],
      platform: event.target.value,
    };
    dispatch(addCompany({ ...companyState, links: updatedLinks }));
  };

  const handleLinkChange = (event, index) => {
    let updatedLinks = [...companyState.links];
    updatedLinks[index] = { ...updatedLinks[index], link: event.target.value };
    dispatch(addCompany({ ...companyState, links: updatedLinks }));
  };

  const handleAddMore = () => {
    const updatedLinks = [...companyState.links];
    updatedLinks.push({ platform: "", link: "" });
    dispatch(addCompany({ ...companyState, links: updatedLinks }));
  };

  const handleCancel = () => {
    router.push("/operator/companies");
  };
  const handleCreate = () => {
    router.push("/operator/companies");
  };
  return (
    <Box pr={"20px"}>
      {companyState?.links.map((item, index) => {
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

      <Button
        onClick={handleAddMore}
        variant={"blue-btn"}
        width={"max-content"}
        px={{ md: "30px", base: "20px" }}
      >
        Add More
      </Button>
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "43px" }}
        pb={"30px"}
        gap={4}
      >
        <Button onClick={handleCancel} variant="outline-blue">
          {" Cancel"}
        </Button>
        <Button
          // width={{ md: "200px", sm: "180px", base: "130px" }}
          variant={"blue-btn"}
          onClick={handleCreate}
        >
          {State.loading ? <Loader /> : id ? "Update" : "Create"}
        </Button>
      </Flex>
    </Box>
  );
};

export default SocialLink;
