import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import companyLogo from "@/assets/Images/companyLogo.svg";
const CompanyLogoPreview = () => {
  return (
    <Box
      sx={{ border: "1px solid" }}
      maxWidth={"624px"}
      borderColor={"gray.500 !important"}
      mx={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={'column'}
      display={"flex"}
      borderRadius={"8px"}
      p={"24px 10px"}
    >
      <Heading  mb={"20px"}  variant={"p7"}>Company Logo</Heading>
      <Image width={{ md:"80px" , base:"50px"}} src={companyLogo.src} />
    </Box>
  );
};

export default CompanyLogoPreview;
