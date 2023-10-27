import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Checkbox,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import UploadBox from "../UploadBox/UploadBox";
import globalStyles from "@/styles/globalStyles";
const CertificationForm = ({ state, setState }) => {
  const [certification, setCertification] = useState({
    certificateName: "",
    organizationName: "",
    certificateId: "",
    issuedOn: new Date(),
    validUntil: new Date(),
  });
  const router = useRouter();
  console.log("certification", certification)

  const [readOnly, setReadOnly] = useState(false);

  const uploadList = [
    "Please upload in minimum 1000x1000 resolution, if in image format",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
    "Uploading of digital copy is not mandatory",
  ];
  return (
    <Box width={"100%"}>
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={certification.certificateName}
            setState={(e) => {
              setCertification((prev) => {
                return { ...prev, certificateName: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your certificate"
            label={"Name of Certificate"}
          />
          <LabelInput
            state={certification.organizationName}
            setState={(e) => {
              setCertification((prev) => {
                return { ...prev, organizationName: e.target.value };
              });
            }}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of issuing organization"
            label={"Issuing Organization"}
          />
        </InputWrapper>

        <Box border={"1px solid white"}>
          <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
            <LabelInput
              state={certification.certificateId}
              setState={(e) => {
                setCertification((prev) => {
                  return { ...prev, certificateId: e.target.value };
                });
              }}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Enter the certificate ID"
              label={"Certificate ID"}
            />

            <LabelInput
              state={certification.issuedOn}
              setState={(e) => {
                setCertification((prev) => {
                  return { ...prev, issuedOn: e };
                });
              }}
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Issued On"}
            />
          </InputWrapper>
        </Box>

        {/* <Box maxWidth={{ xl: "48%", base: "100%" }}>
            <LabelInput
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="Enter your GPA"
              label={"Issued On"}
            />
          </Box> */}
        <Box width={{ xl: "48%", base: "100%" }} position={"relative"}>
          <Box>
            <LabelInput
              state={certification.validUntil}
              setState={(e) => {
                setCertification((prev) => {
                  return { ...prev, validUntil: e };
                });
              }}
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              readOnly={readOnly}
              label={"Valid Until"}
            />
          </Box>
          <Box
            display={"flex"}
            position={"absolute"}
            bottom={"-40px"}
            gap={"10px"}
            alignItems={"center"}
          >
            <Checkbox
              // borderRadius={"10px"}
              // defaultChecked
              checked={state.currentlyWorking}
              onChange={(e) => {
                e.target.checked == true
                  ? setReadOnly(true)
                  : setReadOnly(false);
                setState((prev) => {
                  return { ...prev, currentlyWorking: e.target.checked };
                });
              }}
              borderColor={"black.200"}
              size="md"
              rounded={"base"}
              colorScheme="blue"
              sx={globalStyles.checkBoxStyle}
            />
            <Heading variant={"p1"} color={"black.100"}>
              This certification has no expiry
            </Heading>
          </Box>
        </Box>

        <Box mt={{ md: "95px", base: "80px" }}>
          <UploadBox
            btnLabelStyle={{ padding: "0px 10px" }}
            butLabel={"Drag & Drop"}
            list={uploadList}
            titie={"Upload Certificate in Digital Format"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "40px", base: "10px" }}
          mb={{ md: "30px", base: "20px" }}
          mt={{ md: "73px", base: "50px" }}
          pb={"39px"}
        >
          <Button
            onClick={() => {
              setState((prev) => {
                return { ...prev, addCertificate: false, edit: false };
              });
            }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              setState((prev) => {
                return { ...prev, addCertificate: false, edit: false };
              });
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            {state.edit ? "Update Certification" : " Save Certification"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CertificationForm;
