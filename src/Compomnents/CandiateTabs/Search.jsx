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
  const candidates = useSelector((state) => state.candidates.value.filter);
  const selectedCandidates = useSelector(
    (state) => state.candidates.value.selected
  );

  const allData =
    candidates && candidates?.filter((item) => item[filterKey] == false);
  const archivedData =
    candidates && candidates?.filter((item) => item[filterKey] == true);

  const tablist = [`Search Results`, `Saved (8)`];

  const popOverListAll = ["Send Message", "Save Candidate"];
  const popOverListArchived = ["Send Message", "Delete"];
  const sortArray = [
    { label: "Sort Candidates By", listItem: ["Date Applied", "Relevance"] },
    { label: "Status", listItem: ["New", "Read", "Interviewing", "Closed"] },
    {
      label: "Education",
      listItem: [
        "Masters Degree or Higher",
        "Bachelor’s Degree or Higher",
        "Associate Degree or Higher",
        "Closed",
      ],
    },

    {
      label: "Skills",

      listItem: [
        "Associate Degree or Higher",
        "System Architecture",
        "Product Design",
        "Leadership",
      ],
    },
  ];
  const componentList = [
    <All
    sortArray={sortArray}
      searchBox
      data={allData}
      matchCandidate
      filterKey={filterKey}
      cardStatusDisable
      // cardStatus={"Interviewing"}
      popOverList={popOverListAll}
    />,
    <Archived
      matchCandidate
      cardStatusDisable
      data={archivedData}
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
      icon: <IoSaveOutline  className="hoverColor" />,


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
