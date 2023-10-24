import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import TextCard from "../TextCard/TextCard";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";

const WorkExperiance = ({addExperiance , setaddExperiance}) => {
  const [experianceData, setexperianceData] = useState([]);
  // const experianceData = [];

  return (
    <Box>
      {addExperiance ? (
        <Box display={"flex"} justifyContent={"center"}>
          <ExperianceForm
            setexperianceData={setexperianceData}
            setaddExperiance={setaddExperiance}
          />
        </Box>
      ) : (
        <Box  width={"100%"} mx={"auto"}>
          <ExperianceCard />

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setaddExperiance(true);
              }}
              width="max-content"
              px={"10px"}
              mt={{ md: "41px", base: "20px" }}
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
