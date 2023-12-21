import { Box, Image, useToast } from "@chakra-ui/react";
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
import {
  jobApplicants,
  setAll,
  setArchived,
} from "@/Redux/slices/jobApplicants";
import DeleteModal from "../DeleteModal/DeleteModal";
import endPoints from "@/Utils/endpoints";
import { put } from "@/helper/fetch";
import { getSelectedCandidates } from "@/Redux/slices/candidates";

const Application = ({ filterKey }) => {
  const dispatch = useDispatch();
  // const dispatch = useDispatch()
  const toast = useToast();
  const [state, setState] = useState({
    archived: false,
    loading: false,
    reStore: false,
    delete: false,
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

  const tablist = [
    `All (${allApplicants?.length ?? 0} )`,
    ` Archived (${archivedApplicants?.length ?? 0})`,
  ];

  const popOverListAll = [
    {
      title: "Download Attachments",
      handleEvent: (e) => {
        console.log("log", e);
      },
    },
    {
      title: "Archive",
      handleEvent: (e) => {
        setState((prev) => ({ ...prev, archived: e }));
      },
    },
  ];
  const popOverListArchived = [
    {
      title: "Restore",
      handleEvent: (e) => {
        setState((prev) => ({ ...prev, reStore: e }));
      },
    },
    {
      title: "Delete",
      handleEvent: (e) => {
        setState((prev) => ({ ...prev, delete: e }));
      },
    },
  ];

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
  const handleSelectCandidate = (data) => {
    dispatch(getSelectedCandidates(data));
  };
  const componentList = [
    <All
      handleSelectCandidate={handleSelectCandidate}
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

  const handleArchived = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(
        `${endPoints.appliedJobs}/${state.archived.id}`,
        {
          archived: true,
        }
      );

      if (postData) {
        toast({
          position: "bottom-right",
          title: "job paused successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            archived: false,
          };
        });
        dispatch(setArchived([...archivedApplicants, postData.data]));
        dispatch(
          setAll([
            ...allApplicants.filter((item) => item.id !== postData.data.id),
          ])
        );
      }
    } catch (err) {
      console.log("err", err);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleRestore = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(
        `${endPoints.appliedJobs}/${state.archived.id}`,
        {
          archived: true,
        }
      );

      if (postData) {
        toast({
          position: "bottom-right",
          title: "job paused successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            archived: false,
          };
        });
        dispatch(setArchived([...archivedApplicants, postData.data]));
        dispatch(
          setAll([
            ...allApplicants.filter((item) => item.id !== postData.data.id),
          ])
        );
      }
    } catch (err) {
      console.log("err", err);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
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
        deleteBtnLabel={"Archived"}
      />
      <DeleteModal
        name={state?.reStore?.title}
        loading={state.loading}
        handleDelete={handleRestore}
        isOpen={state.reStore}
        onClose={() =>
          setState((prev) => {
            return { ...prev, reStore: false };
          })
        }
        deleteBtnLabel={"Restore"}
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
