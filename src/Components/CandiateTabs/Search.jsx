import { Box, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ArchivedTabs from "../ArchivedTabs/ArchivedTabs";
import All from "../ArchivedTabs/All";
import Archived from "../ArchivedTabs/Archived";
import SelectedCandidate from "../ArchivedTabs/SelectedCandidate";
import { useDispatch, useSelector } from "react-redux";
import { IoSaveOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import DeleteModal from "../DeleteModal/DeleteModal";
import { post, put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { setSaved, setSearchResult } from "@/Redux/slices/search";
import { getSelectedCandidates } from "@/Redux/slices/candidates";
import SelectedCandidateCard from "../SelectedCandidateCard/SelectedCandidateCard";
import { setFilter } from "@/Redux/slices/filters";
const Search = ({ filterKey }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const dispatch = useDispatch();
  const toast = useToast();
  const [selectCandidate, setSelectCandidate] = useState(false);

  const [state, setState] = useState({
    save: false,
    loading: false,
    alreadySaved: false,
    delete: false,
  });

  const searchResult = useSelector(
    (state) => state.searchList.value.searchResult
  );
  const selectedJobState = useSelector(
    (state) => state.jobApplicantList.value.selectedJob
  );
  const selectedFilterState = useSelector(
    (state) => state.filters.value.filters
  );
  const savedCandidates = useSelector((state) => state.searchList.value.saved);
  const handleSelectCandidate = (data) => {
    console.log("selected", data);
    dispatch(getSelectedCandidates(data));
    setSelectCandidate(data);
  };
  const handleSave = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(`${endPoints.appliedJobs}/${state.save.id}`, {
        saved: true,
      });

      if (postData) {
        toast({
          position: "bottom-right",
          title: "candidate saved successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            save: false,
          };
        });
        dispatch(
          setSaved(
            savedCandidates
              ? [...savedCandidates, postData.data]
              : [postData.data]
          )
        );
        dispatch(
          setSearchResult([
            ...searchResult.filter((item) => item.id !== postData.data.id),
          ])
        );
        setSelectCandidate(null);
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
      const postData = await put(
        `${endPoints.appliedJobs}/${state.delete.id}`,
        {
          saved: false,
          // status:""
        }
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
        // dispatch(setSearchResult([...searchResult, postData.data]));
        dispatch(
          setSaved([
            ...savedCandidates.filter((item) => item.id !== postData.data.id),
          ])
        );
        setSelectCandidate(null);
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

  const handleSearchFilter = async () => {
    dispatch(setSearchResult(false));

    const postData = await post(
      `${endPoints.filters}/${selectedJobState.id}?searchQuery=${selectedFilterState.searchResult.multipleSearch}&location=${selectedFilterState.searchResult.location}`,
      {
        ...selectedFilterState,
      }
    );
    dispatch(setSearchResult(postData.data));
  };
  const handleSavedFilter = async () => {
    dispatch(setSaved(false));

    const postData = await post(`${endPoints.filters}/${selectedJobState.id}`, {
      ...selectedFilterState,
      fixedKey: "saved",
      fixedValue: true,
    });
    dispatch(setSaved(postData.data));
  };
  const handleSearchReset = async () => {
    dispatch(setSearchResult(false));
    const postData = await post(
      `${endPoints.filters}/${selectedJobState.id}?searchQuery=${selectedFilterState.searchResult.multipleSearch}&location=${selectedFilterState.searchResult.location}`,
      {}
    );
    dispatch(setSearchResult(postData.data));
    dispatch(
      setFilter({
        searchResult: selectedFilterState.searchResult,
        sortBy: [],
        status: [],
        educationLevel: [],
        skills: [],
      })
    );
  };
  const handleSavedReset = async () => {
    dispatch(setSaved(false));
    const postData = await post(`${endPoints.filters}/${selectedJobState.id}`, {
      fixedKey: "saved",
      fixedValue: true,
    });
    dispatch(setSaved(postData.data));
    dispatch(setFilter(false));
  };
  const tablist = [
    `Search Results`,
    `Saved Contacts (${savedCandidates?.length ?? 0})`,
  ];
  const popOverListAll = [
    {
      title: "Send Message",
      handleEvent: (e) => {
        console.log("log", e);
      },
    },
    {
      title: "Save  Contact",
      handleEvent: (e) => {
        console.log("state.save", state.save);
        if (e.saved) {
          setState((prev) => {
            return {
              ...prev,
              alreadySaved: true,
            };
          });
          return;
        }
        setState((prev) => ({ ...prev, save: e }));
      },
    },
  ];
  const popOverListArchived = [
    { title: "Send Message", handleEvent: () => {} },
    { title: "Invite to Apply", handleEvent: () => {} },
    {
      title: "Delete Contact",
      handleEvent: (e) => {
        setState((prev) => ({ ...prev, delete: e }));
      },
    },
  ];

  const componentList = [
    <All
      handleReset={handleSearchReset}
      handleApplyFilter={handleSearchFilter}
      handleSelectCandidate={handleSelectCandidate}
      searchBox
      data={searchResult}
      matchCandidate
      cardStatusDisable
      popOverList={popOverListAll}
    />,
    <Archived
      handleSelectCandidate={handleSelectCandidate}
      handleApplyFilter={handleSavedFilter}
      handleReset={handleSavedReset}
      matchCandidate
      cardStatusDisable
      data={savedCandidates}
      popOverList={popOverListArchived}
    />,
  ];

  const secondProfileBtn = [
    {
      name: "Send Message",
      icon: <HiOutlineMail className="hoverColor" />,
      handleEvent: () => {},
      display: true,
    },
    {
      name: "Delete Contact",
      icon: <HiOutlineMail className="hoverColor" />,
      handleEvent: (e) => {
        setState((prev) => ({ ...prev, delete: e }));
      },
      display: true,
    },
    {
      name: "Invite to Apply",
      icon: <HiOutlineMail className="hoverColor" />,
      handleEvent: () => {},
      display: true,
    },
  ];
  const firstTabProfileBtn = [
    {
      name: "Save Contacts",
      display: activeTabIndex == 1 ? false : true,
      handleEvent: (data) => {
        setState((prev) => ({ ...prev, save: data }));
      },
      icon: <IoSaveOutline className="hoverColor" />,
    },
  ];

  return (
    <Box>
      <DeleteModal
        name={state?.save?.title}
        loading={state.loading}
        handleDelete={handleSave}
        isOpen={state.save}
        onClose={() =>
          setState((prev) => {
            return { ...prev, save: false };
          })
        }
        deleteBtnLabel={"Save"}
      />
      <DeleteModal
        isOpen={state.alreadySaved}
        onClose={() =>
          setState((prev) => {
            return { ...prev, alreadySaved: false };
          })
        }
        disableSaveButton
        deleteBtnLabel={"Saved"}
        deleteDesc={"This candidate is in your saved collection!"}
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
        deleteBtnLabel={"Delete"}
      />
      {selectCandidate ? (
        <Box mt={{ md: "31px", base: "15px" }}>
          <SelectedCandidateCard
            handleReturn={handleReturn}
            profileBtn={
              activeTabIndex === 0 ? firstTabProfileBtn : secondProfileBtn
            }
            notePaddisableNotePad={activeTabIndex==0?false:true}
            matchCandidate
            disableStars
            disableDate
          />
        </Box>
      ) : (
        <ArchivedTabs
          // setActiveTabIndex={setActiveTabIndex}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          componentList={componentList}
          tablist={tablist}
        />
      )}
    </Box>
  );
};

export default Search;
