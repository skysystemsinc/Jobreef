import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";
import { useSelector } from "react-redux";

const MatchCandidate = ({ filterKey }) => {
  const candidates = useSelector((state) => state.candidates.value.filter);

  const allData =
    candidates && candidates?.filter((item) => item[filterKey] == false);
  const archivedData =
    candidates && candidates?.filter((item) => item[filterKey] == true);
  console.log("allData", allData, archivedData, filterKey);
  const tablist = [
    `All (${allData?.length ?? "0"})`,
    `Not Interested (${archivedData?.length ?? "0"})`,
  ];
  const [showSelectCandidate, setshowSelectCandidate] = useState(false);
  const popOverListAll = ["Invite to Apply", "Not Interested"];
  const popOverListArchived = ["Delete", "Restore"];
  const componentList = [
    <All
      data={allData}
      matchCandidate
      filterKey={filterKey}
      cardStatus={"Interviewing"}
      popOverList={popOverListAll}
      handleEvent={(e) => {
        setshowSelectCandidate(true);
      }}
    />,
    <Archived
      data={archivedData}
      filterKey={filterKey}
      matchCandidate
      cardStatus={"Archived"}
      popOverList={popOverListArchived}
    />,
  ];
  return (
    <Box>
      {showSelectCandidate ? (
        <Box mt={{ md: "31px", base: "15px" }}>
          <SelectedCandidate matchCandidate />
        </Box>
      ) : (
        <ArchivedTabs componentList={componentList} tablist={tablist} />
      )}
    </Box>
  );
};

export default MatchCandidate;