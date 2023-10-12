import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import waves from "@/assets/Images/waves.svg";
import waves_2 from "@/assets/Images/wave_2.svg";
import certified from "@/assets/Images/certified.svg";

const CeritifcateCard = () => {
  return (
    <Box
      borderRadius={"8px"}
      position={"relative"}
      width={{ md: "520px", base: "100%" }}
      padding={"20px"}
      overflow={"hidden"}
      boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
    >
      <Image
        src={certified.src}
        position={"absolute"}
        top={"18px"}
        right={"28px"}
        zIndex={-1}
        width={{ md: "132px" , base:"100px"}}
        display={{sm:"block" , base:'none'}}
      />
      <Image
        src={waves.src}
        position={"absolute"}
        bottom={"0px"}
        left={"0px"}
        width={"100%"}
      />
      <Image
        src={waves_2.src}
        // height={"100%"}
        position={"absolute"}
        bottom={"0px"}
        right={"0px"}
        width={"100%"}
      />
      <Heading
        variant={"p1"}
        lineHeight={"normal"}
        color={"black.100"}
        mb={"30px"}
      >
        07/31/23
      </Heading>
      <Box mb={"24px"}>
        <Heading
          variant={"p1"}
          lineHeight={"normal"}
          mb={"3px"}
          color={"black.100"}
        >
          This Certificate has been awarded to
        </Heading>
        <Heading variant={"p4"} color={"black.100"} fontWeight={500}>
          Charles Cartwright
        </Heading>
      </Box>
      <Box mb={"24px"}>
        <Heading
          variant={"p1"}
          mb={"3px"}
          lineHeight={"normal"}
          color={"black.100"}
        >
          Upon completion of course
        </Heading>
        <Heading variant={"p4"} color={"black.100"} fontWeight={500}>
          Business Operations Management
        </Heading>
      </Box>
      <Box mb={"24px"}>
        <Heading
          variant={"p1"}
          mb={"3px"}
          lineHeight={"normal"}
          color={"black.100"}
        >
          By the issuing authority
        </Heading>
        <Heading variant={"p4"} color={"black.100"} fontWeight={500}>
          Jobreef Professional Academy
        </Heading>
      </Box>

      <Heading textAlign={"end"} variant={"p9"}>
        Certificate Verification ID: 2f8ae5bfaa4c46dc3bba77655130f32a
      </Heading>
    </Box>
  );
};

export default CeritifcateCard;
