import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";

const Application = () => {
  const tablist = ["All (19)", "Archived (3)"];
  const [showSelectCandidate, setshowSelectCandidate] = useState(false);
  const popOverListAll = ["Download Attachments", "Archived"];
  const popOverListArchived = ["Restore", "Delete"];
  const componentList = [
    <All
      cardStatus={"Interviewing"}
      popOverList={popOverListAll}
      handleEvent={(e) => {
        setshowSelectCandidate(true);
      }}
    />,
    <Archived cardStatus={"Archived"} popOverList={popOverListArchived} />,
  ];
  return (
    <Box>
      {showSelectCandidate ? (
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
