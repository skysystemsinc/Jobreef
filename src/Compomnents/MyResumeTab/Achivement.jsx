import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import AchievementForm from "./AchievementForm";
import AchievementCard from "../AchievementCard/AchievementCard";

const Achievement = () => {
  const [state, setState] = useState({
    addExperience: false,
    experienceData: [
      {
        certificateName: "Diploma Name",
        organizationName: "Jobreef Professional Academy",
        noExpiry: false,
        readOnly: false,
        certificateId: "2f8ae5bfaa4c46dc3bba77655",
        issuedOn: new Date(),
        country: " USA",
        state: "Chicago",
        city: " Illinois",
        validUntil: new Date(),
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
      {state.addExperience || state.edit ? (
        
          <AchievementForm
            state={state}
            handleSaveAch={() =>
              setState((prev) => {
                return {
                  ...prev,
                  addExperience: false,
                  edit: false,
                  experienceData: [...state.experienceData, 1],
                };
              })
            }
          />
  
      ) : state.experienceData.length > 0 ? (
        <Box
          mt={"30px"}
          minHeight={"63vh"}
          width={{ lg: "73%", base: "100%" }}
          mx={"auto"}
        >
          {state.experienceData.map((item, ind) => {
            return (
              <Box key={ind}>
                <AchievementCard data={item} state={state} setState={setState} />
              </Box>
            );
          })}

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
              Add Achievement
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
            title={"Show-off Your Accomplishments"}
            subittle={"Add Your Notable Achievements."}
            btnLable={"Add Achievement"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Achievement;
