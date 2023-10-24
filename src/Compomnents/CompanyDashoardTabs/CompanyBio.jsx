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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Link } from "@chakra-ui/next-js";
import { BsDot } from "react-icons/bs";
import upload from "@/assets/Images/upload.svg";
import UploadBox from "../UploadBox/UploadBox";
import CompanyLogoPreview from "../CompanyLogoPreview/CompanyLogoPreview";
import IconButton from "../IconButton/IconButton";
import white_edit from "@/assets/Images/white-edit.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCompanyProfile } from "@/Reudx/slices/companyProfile";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";

const CompanyBio = () => {
  const [State, setState] = useState({
    companyName: "",
    industry: "",
    directory: "",
    noOfEmployees: "",
    yearEstablished: "",
    webLink: "",
    decsription: "",
    logo: false,
    country: "",
    province: "",
    city: "",
    telephone: "",
    address: "",
    platform: "",
    link: "",
    links: [
      {
        platform: "",
        link: "",
      },
    ],
  });
  const companyProfile = useSelector((state) => state.companyProfile.value);

  const dispatch = useDispatch();
  const [isEdit, setisEdit] = useState(false);
  const [readOnly, setreadOnly] = useState(true);

  const uploadList = [
    "Please upload logo in minimum 200x200 resolution",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
  ];
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
  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected file
      setState((prev) => {
        return {
          ...prev,
          logo: imageURL,
        };
      });
    }
  };
  const getData = async () => {
    try {
      const userProfile = await axios({
        method: "GET",
        url: "/api/company/companyProfile",
      });
      dispatch(getCompanyProfile(userProfile.data));
    } catch (err) {}
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  useSkipInitialEffect(() => {
    setState({
      companyName: companyProfile.companyName,
      industry: companyProfile.industry,
      directory: companyProfile.directory,
      noOfEmployees: companyProfile.noOfEmployees,
      yearEstablished: companyProfile.yearEstablished,
      webLink: companyProfile.webLink,
      decsription: companyProfile.decsription,
      logo: companyProfile.logo,
    });
  }, [companyProfile]);
  return (
    <Box mt={{ md: "60px", base: "10px" }}>
      <InputWrapper>
        <LabelInput
          state={State.companyName}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, companyName: e.target.value };
            });
          }}
          readOnly={readOnly}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Company Name"
          label={"Company Name*"}
        />
        <LabelInput
          state={State.industry}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, industry: e.target.value };
            });
          }}
          dropdown={readOnly ? false : true}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Select Industry"
          label={"Industry"}
          readOnly={readOnly}
        />
      </InputWrapper>

      <InputWrapper>
        <LabelInput
          state={State.directory}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, directory: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          readOnly={readOnly}
          variant={"bg-input"}
          dropdown={readOnly ? false : true}
          placeholder="Select Option"
          label={"Listed in Directory*"}
        />
        <LabelInput
          state={State.noOfEmployees}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, noOfEmployees: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Number of Employees"
          label={"Number of Employees"}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={State.yearEstablished}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, yearEstablished: e.target.value };
            });
          }}
          labelVariant={"label"}
          readOnly={readOnly}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Year in Numbers"
          label={"Year Established"}
        />
        <LabelInput
          state={State.webLink}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, webLink: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          readOnly={readOnly}
          variant={"bg-input"}
          placeholder="Enter Company Website URL"
          label={"Website"}
        />
      </InputWrapper>
      <InputWrapper>
        <Box sx={{width:'48%'}}>
          <LabelInput
            state={State.telephone}
            setState={(e) => {
              setState((prev) => {
                return { ...prev, telephone: e.target.value };
              });
            }}
            labelVariant={"label"}
            readOnly={readOnly}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Telephone "
            label={"Telephone"}
          />
        </Box>
      </InputWrapper>
      <InputWrapper>
        <LabelInput
          state={State.decsription}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, decsription: e.target.value };
            });
          }}
          labelVariant={"label"}
          textarea
          readOnly={readOnly}
          variant={"bg-teaxtarea"}
          placeholder="Describe Your Company..."
          label={"Description*"}
        />
      </InputWrapper>

      <Box mt={{ md: "80px", base: "40px" }}>
        {isEdit ? (
          <UploadBox
            handleEvent={handleLogo}
            list={uploadList}
            titie={"Upload Company Logo"}
          />
        ) : (
          <CompanyLogoPreview logo={State.logo} />
        )}
      </Box>

      <Flex
        gap={"20px"}
        mt={{ md: "75px", base: "40px" }}
        mb={"70px"}
        justifyContent={"center"}
      >
        {isEdit ? (
          <>
            <Button onClick={handleCancel} variant="outline-blue">
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              Save
            </Button>
          </>
        ) : (
          <IconButton
            iconSize="18px"
            variant={"blue-btn"}
            btnLabel={"Edit"}
            handleEvent={handleEdit}
            icon={white_edit}
          />
        )}
      </Flex>
    </Box>
  );
};

export default CompanyBio;
