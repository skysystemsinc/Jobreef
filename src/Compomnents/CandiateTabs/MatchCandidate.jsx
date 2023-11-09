import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";
import { useSelector } from "react-redux";
import DropDown from "../DropDown/DropDown";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";

const MatchCandidate = ({ filterKey }) => {
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
  //   `Not Interested (${archivedData?.length ?? "0"})`,
  // ];
  const tablist = [`All (1)`, ` Not Interested (1)`];

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
          <SelectedCandidate matchCandidate />
        </Box>
      ) : (
        <ArchivedTabs componentList={componentList} tablist={tablist} />
      )}
    </Box>
  );
};

export default MatchCandidate;
