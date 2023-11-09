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
import { useRouter } from "next/router";
import AboutYouTabs from "../ProfileSettingTabs/AboutYouTabs";
import CompanyBio from "./CompanyBio";
import CompanyLocation from "./CompanyLocation";
import SocialLink from "./SocialLinks";
import CustomTabs from "../CustomeTabs/CustomeTabs";
const CompanyTabs = ({ company }) => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    { label: "Company Bio", value: "About You", content: <CompanyBio /> },
    { label: "Company Location", value: "Email", content: <CompanyLocation /> },
    { label: "Social Links", value: "Password", content: <SocialLink /> },

    // Add more tabs if needed
  ];
  return (
    <>
      <Box display={{ sm: "none", base: "block" }} mx={'10px'}>
        <CustomTabs tabs={tabs} />
      </Box>

      <Tabs
        onChange={(index) => {
          setTabIndex(index);
        }}
        // border={"1px solid red"}
        width={{ lg: "70%", base: "100%" }}
        display={{ sm: "block", base: "none" }}
        // mx={"auto"}
        index={tabIndex}
        isFitted
      >
        <TabList
          sx={{
            ...globalStyles.fullTab,
            ...globalStyles.scrollBar,
            whiteSpace: "nowrap",
            overflowX: "scroll",
            width: { lg: "70%", base: "95%" },
            flexDirection: { sm: "row", base: "column" },
          }}
        >
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            sx={globalStyles.tabelinkStyle}
            _selected={globalStyles.selectTab}
          >
            {" "}
            Company Bio
          </Tab>
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            _selected={globalStyles.selectTab}
            sx={globalStyles.tabelinkStyle}
          >
            Company Location
          </Tab>

          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            _selected={globalStyles.selectTab}
            sx={globalStyles.tabelinkStyle}
          >
            Social Links
          </Tab>

          {company ? (
            <>
              <Tab
                fontSize={{ md: "16px", base: "14px" }}
                _selected={globalStyles.selectTab}
                sx={globalStyles.tabelinkStyle}
              >
                Preferences
              </Tab>
              <Tab
                fontSize={{ md: "16px", base: "14px" }}
                _selected={globalStyles.selectTab}
                sx={globalStyles.tabelinkStyle}
              >
                Billing
              </Tab>
            </>
          ) : null}
        </TabList>

        <TabPanels>
          <TabPanel>
            <CompanyBio />
          </TabPanel>
          <TabPanel>
            <CompanyLocation />
          </TabPanel>
          <TabPanel>
            <SocialLink />
          </TabPanel>
          {/*
  
            <TabPanel>
              <Preferences />
            </TabPanel>
            <TabPanel>
              <Billing />
            </TabPanel> */}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CompanyTabs;
