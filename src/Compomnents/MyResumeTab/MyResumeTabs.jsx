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
      title: "Certifcations",
    },
    {
      title: "Skills",
    },
  ];
  return (
    <>
      <BottomWaveImage />

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
            width: { md: "70%", base: "100%" },
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
          {/* <Tab
            fontSize={{ md: "16px", base: "14px" }}
            _selected={globalStyles.selectTab}
            sx={globalStyles.tabelinkStyle}
          >
            Email
          </Tab>
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            _selected={globalStyles.selectTab}
            sx={globalStyles.tabelinkStyle}
          >
            Password
          </Tab> */}
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
          {/* <TabPanel>
              <ChangePassword />
            </TabPanel> */}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default MyResumeTabs;
