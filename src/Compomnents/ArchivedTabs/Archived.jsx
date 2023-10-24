import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SortBy from "../SortBy/SortBy";
import MobileSortBy from "../MobileSortBy/MobileSortBy";
import SelectedCandidate from "./SelectedCandidate";
import { useSelector } from "react-redux";

const Archived = ({
  filterKey,
  data,
  matchCandidate,
  cardStatus,
  handleEvent,
  popOverList,
}) => {
  return (
    <Box mt={{ md: "31px", base: "15px" }}>
      {/* <SelectedCandidate/> */}
      <Box display={{ lg: "none", base: "block" }}>
        <MobileSortBy />
      </Box>
      <Box display={"flex"} gap={"31px"}>
        <Box>
          {data &&
            data.map((item) => {
              return (
                <CandidateCard
                  data={item}
                  matchCandidate={matchCandidate}
                  cardStatus={cardStatus}
                  popOverList={popOverList}
                  handleEvent={handleEvent}
                />
              );
            })}
        </Box>
        <Box display={{ lg: "block", base: "none" }}>
          <SortBy matchCandidate={matchCandidate} />
        </Box>
      </Box>
    </Box>
  );
};

export default Archived;
