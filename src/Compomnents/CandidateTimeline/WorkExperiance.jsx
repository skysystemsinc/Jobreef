import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import TextCard from "../TextCard/TextCard";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";

const WorkExperiance = ({ state, setState }) => {
  // const [experianceData, setexperianceData] = useState([]);

  // const experianceData = [];

  return (
    <Box>
      {state.addExperience || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <ExperianceForm
            state={state}
            setState={setState}
            // setaddExperiance={setaddExperiance}
          />
        </Box>
      ) : (
        <Box width={"100%"} mx={"auto"}>
          <ExperianceCard state={state} setState={setState} />

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                // setaddExperiance(true);
                setState((prev) => {
                  return { ...prev, addExperience: true };
                });
              }}
              width="max-content"
              px={"10px"}
              mb={{ md: "38px", base: "20px" }}
              variant={"blue-btn"}
            >
              Add New Experience
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default WorkExperiance;
