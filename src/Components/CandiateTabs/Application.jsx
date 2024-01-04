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
  jobApplications,
  setAll,
  setArchived,
} from "@/Redux/slices/jobApplications";
import DeleteModal from "../DeleteModal/DeleteModal";
import endPoints from "@/Utils/endpoints";
import { deleteApi, post, put } from "@/helper/fetch";
import { getSelectedCandidates } from "@/Redux/slices/candidates";
import SelectedCandidateCard from "../SelectedCandidateCard/SelectedCandidateCard";
import { setFilter, setSelectFilter } from "@/Redux/slices/filters";

const Application = ({ filterKey }) => {
  const dispatch = useDispatch();
  const selectedJobState = useSelector(
    (state) => state.jobApplicantList.value.selectedJob
  );

  const [selectCandidate, setSelectCandidate] = useState(false);
  const toast = useToast();
  const [state, setState] = useState({
    archived: false,
    loading: false,
    reStore: false,
    delete: false,
  });

  const allApplicants = useSelector(
    (state) => state.jobApplicantList.value.application.all
  );

  const archivedApplicants = useSelector(
    (state) => state.jobApplicantList.value.application.archived
  );
  const selectedFilterState = useSelector(
    (state) => state.filters.value.filters
  );
  const tablist = [
    `All (${allApplicants?.length ?? 0})`,
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
        console.log("e", e);
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

  const handleSelectCandidate = (data) => {
    console.log("selected", data);
    dispatch(getSelectedCandidates(data));
    setSelectCandidate(data);
  };
  const handleAllFilter = async () => {
    dispatch(setAll(false));

    const postData = await post(`${endPoints.filters}/${selectedJobState.id}`, {
      ...selectedFilterState,
      fixedKey: "archived",
      fixedValue: false,
    });
    dispatch(setAll(postData.data));
  };
  const handleArchivedFilter = async () => {
    dispatch(setArchived(false));

    const postData = await post(`${endPoints.filters}/${selectedJobState.id}`, {
      ...selectedFilterState,
      fixedKey: "archived",
      fixedValue: true,
    });
    dispatch(setArchived(postData.data));
  };
  const handleAllReset = async () => {
    dispatch(setAll(false));
    const postData = await post(`${endPoints.filters}/${selectedJobState.id}`, {
      fixedKey: "archived",
      fixedValue: false,
    });
    dispatch(setAll(postData.data));
    dispatch(setFilter(false));
  };
  const handleArchivedReset = async () => {
    dispatch(setArchived(false));
    const postData = await post(`${endPoints.filters}/${selectedJobState.id}`, {
      fixedKey: "archived",
      fixedValue: true,
    });
    dispatch(setArchived(postData.data));
    dispatch(setFilter(false));
  };
  const componentList = [
    <All
      handleSelectCandidate={handleSelectCandidate}
      handleReset={handleAllReset}
      handleApplyFilter={handleAllFilter}
      data={allApplicants}
      popOverList={popOverListAll}
    />,
    <Archived
      handleReset={handleArchivedReset}
      handleApplyFilter={handleArchivedFilter}
      data={archivedApplicants}
      handleSelectCandidate={handleSelectCandidate}
      popOverList={popOverListArchived}
    />,
  ];

  const profileBtn = [
    {
      name: "Send Message",
      display: true,

      icon: <HiOutlineMail className="hoverColor" />,
    },

    {
      name: "Status",
      display: true,

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
          // status:""
        }
      );

      if (postData) {
        toast({
          position: "bottom-right",
          title: "candidate archived successfully",
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
        `${endPoints.appliedJobs}/${state.reStore.id}`,
        {
          archived: true,
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
        dispatch(setAll([...allApplicants, postData.data]));
        dispatch(
          setArchived([
            ...archivedApplicants.filter(
              (item) => item.id !== postData.data.id
            ),
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
          setArchived([
            ...archivedApplicants.filter(
              (item) => item.id !== postData.data.id
            ),
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
        // deleteBtnLabel={""}
      />
      <CandidatesDropdown />

      {selectCandidate ? (
        <Box mt={{ md: "31px", base: "15px" }}>
          {/* <SelectedCandidate profileBtn={profileBtn} /> */}
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

export default Application;