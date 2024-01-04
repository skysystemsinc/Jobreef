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
import React, { useState } from "react";

import globalStyles from "@/styles/globalStyles";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";
import AppliedJobs from "./AppliedJobs";
import SavedJobs from "./SavedJobs";
import JobAlert from "./JobAlert";
import CustomTabs from "../CustomeTabs/CustomeTabs";
const MyJobsTabs = () => {
  let [tabIndex, setTabIndex] = useState(0);
  const tabList = [
    {
      title: "Applied Jobs",
    },
    {
      title: "Saved Jobs",
    },
    {
      title: "Job Alerts",
    },
  ];
  const tabs = [
    { label: "Applied Jobs", value: "Applied Jobs", content: <AppliedJobs /> },
    {
      label: "Saved Jobs",
      value: "Saved Jobs",
      content: <SavedJobs />,
    },
    { label: "Job Alerts", value: "Job Alerts", content: <JobAlert /> },

    // Add more tabs if needed
  ];
  return (
    <>
      <Box display={{ sm: "none", base: "block" }}>
        <CustomTabs tabs={tabs} />
      </Box>
      <Tabs
        onChange={(index) => {
          setTabIndex(index);
        }}
        display={{ md: "block", base: "none" }}
        index={tabIndex}
        isFitted
      >
        <TabList
          sx={{
            ...globalStyles.fullTab,
            ...globalStyles.scrollBar,

            whiteSpace: "nowrap",
            overflowX: "scroll",
            width: { md: "55%", base: "100%" },
          }}
        >
          {tabList.map((item, index) => {
            return (
              <Tab
                key={index}
                fontSize={{ md: "16px", base: "14px" }}
                sx={globalStyles.tabelinkStyle}
                _selected={globalStyles.selectTab}
              >
                {item.title}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          <TabPanel>
            <AppliedJobs />
          </TabPanel>
          <TabPanel>
            <SavedJobs />
          </TabPanel>
          <TabPanel>
            <JobAlert />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default MyJobsTabs;
