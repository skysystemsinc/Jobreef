import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { Box, Grid, GridItem, Heading, filter } from "@chakra-ui/react";
import SortBy from "../SortBy/SortBy";
import MobileSortBy from "../MobileSortBy/MobileSortBy";
import SelectedCandidate from "./SelectedCandidate";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedCandidates } from "@/Reudx/slices/candidates";
import SearchBox from "./SearchBox";
import { CandidateCardLoading } from "../LoadingSkeleton/LoadingSkeleton";

const All = ({
  filterKey,
  matchCandidate,
  sortArray,
  cardStatus,
  cardStatusDisable,
  data,
  searchBox,
  handleEvent,
  popOverList,
}) => {
  // const data = [
  //   {
  //     status: "new",
  //     archived: false,
  //     name: "Aaron Brown",
  //     country: "Nassau",
  //     matchCandidate: false,
  //     notInterested: true,
  //     state: "Bahamas",
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
  const dispatch = useDispatch();
  const handleSelectedCard = (data) => {
    dispatch(getSelectedCandidates(data));
  };
  console.log("data", data);
  return (
    <Box mt={{ md: "31px", base: "15px" }}>
      {searchBox ? <SearchBox /> : null}
      <Box>
        <MobileSortBy sortArray={sortArray} />
      </Box>
      <Box width={"100%"}>
        <Box>
          {!data ? (
            <CandidateCardLoading />
          ) : data?.length == 0 ? (
            <Box
              minH={"200px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Heading
                color={"blue.500"}
                textAlign={"center"}
                className="sora"
                fontWeight={700}
                variant={"p6"}
              >
                No candidates found
              </Heading>
            </Box>
          ) : (
            data?.map((item, ind) => {
              return (
                <Box key={ind}>
                  <CandidateCard
                    cardStatusDisable={cardStatusDisable}
                    data={item.employee}
                    matchCandidate={matchCandidate}
                    status={item.status}
                    popOverList={popOverList}
                    handleEvent={() => handleSelectedCard(item)}
                  />
                </Box>
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default All;
