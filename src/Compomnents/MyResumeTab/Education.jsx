import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";

const Education = () => {
  const [addEducation, setaddEducation] = useState(false);
  const [experianceData, setexperianceData] = useState([]);
  // const experianceData = [];

  return (
    <Box>
      {addEducation ? (
        <Box display={"flex"} justifyContent={"center"}>
          <EducationForm
            setexperianceData={setexperianceData}
            setaddExperiance={setaddEducation}
          />
        </Box>
      ) : experianceData.length > 0 ? (
        <Box mt={"30px"} width={{ xl: "73%", base: "100%" }} mx={"auto"}>
          <EducationCard />

          <Box
          bg={"blue.400"}
            boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.06)"
            // border={"1px solid "}
            // borderColor={"blue.500"}
            borderRadius={"8px"}
            padding={{ md:"22px 43px", base:"20px 18px"}}
          >
            <Heading variant={"p7"} color={"gray.text"}>
              Elevate Your Profile: Include Your Bachelor's Degree
            </Heading>
          </Box>

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
              Add Education
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box mb={"80px"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={() => setaddEducation(true)}
            title={"Enrich Your Profile:"}
            subittle={"Include Your Academic Journey."}
            btnLable={"Add Education"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Education;
