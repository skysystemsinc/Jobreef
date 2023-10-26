import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import TextCard from "../TextCard/TextCard";

import CertificationForm from "./CertificationForm";
import CeritifcateCard from "../CeritifcateCard/CeritifcateCard";
import SkillsForm from "./SkillsForm";
import SkillsCard from "../SkillsCard/SkillsCard";

const Skills = () => {
  const [addEducation, setaddEducation] = useState(false);
  const [experianceData, setexperianceData] = useState([]);
  // const experianceData = [];

  return (
    <Box>
      {addEducation ? (
        <Box display={"flex"} justifyContent={"center"}>
          <SkillsForm
            setexperianceData={setexperianceData}
            setaddExperiance={setaddEducation}
          />
        </Box>
      ) : experianceData.length > 0 ? (
        <Box minH={"60vh"} mt={"30px"} width={{ xl: "72%", base: "100%" }} mx={"auto"}>
          <SkillsCard/>

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
              Add Skills
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={() => setaddEducation(true)}
            title={"Let Employers Know How Skilled Your Are:"}
            subittle={"Add Your Top Skillsets."}
            btnLable={"Add Skills"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Skills;
