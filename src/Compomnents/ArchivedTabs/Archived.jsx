import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import SortBy from "../SortBy/SortBy";
import MobileSortBy from "../MobileSortBy/MobileSortBy";
import SelectedCandidate from "./SelectedCandidate";
import { useSelector } from "react-redux";
import { CandidateCardLoading } from "../LoadingSkeleton/LoadingSkeleton";

const Archived = ({
  filterKey,
  cardStatusDisable,
  data,
  // cardStatus,
  sortArray,
  matchCandidate,
  handleSelectCandidate,
  cardStatus,
  handleEvent,
  popOverList,
}) => {
  
  return (
    <Box mt={{ md: "31px", base: "15px" }}>
      {/* <SelectedCandidate/> */}

      {/* <MobileSortBy sortArray={sortArray} /> */}

      <Box>
        <Box>
          {!data ? (
            <CandidateCardLoading />
          ) : data?.length ==0 ? (
            <Box minH={"200px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            >
              <Heading color={"blue.500"} textAlign={"center"} className="sora" fontWeight={700} variant={"p6"}>No candidates found</Heading>
            </Box>
          ) : (
            data?.map((item, ind) => {
              return (
                <Box key={ind}>
                  <CandidateCard
                  jobData={item}

                    cardStatusDisable={cardStatusDisable}
                    data={item.employee}
                    status={item.status}
                    matchCandidate={matchCandidate}
                    cardStatus={cardStatus}

                    popOverList={popOverList}
                    handleEvent={() => handleSelectCandidate(item)}
                  />
                </Box>
              );
            })
          )}
        </Box>
        {/* <Box display={{ lg: "block", base: "none" }}>
          <SortBy matchCandidate={matchCandidate} />
        </Box> */}
      </Box>
    </Box>
  );
};

export default Archived;
