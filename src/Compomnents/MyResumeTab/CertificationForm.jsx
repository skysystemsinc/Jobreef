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
import React from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import UploadBox from "../UploadBox/UploadBox";
const CertificationForm = ({
  setexperianceData,
  setaddExperiance,
  setTabIndex,
  tabIndex,
}) => {
  const router = useRouter();
  const uploadList = [
    "Please upload in minimum 1000x1000 resolution, if in image format",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
    "Uploading of digital copy is not mandatory",
  ];
  return (
    <Box
    mt={{ md: "30px", base: "16px" }} width={{ lg: "60%", base: "100%" }}
    >
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your certificate"
            label={"Name of Certificate"}
          />
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of issuing organisation"
            label={"Issuing Organisation"}
          />
        </InputWrapper>

        <Box border={"1px solid white"} mb={{ md: "30px" , base:"0px"}}>
          <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
            <LabelInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Enter the certificate ID"
              label={"Certificate ID"}
            />

            <LabelInput
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
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Valid Until"}
            />
          </Box>
          <Box
            display={"flex"}
            position={"absolute"}
            bottom={"-40px"}
            gap={"15px"}
            alignItems={"center"}
          >
            <Checkbox
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

        <Box mt={{ md: "95px", base: "80px" }}>
          <UploadBox
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
              setaddExperiance(false);
              // tabIndex == 0 ? null : setTabIndex(--tabIndex);
            }}
            variant="outline-blue"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              // tabIndex == 2 ? null : setTabIndex(++tabIndex);
              // router.push("/");
              setexperianceData([1]);
              setaddExperiance(false);
            }}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            Save Certification
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CertificationForm;
