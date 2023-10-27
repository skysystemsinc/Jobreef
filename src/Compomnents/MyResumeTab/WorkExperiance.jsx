import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import DeleteModal from "../DeleteModal/DeleteModal";

const WorkExperiance = () => {
  const [state, setState] = useState({
    addExperience: false,
    experienceData: [],
    edit: false,
    delete: false,
  });
  // const [addExperiance, setaddExperiance] = useState(false);
  // const [experianceData, setexperianceData] = useState([]);
  // const experianceData = [];

  return (
    <Box>
      <DeleteModal
        onOpen={() =>
          setState((prev) => {
            return { ...prev, delete: true };
          })
        }
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
      />
      {state.addExperience || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <ExperianceForm
            state={state}
            handleSave={() =>
              setState((prev) => {
                return {
                  ...prev,
                  addExperience: false,
                  edit: false,
                  experienceData: [1],
                };
              })
            }
          />
        </Box>
      ) : state.experienceData.length > 0 ? (
        <Box
          mt={"30px"}
          minHeight={"63vh"}
          width={{ lg: "73%", base: "100%" }}
          mx={"auto"}
        >
          <ExperianceCard state={state} setState={setState} />

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setState((prev) => {
                  return {
                    ...prev,
                    addExperience: true,
                    experienceData: [],
                  };
                });
              }}
              width="max-content"
              px={"12px"}
              mt={{ md: "41px", base: "20px" }}
              variant={"blue-btn"}
            >
              Add New Experience
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={() =>
              setState((prev) => {
                return {
                  ...prev,
                  addExperience: true,
                  experienceData: [],
                };
              })
            }
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
