import React from "react";
import SelectedCandidateCard from "../SelectedCandidateCard/SelectedCandidateCard";
import { Box } from "@chakra-ui/react";
import NotePad from "../NotePad/NotePad";

const SelectedCandidate = () => {
  return (
    <Box display={"flex"} gap="20px">
      <Box width={"100%"}>
        <SelectedCandidateCard />
      </Box>
      <Box width={"520px"}>
        <NotePad />
      </Box>
    </Box>
  );
};

export default SelectedCandidate;
