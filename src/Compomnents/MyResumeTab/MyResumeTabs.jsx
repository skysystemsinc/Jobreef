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
import AboutYouTabs from "../ProfileSettingTabs/AboutYouTabs";
import Overview from "./Overview";
import WorkExperiance from "./WorkExperiance";
import Education from "./Education";
import Certification from "./Certification";
import Skills from "./Skills";
import Attachments from "./Attachments";
import Achievement from "./Achivement";
import CustomTabs from "../CustomeTabs/CustomeTabs";

const MyResumeTabs = () => {
  let [tabIndex, setTabIndex] = useState(0);
  const tabList = [
    {
      title: "Overview",
    },
    {
      title: "Work Experience",
    },
    {
      title: "Education",
    },
    {
      title: "Certifications",
    },
    {
      title: "Skills",
    },
    {
      title: "Achievements",
    },
    {
      title: "Attachments",
    },
  ];
  const tabs = [
    { label: "Overview", value: "Overview", content: <Overview /> },
    {
      label: "Work Experience",
      value: "Work Experience",
      content: <WorkExperiance />,
    },
    { label: "Education", value: "Education", content: <Education /> },
    {
      label: "Certifications",
      value: "Certifications",
      content: <Certification />,
    },
    { label: "Skills", value: "Skills", content: <Skills /> },
    { label: "Achievements", value: "Achievements", content: <Achievement /> },
    { label: "Attachments", value: "Attachments", content: <Attachments /> },

    // Add more tabs if needed
  ];
  return (
    <>
      <Box display={{ md: "none", base: "block" }}>
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
            // whiteSpace: "nowrap",
            // overflowX: "scroll",
            flexDirection: { md: "row", base: "column" },
            width: { lg: "70%", md: "100%", base: "100%" },
          }}
        >
          {tabList.map((item, index) => {
            return (
              <Tab
                key={index}
                fontSize={{ md: "16px", base: "14px" }}
                sx={globalStyles.tabelinkStyle}
                whiteSpace={"nowrap"}
                _selected={globalStyles.selectTab}
              >
                {item.title}
              </Tab>
            );
          })}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box display={"flex"} justifyContent={"center"}>
              <Overview setTabIndex={setTabIndex} tabIndex={tabIndex} />
            </Box>
          </TabPanel>
          <TabPanel>
            <WorkExperiance />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          <TabPanel>
            <Certification />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Achievement />
          </TabPanel>
          <TabPanel>
            <Attachments />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default MyResumeTabs;
