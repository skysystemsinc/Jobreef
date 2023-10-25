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
    maxWidth: "216px",
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
              px={"10px"}
              width="max-content"
              
              //   mt={{ md: "px", base: "20px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add New Education
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Education;