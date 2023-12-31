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
import { role, roles } from "@/Utils/constant";

import DropDown from "../DropDown/DropDown";
import CustomTabs from "../CustomeTabs/CustomeTabs";
import Resume from "./Resume";
import Attachment from "./Attachment";
import NotePad from "../NotePad/NotePad";
import ScreeningQuestion from "./ScreeningQuestion";
import CandidatesHistory from "./CandidatesHistory";

const CandidateTabs = ({ disableNotePad, matchCandidate, company }) => {
  console.log("company", company);
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  const tabList = [
    { title: "Resume" },
    { title: "Attachments", disable: matchCandidate ? true : false },
    { title: "Notepad", disable: disableNotePad ? true : false },
    { title: "Screening Questions", disable: matchCandidate ? true : false },
    { title: "Candidate History" },
  ];

  return (
    <>
      {/* <Box display={{ sm: "none", base: "block" }}>
          <CustomTabs tabs={tabs} />
        </Box> */}
      <Tabs
        onChange={(index) => {
          setTabIndex(index);
        }}
        index={tabIndex}
        // display={{ sm: "block", base: "none" }}
      >
        <TabList
          sx={{ ...globalStyles.buttonTab, width: "100%" }}
          mt={"40px"}
          // flexDirection={{ sm: "row", base: "column" }}
        >
          {tabList.map((item) => {
            return item.disable ? null : (
              <Tab
                fontSize={{ md: "16px", base: "14px" }}
                sx={globalStyles.buttonTab.tabelinkStyle}
                _selected={globalStyles.buttonTab.selectTab}
              >
                {" "}
                {item.title}
              </Tab>
            );
          })}
        </TabList>

        <TabPanels>
          <TabPanel p={"0px"}>
            <Resume />
          </TabPanel>

          <TabPanel p={"0px"}>
            <Attachment />
          </TabPanel>
          <TabPanel p={"0px"}>
            <NotePad />
          </TabPanel>

          <TabPanel p={"0px"}>
            <ScreeningQuestion />
          </TabPanel>
          <TabPanel p={"0px"}>
            <CandidatesHistory />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CandidateTabs;
