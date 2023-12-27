import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { DropdownLoading } from "../LoadingSkeleton/LoadingSkeleton";
import { jobApplicants } from "@/Redux/slices/jobApplicants";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import { jobApplications } from "@/Reudx/slices/jobApplications";

const CandidatesDropdown = ({ style }) => {
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);
  const dispatch = useDispatch();
  console.log("allJobState", allJobState);
  const handleSelectJob = (data) => {
    const parseData = JSON.parse(data.target.value);
    console.log("parseData", parseData);
    dispatch(jobApplications(parseData.id));
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
