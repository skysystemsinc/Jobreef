import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";
import { useSelector } from "react-redux";
import DropDown from "../DropDown/DropDown";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";

const Application = ({ filterKey }) => {
  const candidates = useSelector((state) => state.candidates.value.filter);
  const selectedCandidates = useSelector(
    (state) => state.candidates.value.selected
  );

  const allData =
    candidates && candidates?.filter((item) => item[filterKey] == false);
  const archivedData =
    candidates && candidates?.filter((item) => item[filterKey] == true);

  // const tablist = [
  //   `All (${allData?.length ?? "0"})`,
  //   ` Archived (${archivedData?.length ?? "0"})`,
  // ];
  const tablist = [`All (1)`, ` Archived (1)`];
  const [showSelectCandidate, setshowSelectCandidate] = useState(false);
  const popOverListAll = ["Download Attachments", "Archive"];
  const popOverListArchived = ["Restore", "Delete"];

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
      data={allData}
      filterKey={filterKey}
      cardStatus={"Interviewing"}
      popOverList={popOverListAll}
    />,
    <Archived
      sortArray={sortArray}
      data={archivedData}
      filterKey={filterKey}
      cardStatus={"Archived"}
      popOverList={popOverListArchived}
    />,
  ];
  return (
    <Box>
      <Box display={{ md: "none", base: "flex" }} justifyContent={"flex-end"}>
        <DropDown
          style={{ width: "max-content" }}
          icon={<Image src={blue_arrow_down.src} />}
          placeholder={"Systems Engineer"}
          variant={"bg-dropdown"}
        />
      </Box>

      {selectedCandidates ? (
        <Box mt={{ md: "31px", base: "15px" }}>
          <SelectedCandidate />
        </Box>
      ) : (
        <ArchivedTabs componentList={componentList} tablist={tablist} />
      )}
    </Box>
  );
};

export default Application;
