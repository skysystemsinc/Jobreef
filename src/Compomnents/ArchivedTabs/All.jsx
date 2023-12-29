import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { Box, Grid, GridItem, Heading, filter } from "@chakra-ui/react";
import SortBy from "../SortBy/SortBy";
import MobileSortBy from "../MobileSortBy/MobileSortBy";
import SelectedCandidate from "./SelectedCandidate";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedCandidates } from "@/Redux/slices/candidates";
import SearchBox from "./SearchBox";
import { CandidateCardLoading } from "../LoadingSkeleton/LoadingSkeleton";
import { get, post } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { educationOtp, status } from "@/schema/stateSchema";

const All = ({
  filterKey,
  matchCandidate,
  // sortArray,
  cardStatus,
  cardStatusDisable,
  data,
  searchBox,
  handleEvent,
  handleSelectCandidate,
  popOverList,
}) => {
  const selectedJobState = useSelector(
    (state) => state.jobApplicantList.value.selectedJob
  );

  const handleStatusFilter = async (data, key) => {
    console.log("filter", data, key);
    const postData = await post(`${endPoints.filters}/${selectedJobState.id}`, {
      status: data,
    });
    console.log("postData", postData);
  };
  const sortArray = [
    {
      label: "Sort Candidates By",
      listItem: [
        { label: "Date Applied", value: "" },
        { label: "Relevance", value: "" },
      ],
    },
    {
      label: "Status",
      listItem: status,
      handleSelect: handleStatusFilter,
    },
    {
      label: "Education",
      listItem: educationOtp,
    },

    {
      label: "Skills",

      listItem: [
        {
          label: selectedJobState?.desiredSkills,
          value: selectedJobState?.desiredSkills,
        },
      ],
    },
  ];

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
                    jobData={item}
                    cardStatusDisable={cardStatusDisable}
                    data={item.employee}
                    matchCandidate={matchCandidate}
                    status={item.status}
                    popOverList={popOverList}
                    handleEvent={() => handleSelectCandidate(item)}
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
