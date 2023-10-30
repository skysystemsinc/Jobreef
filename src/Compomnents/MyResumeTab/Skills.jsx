import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import TextCard from "../TextCard/TextCard";

import CertificationForm from "./CertificationForm";
import CeritifcateCard from "../CeritifcateCard/CeritifcateCard";
import SkillsForm from "./SkillsForm";
import SkillsCard from "../SkillsCard/SkillsCard";
import DeleteModal from "../DeleteModal/DeleteModal";

const Skills = () => {
  // const [addEducation, setaddEducation] = useState(false);
  // const [experianceData, setexperianceData] = useState([]);

  // const experianceData = [];
  const [state, setState] = useState({
    addSkills: false,
    skills: [
      {
        skillName: "Communication",
        skillLevel: "Proficient",
      },
    ],
    edit: false,
    delete: false,
  });
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
      {state.addSkills || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <SkillsForm
            state={state}
            handleSave={() => {
              setState((prev) => {
                return {
                  ...prev,
                  addSkills: false,
                  edit: false,
                  skills: [1],
                };
              });
            }}
          />
        </Box>
      ) : state.skills.length > 0 ? (
        <Box
          minH={"60vh"}
          mt={"30px"}
          width={{ xl: "72%", base: "100%" }}
          mx={"auto"}
        >
          {state.skills.map((item) => {
            return (
              <Box>
                <SkillsCard
                  handleEdit={() => {
                    setState((prev) => {
                      return {
                        ...prev,
                        edit: true,
                      };
                    });
                  }}
                  handleDelete={() => {
                    setState((prev) => {
                      return {
                        ...prev,
                        delete: true,
                      };
                    });
                  }}
                  data={item}
                />
              </Box>
            );
          })}

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setState((prev) => {
                  return {
                    ...prev,
                    addSkills: true,
                    skills: [],
                  };
                });
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
            addHandle={() =>
              setState((prev) => {
                return {
                  ...prev,
                  addSkills: true,
                  skills: [],
                };
              })
            }
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
