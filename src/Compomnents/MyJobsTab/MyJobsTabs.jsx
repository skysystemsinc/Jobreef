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
  return (
    <>
      
      <Tabs
        onChange={(index) => {
          setTabIndex(index);
        }}
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
            <AppliedJobs/>
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
