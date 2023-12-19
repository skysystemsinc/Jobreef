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
import DropDown from "../DropDown/DropDown";
import CustomTabs from "../CustomeTabs/CustomeTabs";
const ProfileSettingTabs = ({ company , candidate}) => {
  console.log("company", company)
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    { label: "About You", value: "About You", content: <AboutYouTabs candidate={candidate} /> },
    { label: "Email", value: "Email", content: <EmailTabs /> },
    { label: "Password", value: "Password", content: <ChangePassword /> },
    { label: "Preferences", value: "Preferences", content: <Preferences /> },
    { label: "Billing", value: "Billing", content: <Billing /> , disable:company?false:true },
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
        index={tabIndex}
        isFitted
        display={{ sm: "block", base: "none" }}
      >
        <TabList
          sx={{ ...globalStyles.fullTab, width: "100%" }}
          whiteSpace={"nowrap"}
          overflowX={"scroll"}
          // flexDirection={{ sm: "row", base: "column" }}
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
            <AboutYouTabs candidate={candidate} />
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
