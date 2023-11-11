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
const CertificationForm = ({
  setexperianceData,
  setaddExperiance,
  state,
  saveHandle,
  setTabIndex,
  tabIndex,
}) => {
  const router = useRouter();
  const uploadList = [
    "Please upload in minimum 1000x1000 resolution, if in image format",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
    "Uploading of digital copy is not mandatory",
  ];
  const [certification, setCertification] = useState({
    certificateName: "",
    organizationName: "",
    noExpiry: false,
    readOnly: false,
    certificateId: "",
    issuedOn: new Date(),
    validUntil: new Date(),
  });
  return (
    <Box mt={{ md: "30px", base: "16px" }} width={{ lg: "60%", base: "100%" }}>
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            state={certification.certificateName}
            setState={(e) => {
              setCertification((prev) => {
                return { ...prev, certificateName: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your certificate"
            label={"Name of Certificate"}
          />
          <LabelInput
            labelVariant={"label"}
            state={certification.organizationName}
            setState={(e) => {
              setCertification((prev) => {
                return { ...prev, organizationName: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of issuing organization"
            label={"Issuing Organization"}
          />
        </InputWrapper>

        <Box border={"1px solid white"}>
          <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
            <LabelInput
              labelVariant={"label"}
              state={certification.certificateId}
              setState={(e) => {
                setCertification((prev) => {
                  return { ...prev, certificateId: e.target.value };
                });
              }}
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

        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <Box width={"100%"} position={"relative"}>
            <Box>
              <LabelInput
                labelVariant={"label"}
                state={certification.validUntil}
                setState={(e) => {
                  setCertification((prev) => {
                    return { ...prev, validUntil: e };
                  });
                }}
                type="date"
                readOnly={certification.readOnly}
                variant={"bg-input"}
                placeholder="MM/DD/YYYY"
                label={"Valid Until"}
              />
            </Box>
            <Box
              display={"flex"}
              position={"absolute"}
              bottom={"-30px"}
              gap={"15px"}
              alignItems={"center"}
            >
              <Checkbox
                checked={certification.noExpiry}
                onChange={(e) => {
                  setCertification((prev) => {
                    return {
                      ...prev,
                      noExpiry: e.target.checked,
                      readOnly: e.target.checked == true ? true : false,
                    };
                  });
                }}
                // borderRadius={"10px"}
                // defaultChecked

                borderColor={"black.200"}
                border={"2px solid "}
                size="sm"
                rounded={"base"}
                colorScheme="blue"
              />
              <Heading variant={"p1"} color={"black.100"}>
                This certification has no expiry
              </Heading>
            </Box>
          </Box>
          <LabelInput
            labelVariant={"label"}
            state={certification.organizationName}
            setState={(e) => {
              setCertification((prev) => {
                return { ...prev, organizationName: e.target.value };
              });
            }}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Certificate URL"
            label={"Certificate URL"}
          />
        </InputWrapper>
        <Box mt={{ md: "95px", base: "80px" }}>
          <UploadBox
            list={uploadList}
            titie={"Upload Certificate in Digital Format"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "30px", base: "10px" }}
          mb={{ md: "30px", base: "20px" }}
          mt={{ md: "73px", base: "50px" }}
          pb={"39px"}
        >
          <Button
            onClick={() => {
              saveHandle();
            }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              saveHandle();
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            {state.edit ? "Update Certification" : "  Save Certification"}
            {/* Save Certification */}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CertificationForm;
