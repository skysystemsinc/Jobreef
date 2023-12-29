import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";
import { useSelector } from "react-redux";
import { IoSaveOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
const Search = ({ filterKey }) => {
  
  const selectedJobState = useSelector(
    (state) => state.jobApplicantList.value.selectedJob
  );
  const selectedCandidates = useSelector(
    (state) => state.candidates.value.selected
  );
  const searchResult = useSelector(
    (state) => state.searchList.value.search.searchResult
  );

  const savedCandidates = useSelector(
    (state) => state.jobApplicantList.value.saved
  );
  console.log("savedCandidates",savedCandidates);
  const tablist = [`Search Results`, `Saved (${savedCandidates?.length ?? 0})`];

  const popOverListAll = ["Send Message", "Save Candidate"];
  const popOverListArchived = ["Send Message", "Delete"];
  const sortArray = [
    { label: "Sort Candidates By", listItem: ["Date Applied", "Relevance"] },

    {
      label: "Status",
      listItem: ["New", "Under Review", "Interviewing", "Accepted", "Rejected"],
      // handleSelect:
    },

    {
      label: "Education",
      listItem: [
        "No Minimum",
        "High School",
        "Trade School",
        "Undergraduate Degree (Associates or Bachelors)",
        "Graduate Degree",
      ],
    },

    {
      label: "Skills",
      listItem: [selectedJobState?.desiredSkills],

    },
  ];
  const componentList = [
    <All
      sortArray={sortArray}
      searchBox
      data={searchResult}
      matchCandidate
      filterKey={filterKey}
      cardStatusDisable
      // cardStatus={"Interviewing"}
      popOverList={popOverListAll}
    />,
    <Archived
      matchCandidate
      cardStatusDisable
      data={savedCandidates}
      sortArray={sortArray}
      filterKey={filterKey}
      // cardStatus={"Archived"}
      popOverList={popOverListArchived}
    />,
  ];

  const profileBtn = [
    {
      name: "Send Message",
      icon: <HiOutlineMail className="hoverColor" />,
    },
    {
      name: "Save",
      icon: <IoSaveOutline className="hoverColor" />,
    },
  ];
  return (
    <Box>
      {selectedCandidates ? (
        <Box mt={{ md: "31px", base: "15px" }}>
          <SelectedCandidate profileBtn={profileBtn} matchCandidate />
        </Box>
      ) : (
        <ArchivedTabs componentList={componentList} tablist={tablist} />
      )}
    </Box>
  );
};

export default Search;
