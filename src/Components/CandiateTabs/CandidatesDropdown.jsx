import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { DropdownLoading } from "../LoadingSkeleton/LoadingSkeleton";
import {
  jobApplications,
  setSelectedJob,
} from "@/Redux/slices/jobApplications";

const CandidatesDropdown = ({ style }) => {
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);
  const dispatch = useDispatch();
  
  const handleSelectJob = (data) => {
    const parseData = JSON.parse(data.target.value);
    
    dispatch(jobApplications({id: parseData.id, body:{}}));
    dispatch(setSelectedJob(parseData));
  };

  return (
    <Box
      display={{ md: "none", base: "flex" }}
      sx={style}
      justifyContent={"flex-end"}
    >
      {!allJobState ? (
        <DropdownLoading />
      ) : (
        <DropDown
          setState={handleSelectJob}
          defaultDropdown
          dropdownOption={allJobState}
          keyName={"title"}
          style={{ width: "max-content", minWidth: "170px" }}
          icon={<Image src={blue_arrow_down.src} />}
          placeholder={""}
          variant={"bg-dropdown"}
        />
      )}
    </Box>
  );
};

export default CandidatesDropdown;
