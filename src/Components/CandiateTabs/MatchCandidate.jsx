import { Box, Image, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../DropDown/DropDown";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import CandidatesDropdown from "./CandidatesDropdown";
import { HiOutlineMail } from "react-icons/hi";
import { getSelectedCandidates } from "@/Redux/slices/candidates";

import DeleteModal from "../DeleteModal/DeleteModal";
import endPoints from "@/Utils/endpoints";
import { deleteApi, put } from "@/helper/fetch";
import { setAll, setNotInterested } from "@/Redux/slices/matchCandidate";
import SelectedCandidateCard from "../SelectedCandidateCard/SelectedCandidateCard";

const MatchCandidate = ({ filterKey }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    interested: false,
    loading: false,
    reStore: false,
    delete: false,
  });
  const selectedJobState = useSelector(
    (state) => state.jobApplicantList.value.selectedJob
  );
  const [selectCandidate, setSelectCandidate] = useState(false);
  const allMatchCandidate = useSelector(
    (state) => state.matchCandidateList.value.matchCandidate.all
  );
  const notMatchCandidate = useSelector(
    (state) => state.matchCandidateList.value.matchCandidate.notInterested
  );
  // const tablist = [
  //   `All (${allData?.length ?? "0"})`,
  //   `Not Interested (${archivedData?.length ?? "0"})`,
  // ];
  const tablist = [
    `All (${allMatchCandidate?.length ?? 0})`,
    ` Not Interested (${notMatchCandidate?.length ?? 0})`,
  ];

  const popOverListAll = [
    {
      title: "Invite to Apply",

      handleEvent: (e) => {
        console.log("log", e);
      },
    },
    {
      title: "Not Interested",
      handleEvent: (e) => {
        setState((prev) => ({ ...prev, interested: e }));
      },
    },
  ];
  const popOverListArchived = [
    {
      title: "Delete",
      handleEvent: (e) => {
        setState((prev) => ({ ...prev, delete: e }));
      },
    },
    {
      title: "Restore",
      handleEvent: (e) => {
        setState((prev) => ({ ...prev, reStore: e }));
      },
    },
  ];
  const handleSelectCandidate = (data) => {
    console.log("selected", data);
    dispatch(getSelectedCandidates(data));
    setSelectCandidate(data);
  };
  const sortArray = [
    { label: "Sort Candidates By", listItem: ["Relevance"] },

    {
      label: "Education",
      listItem: [
        "No Minimum",
        "High School",
        "Trade School",
        "Undergraduate Degree (Associates or Bachelors)",
        "Graduate Degree",
      ],
    },

    {
      label: "Skills",
      listItem: [selectedJobState?.desiredSkills],

    },
  ];
  const componentList = [
    <All
      sortArray={sortArray}
      handleSelectCandidate={handleSelectCandidate}
      data={allMatchCandidate}
      // cardStatusDisable

      filterKey={filterKey}
      cardStatus={"Interviewing"}
      popOverList={popOverListAll}
    />,
    <Archived
      sortArray={sortArray}
      // cardStatusDisable
      handleSelectCandidate={handleSelectCandidate}
      data={notMatchCandidate}
      filterKey={filterKey}
      matchCandidate
      cardStatus={"New"}
      popOverList={popOverListArchived}
    />,
  ];

  const profileBtn = [
    {
      name: "Invite to Apply",
      display:true,

      icon: <HiOutlineMail className="hoverColor" />,
    },
  ];
  const handleNotInterested = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(
        `${endPoints.appliedJobs}/${state.interested.id}`,
        {
          interested: true,
        }
      );

      if (postData) {
        toast({
          position: "bottom-right",
          title: "candidate move successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            interested: false,
          };
        });
        dispatch(setNotInterested([...notMatchCandidate, postData.data]));
        dispatch(
          setAll([
            ...allMatchCandidate.filter((item) => item.id !== postData.data.id),
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
        `${endPoints.appliedJobs}/${state.reStore.id}`,
        {
          interested: false,
        }
      );

      if (postData) {
        toast({
          position: "bottom-right",
          title: "candidate restore successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            reStore: false,
          };
        });
        dispatch(
          setNotInterested([
            // ...notMatchCandidate, postData.data
            ...notMatchCandidate.filter((item) => item.id !== postData.data.id),
          ])
        );
        dispatch(
          setAll([
            // ...allMatchCandidate.filter((item) => item.id !== postData.data.id),
            ...allMatchCandidate,
            postData.data,
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
  const handleDelete = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await deleteApi(
        `${endPoints.appliedJobs}/${state.delete.id}`
      );

      if (postData) {
        toast({
          position: "bottom-right",
          title: "candidate delete successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            delete: false,
          };
        });
        // dispatch(setArchived([...archivedApplicants, postData.data]));
        dispatch(
          setNotInterested([
            ...notMatchCandidate.filter((item) => item.id !== postData.data.id),
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
  const handleReturn = () => {
    setSelectCandidate(null);
  };
  return (
    <Box>
      <DeleteModal
        name={state?.interested?.title}
        loading={state.loading}
        handleDelete={handleNotInterested}
        isOpen={state.interested}
        onClose={() =>
          setState((prev) => {
            return { ...prev, interested: false };
          })
        }
        deleteBtnLabel={"move"}
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
        deleteBtnLabel={"restore"}
      />
      <DeleteModal
        name={state?.delete?.title}
        loading={state.loading}
        handleDelete={handleDelete}
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
        // deleteBtnLabel={"Restore"}
      />
      <CandidatesDropdown />

      {selectCandidate ? (
        <Box mt={{ md: "31px", base: "15px" }}>
          {/* <SelectedCandidate   matchCandidate profileBtn={profileBtn} /> */}
          <SelectedCandidateCard
            handleReturn={handleReturn}
            profileBtn={profileBtn}
          />
        </Box>
      ) : (
        <ArchivedTabs componentList={componentList} tablist={tablist} />
      )}
    </Box>
  );
};

export default MatchCandidate;
