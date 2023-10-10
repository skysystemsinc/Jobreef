import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";

const WorkExperiance = () => {
  const [addExperiance, setaddExperiance] = useState();
  return (
    <Box>
      {addExperiance ? (
        <Box display={"flex"} justifyContent={"center"}>
          <ExperianceForm  setaddExperiance={setaddExperiance}/>
        </Box>
      ) : (
        <Box
          height={"60vh"}
          mb={"80px"}
          pl={{ md: "30px", base: "0px" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          flexDirection={"column"}
        >
          <Heading variant={"p8"}>
            Ready to build an impressive resume?
            <Text fontWeight={700}>
              Start by including your work experiences.
            </Text>
          </Heading>
          <Button
            onClick={() => {
              setaddExperiance(true);
            }}
            width="max-content"
            px={{ md: "40px", base: "20px" }}
            mt={{ md: "41px", base: "23px" }}
            variant={"blue-btn"}
          >
            Add Experience
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default WorkExperiance;
