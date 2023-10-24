import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { Box, Grid, GridItem, filter } from "@chakra-ui/react";
import SortBy from "../SortBy/SortBy";
import MobileSortBy from "../MobileSortBy/MobileSortBy";
import SelectedCandidate from "./SelectedCandidate";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedCandidates } from "@/Reudx/slices/candidates";

const All = ({
  filterKey,
  matchCandidate,
  cardStatus,
  data,
  handleEvent,
  popOverList,
}) => {
  const dispatch = useDispatch();
  const handleSelectedCard = (data) => {
    console.log("data", data)
    dispatch(getSelectedCandidates(data));
  };
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
                  handleEvent={() => handleSelectedCard(item)}
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

export default All;
