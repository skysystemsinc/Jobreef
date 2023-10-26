import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";

const WorkExperiance = () => {
  const [addExperiance, setaddExperiance] = useState(false);
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
      ) : experianceData.length > 0 ? (
        <Box mt={"30px"} minHeight={"63vh"} width={{ lg: "73%", base: "100%" }} mx={"auto"}>
          <ExperianceCard />

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setaddExperiance(true);
              }}
              width="max-content"
              px={{ md: "40px", base: "20px" }}
              mt={{ md: "41px", base: "20px" }}
              variant={"blue-btn"}
            >
              Add New Experience
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box  minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={() => setaddExperiance(true)}
            title={"Ready to build an impressive resume?"}
            subittle={"Start by including your work experiences."}
            btnLable={"Add  Experience"}
          />
        </Box>
        // <Box
        //   minH={"40vh"}
        //   mb={"80px"}
        //   pl={{ md: "30px", base: "0px" }}
        //   display={"flex"}
        //   justifyContent={"center"}
        //   alignItems={"flex-start"}
        //   flexDirection={"column"}
        // >
        //   <Heading variant={"p8"}>
        //     Ready to build an impressive resume?
        //     <Text fontWeight={700}>
        //       Start by including your work experiences.
        //     </Text>
        //   </Heading>
        //   <Button
        //     onClick={() => {
        //       setaddExperiance(true);
        //     }}
        //     width="max-content"
        //     px={{ md: "40px", base: "20px" }}
        //     mt={{ md: "41px", base: "23px" }}
        //     variant={"blue-btn"}
        //   >
        //     Add Experience
        //   </Button>
        // </Box>
      )}
    </Box>
  );
};

export default WorkExperiance;
