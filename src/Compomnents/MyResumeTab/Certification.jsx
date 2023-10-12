import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";
import CertificationForm from "./CertificationForm";
import CeritifcateCard from "../CeritifcateCard/CeritifcateCard";

const Certification = () => {
  const [addEducation, setaddEducation] = useState(false);
  const [experianceData, setexperianceData] = useState([]);
  // const experianceData = [];

  return (
    <Box>
      {addEducation ? (
        <Box display={"flex"} justifyContent={"center"}>
          <CertificationForm
            setexperianceData={setexperianceData}
            setaddExperiance={setaddEducation}
          />
        </Box>
      ) : experianceData.length > 0 ? (
        <Box mt={"30px"} width={{ xl: "73%", base: "100%" }} mx={"auto"}>
          <Flex flexWrap={{ lg: "nowrap" , base:'wrap'}} justifyContent={"center"} gap={{ sm:"20px" , base:"10px"}}>
            <CeritifcateCard />
            <CeritifcateCard />
          </Flex>

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setaddEducation(true);
              }}
              width="max-content"
              px={{ md: "40px", base: "20px" }}
              mt={{ md: "61px", base: "20px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Certification
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box mb={"80px"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={() => setaddEducation(true)}
            title={"Make Yourself Stand Out:"}
            subittle={"Add Your Industry Certifications and Licenses."}
            btnLable={"Add Certification"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Certification;
