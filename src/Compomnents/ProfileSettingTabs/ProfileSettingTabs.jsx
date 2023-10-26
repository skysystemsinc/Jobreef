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
import AboutYouTabs from "./AboutYouTabs";
import waves from "@/assets/Images/waves.svg";
import EmailTabs from "./EmailTabs";
import ChangePassword from "./ChangePassword";
import globalStyles from "@/styles/globalStyles";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";
import { useRouter } from "next/router";
import { role, roles } from "@/Utils/role";
import Preferences from "./Preferences";
import Billing from "./Billing";
const ProfileSettingTabs = ({ company }) => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
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
          sx={{ ...globalStyles.fullTab, width: "100%" }}
          flexDirection={{ sm: "row", base: "column" }}
        >
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            sx={globalStyles.tabelinkStyle}
            _selected={globalStyles.selectTab}
          >
            {" "}
            About You
          </Tab>
          <Tab
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
          </Tab>

          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            _selected={globalStyles.selectTab}
            sx={globalStyles.tabelinkStyle}
          >
            Preferences
          </Tab>
          {company ? (
            <>
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
            <AboutYouTabs />
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ProfileSettingTabs;
