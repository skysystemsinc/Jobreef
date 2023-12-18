import { Box, Image } from "@chakra-ui/react";
import React from "react";
import DropDown from "../DropDown/DropDown";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import { useSelector } from "react-redux";
import { DropdownLoading } from "../LoadingSkeleton/LoadingSkeleton";

const CandidatesDropdown = ({ style }) => {
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);
  console.log("allJobState", allJobState);

  return (
    <Box
      display={{ md: "none", base: "flex" }}
      sx={style}
      justifyContent={"flex-end"}
    >
      {/* {!allJobState ? (
        <DropdownLoading />
      ) : ( */}
        <DropDown
          defaultDropdown
          // dropdownOption={allJobState}
          keyName={"title"}
          style={{ width: "max-content", minWidth:"170px" }}
          icon={<Image src={blue_arrow_down.src} />}
          placeholder={""}
          variant={"bg-dropdown"}
        />
      {/* )} */}
    </Box>
  );
};

export default CandidatesDropdown;
