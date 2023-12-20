import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../DropDown/DropDown";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import CandidatesDropdown from "./CandidatesDropdown";
import { HiOutlineMail } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import { jobApplicants } from "@/Reudx/slices/jobApplicants";
import DeleteModal from "../DeleteModal/DeleteModal";

const Application = ({ filterKey }) => {
  const dispatch = useDispatch();
  // const candidates = useSelector((state) => state.candidates.value.filter);
  const [state, setState] = useState({
    archived: false,
  });
  const selectedCandidates = useSelector(
    (state) => state.candidates.value.selected
  );
  const allApplicants = useSelector(
    (state) => state.jobApplicantList.value.applicants.all
  );
  const archivedApplicants = useSelector(
    (state) => state.jobApplicantList.value.applicants.archived
  );
  console.log("archivedApplicants", archivedApplicants);

  // const allData =
  //   candidates && candidates?.filter((item) => item[filterKey] == false);
  // const archivedData =
  //   candidates && candidates?.filter((item) => item[filterKey] == true);
  //   const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);

  const tablist = [
    `All (${allApplicants?.length ?? 0})`,
    ` Archived (${archivedApplicants?.length ?? 0})`,
  ];

  const popOverListAll = [
    { title: "Download Attachments" },
    { title: "Archive" },
  ];
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
      // data={applicationScreen}
      data={allApplicants}
      filterKey={filterKey}
      cardStatus={"Interviewing"}
      popOverList={popOverListAll}
    />,
    <Archived
      sortArray={sortArray}
      data={archivedApplicants}
      filterKey={filterKey}
      cardStatus={"Archived"}
      popOverList={popOverListArchived}
    />,
  ];

  const profileBtn = [
    {
      name: "Send Message",
      icon: <HiOutlineMail className="hoverColor" />,
    },

    {
      name: "Status:",
      span: "read",
      icon: <BsChevronDown className="hoverColor" />,
    },
  ];
  const handleArchived = () => {};
  return (
    <Box>
      <DeleteModal
        name={state?.archived?.title}
        loading={state.loading}
        handleDelete={handleArchived}
        isOpen={state.archived}
        onClose={() =>
          setState((prev) => {
            return { ...prev, archived: false };
          })
        }
        deleteBtnLabel={"archived"}
      />
      <CandidatesDropdown />

      {selectedCandidates ? (
        <Box mt={{ md: "31px", base: "15px" }}>
          <SelectedCandidate profileBtn={profileBtn} />
        </Box>
      ) : (
        <ArchivedTabs componentList={componentList} tablist={tablist} />
      )}
    </Box>
  );
};

export default Application;
