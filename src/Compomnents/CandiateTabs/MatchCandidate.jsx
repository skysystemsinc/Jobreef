import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";

const MatchCandidate = () => {
  const tablist = ["All (19)", "Not Interested (2)"];
  const [showSelectCandidate, setshowSelectCandidate] = useState(false);
  const popOverListAll = ["Invite to Apply", "Not Interested"];
  const popOverListArchived = ["Delete", "Restore"];
  const componentList = [
    <All
    matchCandidate
      cardStatus={"Interviewing"}
      popOverList={popOverListAll}
      handleEvent={(e) => {
        setshowSelectCandidate(true);
      }}
    />,
    <Archived matchCandidate cardStatus={"Archived"} popOverList={popOverListArchived} />,
  ];
  return (
    <Box>
      {showSelectCandidate ? (
        <Box mt={{ md: "31px", base: "15px" }}>
          <SelectedCandidate matchCandidate />
        </Box>
      ) : (
        <ArchivedTabs   componentList={componentList} tablist={tablist} />
      )}
    </Box>
  );
};

export default MatchCandidate;
