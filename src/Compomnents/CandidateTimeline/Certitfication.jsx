import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";

import CertificationForm from "./CertificateForm";
import CeritifcateCard from "../CeritifcateCard/CeritifcateCard";

const Certification = ({ addCertificate, setCertificate }) => {
  // const [addCertificate, setCertificate] = useState(false);
  const [experianceData, setexperianceData] = useState([]);
  // const experianceData = [];
  const style = {
    maxWidth: "240px",
    // border:'1px solid red'
  };
  return (
    <Box>
      {addCertificate ? (
        <Box display={"flex"} justifyContent={"center"}>
          <CertificationForm
            setexperianceData={setexperianceData}
            setaddExperiance={setCertificate}
          />
        </Box>
      ) : (
        <Box  width={"100%"} mx={"auto"}>
          <CeritifcateCard   headingStyle={style}/>

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setCertificate(true);
              }}
              width="max-content"
              px={"10px"}
              mt={{ md: "17px", base: "15px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Certification
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Certification;
