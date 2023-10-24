import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";

import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";

const Education = ({ addEducation, setaddEducation }) => {
  //   const [addEducation, setaddEducation] = useState(false);
  const [experianceData, setexperianceData] = useState([]);
  // const experianceData = [];
  const style = {
    maxWidth: "200px",
  };
  return (
    <Box>
      {addEducation ? (
        <Box display={"flex"} justifyContent={"center"}>
          <EducationForm
            setexperianceData={setexperianceData}
            setaddExperiance={setaddEducation}
          />
        </Box>
      ) : (
        <Box  width={"100%"} mx={"auto"}>
          <EducationCard
            headingStyle={style}
            dispableBlueCard
          />
          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setaddEducation(true);
              }}
              width="max-content"
              px={{ md: "40px", base: "20px" }}
              //   mt={{ md: "px", base: "20px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Education
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Education;
