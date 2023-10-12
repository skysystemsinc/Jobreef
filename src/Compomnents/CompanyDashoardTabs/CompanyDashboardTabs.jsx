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
const CompanyTabs = ({ company }) => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <BottomWaveImage />

      <Tabs
        onChange={(index) => {
          setTabIndex(index);
        }}
        // border={"1px solid red"}
        width={"70%"}
        index={tabIndex}
        isFitted
      >
        <TabList sx={{ ...globalStyles.fullTab, width: "70%", border:"1px solid red" }}>
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
          {/* <TabPanel>
              <Box pb={{ md: "90px", base: "40px" }}>
                <EmailTabs />
              </Box>
            </TabPanel>
            <TabPanel>
              <ChangePassword />
            </TabPanel>
  
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
