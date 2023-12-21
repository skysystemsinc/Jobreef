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
  cardStatus,
  handleEvent,
  popOverList,
}) => {
  // const data = [
  //   {
  //     status: matchCandidate ? "New" : " Archived",
  //     archived: false,
  //     name: "Aaron Brown",
  //     country: "Nassau",
  //     matchCandidate: false,
  //     notInterested: true,
  //     state: "The Bahamas",
  //     companyName: "ABC Company",
  //     desiginatation: "Systems Analyst",
  //     schoolName: "University of The Bahamas",
  //     diploma: "Bachelor’s Degree",
  //     skills: [
  //       {
  //         name: "Technical Knowledge",
  //         level: "",
  //       },
  //       {
  //         name: "System Architecture",
  //         level: "",
  //       },
  //       {
  //         name: "Risk Management",
  //         level: "",
  //       },
  //       {
  //         name: "Product Design",
  //         level: "",
  //       },
  //       {
  //         name: "Leadership",
  //         level: "",
  //       },
  //       {
  //         name: "Q/A Testing ",
  //         level: "",
  //       },
  //     ],
  //     canididateSummary:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     jobSummary:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     educationSummary:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //   },
  // ];
  return (
    <Box mt={{ md: "31px", base: "15px" }}>
      {/* <SelectedCandidate/> */}

      <MobileSortBy sortArray={sortArray} />

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
                    cardStatusDisable={cardStatusDisable}
                    data={item.employee}
                    status={item.status}
                    matchCandidate={matchCandidate}
                    cardStatus={cardStatus}
                    popOverList={popOverList}
                    handleEvent={handleEvent}
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
