import React from "react";
import SelectedCandidateCard from "../SelectedCandidateCard/SelectedCandidateCard";
import { Box } from "@chakra-ui/react";
import NotePad from "../NotePad/NotePad";

const SelectedCandidate = ({ matchCandidate }) => {
  return (
    <Box display={"flex"} gap="20px">
      <Box width={"100%"}>
        <SelectedCandidateCard matchCandidate={matchCandidate}/>
      </Box>
      <Box width={{ "2xl": "700px" , base:"520px"}} display={{ lg: "block", base: "none" }}>
        {matchCandidate ? null : <NotePad />}
      </Box>
    </Box>
  );
};

export default SelectedCandidate;
