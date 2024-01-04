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
import { roles } from "@/Utils/constant";
import axios from "axios";
import endPoints from "@/Utils/endpoints";
import { BACKEND_URL } from "@/Utils/urls";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { httpRequest } from "@/helper/httpRrequest";
import { addCompany } from "@/Redux/slices/company";
import { post, put } from "@/helper/fetch";
import { platformOpt } from "@/schema/stateSchema";

const SocialLink = ({ nextStep, handlePrevious }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.authentication.value);
  let companyState = useSelector((state) => state.companyRegister.value);
  console.log("companyState", companyState);

  let [State, setState] = useState({
    loading: false,
  });

  const [isSmallerThe500] = useMediaQuery("(max-width: 787px)");
  const handleDelete = (index) => {
    const updatedLinks = [...companyState.socialLinks];
    updatedLinks.splice(index, 1);

    dispatch(addCompany({ ...companyState, socialLinks: updatedLinks }));
  };
  const handlePlatformChange = (event, index) => {
    let updatedLinks = [...companyState.socialLinks];

    updatedLinks[index] = {
      ...updatedLinks[index],
      platform: event.target.value,
    };
    dispatch(addCompany({ ...companyState, socialLinks: updatedLinks }));
    // setState((prev) => {
    //   return {
    //     ...prev,
    //     socialLinks: updatedLinks,
    //   };
    // });
  };

  const handleLinkChange = (event, index) => {
    console.log("event", event);
    let updatedLinks = [...companyState.socialLinks];
    updatedLinks[index] = { ...updatedLinks[index], link: event.target.value };
    dispatch(addCompany({ ...companyState, socialLinks: updatedLinks }));

    // setState((prev) => {
    //   return {
    //     ...prev,
    //     socialLinks: updatedLinks,
    //   };
    // });
  };

  const handleAddMore = () => {
    const updatedLinks = [...companyState.socialLinks];
    updatedLinks.push({ platform: "", link: "" });
    dispatch(addCompany({ ...companyState, socialLinks: updatedLinks }));

    // setState((prev) => {
    //   return {
    //     ...prev,
    //     socialLinks: updatedLinks,
    //   };
    // });
    // setFormData(updatedFormData);
  };
  const handleRegister = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const body = {
        userId: isAuthenticated.userId,
        companyName: companyState.companyName,
        industry: companyState.industry,
        directory: companyState.directory,
        noOfEmployees: parseInt(companyState.noOfEmployees),
        yearEstablished: parseInt(companyState.yearEstablished),
        description: companyState.description,
        webUrl: companyState.webLink,
        companyLogo: companyState.logo,
        socialLinks: companyState.socialLinks,
        telePhone: companyState.telePhone,
        VatId: companyState.VatId,
        location: [
          {
            country: companyState.country,
            province: companyState.province,
            city: companyState.city,
            address: companyState.address,
          },
        ],
      };
      const postData = await httpRequest(
        `${BACKEND_URL}${endPoints.company}`,
        "POST",
        body
      );
      console.log("postData", postData);

      if (postData) {
        dispatch(addCompany(postData.data));
        setState((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
        nextStep();
        // handleUserAssociation(postData.data.id);
        // console.log("postData", postData);
      }
    } catch (err) {
      console.log("err", err);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",

        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleUserAssociation = (companyId) => {
    
    const id = isAuthenticated.userId;
    const body = {
      
      ["companyId"]: companyId,
    };
    try {
      const userAssociation = put(`${endPoints.user}/${id}`, body);
   
      if (userAssociation) {
        setState((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
        nextStep();
        // router.push("/company/profile-setting");
      }
    } catch (err) {
      console.log("user error ", err);
    }
  };

  return (
    <Box pr={"20px"}>
      {companyState?.socialLinks.map((item, index) => {
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
              dropdownOption={platformOpt}
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
        <Button onClick={handlePrevious} variant="outline-blue">
          {" Back"}
        </Button>
        <Button
          // width={{ md: "200px", sm: "180px", base: "130px" }}
          variant={"blue-btn"}
          onClick={handleRegister}
        >
          {State.loading ? <Loader /> : "Next"}
        </Button>
      </Flex>
    </Box>
  );
};

export default SocialLink;
