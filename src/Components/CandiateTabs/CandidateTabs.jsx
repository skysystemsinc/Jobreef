import {
  Box,
  Button,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import globalStyles from "@/styles/globalStyles";

import { useRouter } from "next/router";
import DropDown from "../DropDown/DropDown";
import Application from "./Application";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import MatchCandidate from "./MatchCandidate";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCandidates,
  getFilterCandidates,
} from "@/Redux/slices/candidates";
import data from "@/db/candidates.json";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import Search from "./Search";
import CustomTabs from "../CustomeTabs/CustomeTabs";
import endPoints from "@/Utils/endpoints";
import { setAllJobs } from "@/Redux/slices/jobPost";
import { get } from "@/helper/fetch";
import CandidatesDropdown from "./CandidatesDropdown";
import {
  jobApplications,
  setSelectedJob,
} from "@/Redux/slices/jobApplications";
import { matchCandidate } from "@/Redux/slices/matchCandidate";
import { savedApplications, setSaved } from "@/Redux/slices/search";

const CandidateTabs = ({ company }) => {
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);
  // const selectedJobState = useSelector((state) => state.jobApplicantList.value.selectedJob);
  const selectedJobState = useSelector(
    (state) => state.jobApplicantList.value.selectedJob
  );
  console.log("selectedJobState", selectedJobState);

  const router = useRouter();
  const dispatch = useDispatch();
  let [tabIndex, setTabIndex] = useState(0);

  const handleChange = (ind) => {
    if (ind == 1) {
      if (allJobState) {
        dispatch(matchCandidate(allJobState[0].id));
      }
    } else if (ind == 2) {
      if (selectedJobState) {
        dispatch(savedApplications(selectedJobState.id));
      }
    }

    setTabIndex(ind);
  };

  const tabLists = ["Applications", "Matched Candidates", "Search"];
  const tabs = [
    {
      label: "Applications",
      value: "Applications",
      content: <Application filterKey={"archived"} />,
    },
    {
      label: "Matched Candidates",
      value: "Matched Candidates",
      content: <MatchCandidate filterKey={"notInterested"} />,
    },
    {
      label: "Search",
      value: "Search",
      content: <Search filterKey={"notInterested"} />,
    },

    // Add more tabs if needed
  ];

  const companyState = useSelector((state) => state.companyRegister.value);

  const getAllJobs = async () => {
    try {
      const postData = await get(
        `${endPoints.jobs}/${endPoints.companyJobs}/${companyState.id}`,
        "GET"
      );
      if (postData.success) {
        const { data } = postData;

        dispatch(setAllJobs(data));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (companyState?.id) {
      getAllJobs();
    }
  }, [companyState]);

  useEffect(() => {
    if (allJobState) {
      dispatch(jobApplications(allJobState[0].id));

      dispatch(setSelectedJob(allJobState[0]));
    }
  }, [allJobState]);

  return (
    <>
      <Box display={{ md: "none", base: "block" }}>
        <CustomTabs tabs={tabs} />
      </Box>
      <Tabs
        // px={ {xl:"0px",   base: "10px"}}
        onChange={(index) => {
          handleChange(index);
        }}
        display={{ md: "block", base: "none" }}
        // border={"1px solid red"}
        width={{ lg: "100%", base: "100%" }}
        justifyContent={"flex-start"}
        index={tabIndex}
        isFitted
      >
        <Box position={"relative"} width={"100%"}>
          <TabList
            sx={{
              ...globalStyles.fullTab,
              ...globalStyles.scrollBar,
              ml: { md: "0px", base: "0px" },
              flexDirection: { md: "row", base: "column" },
              width: { md: "60%", base: "99%" },
              // border: "1px solid red",
            }}
          >
            {tabLists?.map((item, ind) => {
              return (
                <Tab
                  key={ind}
                  fontSize={{ md: "16px", base: "14px" }}
                  sx={globalStyles.tabelinkStyle}
                  _selected={globalStyles.selectTab}
                >
                  {" "}
                  {item}
                </Tab>
              );
            })}

            <CandidatesDropdown
              style={{
                position: "absolute",
                bottom: "0px",
                right: "12px",
                display: {
                  md: "block",
                  base: "none",
                },
              }}
            />
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel px={"0px"}>
            <Application filterKey={"archived"} />
          </TabPanel>
          <TabPanel px={"0px"}>
            <MatchCandidate filterKey={"notInterested"} />
          </TabPanel>
          <TabPanel px={"0px"}>
            <Search filterKey={"notInterested"} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CandidateTabs;
