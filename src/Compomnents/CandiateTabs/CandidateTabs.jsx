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
import { jobApplicants } from "@/Redux/slices/jobApplicants";
const CandidateTabs = ({ company }) => {
  const candidates = useSelector((state) => state.candidates.value.all);
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);

  const router = useRouter();
  const dispatch = useDispatch();
  let [tabIndex, setTabIndex] = useState(0);

  // useEffect(() => {
  //   dispatch(getAllCandidates(data));
  // }, []);
  // useSkipInitialEffect(() => {
  //   if (candidates) {
  //     const applications = candidates?.filter(
  //       (item) => item.matchCandidate == false
  //     );
  //     dispatch(getFilterCandidates(applications));
  //   }
  // }, [candidates]);
  const handleChange = (ind) => {
    // if (ind == 0) {
    //   const applications = candidates?.filter(
    //     (item) => item.matchCandidate == false
    //   );

    //   dispatch(getFilterCandidates(applications));
    // } else {
    //   const applications = candidates?.filter(
    //     (item) => item.matchCandidate == true
    //   );

    //   dispatch(getFilterCandidates(applications));
    // }
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
      dispatch(jobApplicants(allJobState[0].id));
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

            {tabIndex == 2 ? null : (
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
              // <Box
              //   display={{ md: "block", base: "none" }}
              //   position={"absolute"}
              //   right={"12px"}
              //   bottom={"0px"}
              // >
              //   <DropDown
              //     dropdownOption={allJobState}
              //     keyName={"title"}
              //     defaultDropdown
              //     icon={<Image src={blue_arrow_down.src} />}
              //     placeholder={""}
              //     variant={"bg-dropdown"}
              //   />
              // </Box>
            )}
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
