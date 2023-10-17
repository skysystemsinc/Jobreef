import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SortBy from "../SortBy/SortBy";
import MobileSortBy from "../MobileSortBy/MobileSortBy";
import SelectedCandidate from "./SelectedCandidate";

const All = () => {
  return (
    <Box mt={{ md: "31px", base: "15px" }}>
      <SelectedCandidate/>
      {/* <Box display={{ lg: "none", base: "block" }}>
        <MobileSortBy />
      </Box>
      <Box display={"flex"} gap={"31px"}>
        <Box>
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
        </Box>
        <Box display={{ lg: "block", base: "none" }}>
          <SortBy />
        </Box>
      </Box> */}
    </Box>
  );
};

export default All;
