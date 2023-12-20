'use client'
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
import ActiveJobs from "./ActiveJobs";

import InActiveJobs from "./InActive";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { get } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { setAllJobs } from "@/Reudx/slices/jobPost";

const JobPostTabs = ({ company }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  let [tabIndex, setTabIndex] = useState(0);
  const companyState = useSelector((state) => state.companyRegister.value);

  const getAllJobs = async () => {
    try {
      const postData = await get(
        `${endPoints.jobs}/${endPoints.companyJobs}/${companyState.id}`,
        "GET"
      );
      if (postData.success) {
        const { data } = postData;
        console.log("data",data);
        

        dispatch(setAllJobs(data));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("test render");
    if (companyState.id) {
      getAllJobs();
    }
  }, []);

  return (
    <>
      <Tabs
        // px={ {xl:"0px",   base: "10px"}}
        onChange={(index) => {
          setTabIndex(index);
        }}
        // border={"1px solid red"}
        width={{ lg: "100%", base: "100%" }}
        justifyContent={"flex-start"}
        // mx={"auto"}
        index={tabIndex}
        isFitted
      >
        <Box position={"relative"} width={"100%"}>
          <TabList
            sx={{
              ...globalStyles.fullTab,
              ...globalStyles.scrollBar,
              ml: { md: "0px", base: "0px" },
              whiteSpace: "nowrap",

              overflowX: "scroll",
              width: { md: "40%", base: "99%" },
              // border: "1px solid red",
            }}
          >
            <Tab
              fontSize={{ md: "16px", base: "14px" }}
              sx={globalStyles.tabelinkStyle}
              _selected={globalStyles.selectTab}
            >
              {" "}
              Active
            </Tab>
            <Tab
              fontSize={{ md: "16px", base: "14px" }}
              _selected={globalStyles.selectTab}
              sx={globalStyles.tabelinkStyle}
            >
              Inactive
            </Tab>

            <Button
              onClick={() => router.push("/company/create-job-post")}
              display={{ md: "block", base: "none" }}
              position={"absolute"}
              right={"12px"}
              bottom={"0px"}
              variant={"blue-btn"}
            >
              Create a Job Post
            </Button>
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel px={"0px"}>
            <Box
              width={"100%"}
              // border={"1px solid red"}
              display={{ md: "none", base: "flex" }}
              justifyContent={"flex-end !important"}
              mb={"12px"}
              onClick={() => router.push("/company/create-job-post")}
            >
              <Button variant={"blue-btn"}>Create a Job Post</Button>
            </Box>
            <ActiveJobs />
          </TabPanel>
          <TabPanel px={"0px"}>
            <Box
              onClick={() => router.push("/company/create-job-post")}
              width={"100%"}
              // border={"1px solid red"}
              display={{ md: "none", base: "flex" }}
              justifyContent={"flex-end !important"}
              mb={"12px"}
            >
              <Button variant={"blue-btn"}>Create a Job Post</Button>
            </Box>
            <InActiveJobs />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default JobPostTabs;
