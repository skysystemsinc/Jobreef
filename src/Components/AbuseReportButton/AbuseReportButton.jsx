import { Box, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import blackAbuseReport from "@/assets/Images/blackAbuseReport.svg";

const AbuseReportButton = () => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"6px"}>
      <Image src={blackAbuseReport.src} mt={"3px"} />
      <Heading color={"gray.text"} fontWeight={500} variant={"p4"}>
        <Link  href={"/"}>Report Abuse</Link>
      </Heading>
    </Box>
  );
};

export default AbuseReportButton;
