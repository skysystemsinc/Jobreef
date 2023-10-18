import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SortBy from "../SortBy/SortBy";
import MobileSortBy from "../MobileSortBy/MobileSortBy";
import SelectedCandidate from "./SelectedCandidate";

const Archived = ({ matchCandidate, cardStatus, handleEvent, popOverList }) => {
    console.log("archivesd" ,cardStatus)
  return (
    <Box mt={{ md: "31px", base: "15px" }} >
      {/* <SelectedCandidate/> */}
      <Box display={{ lg: "none", base: "block" }}>
        <MobileSortBy />
      </Box>
      <Box display={"flex"} gap={"31px"}>
        <Box>
          <CandidateCard cardStatus={cardStatus} popOverList={popOverList} handleEvent={handleEvent} />
          <CandidateCard cardStatus={cardStatus} popOverList={popOverList} handleEvent={handleEvent} />
          <CandidateCard cardStatus={cardStatus} popOverList={popOverList} handleEvent={handleEvent} />
        </Box>
        <Box display={{ lg: "block", base: "none" }}>
          <SortBy matchCandidate={matchCandidate}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Archived;
