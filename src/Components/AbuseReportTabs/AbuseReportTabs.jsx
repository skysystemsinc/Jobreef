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

import Active from "./Active";
import { useRouter } from "next/router";
import Archived from "./Archived";
import CustomTabs from "../CustomeTabs/CustomeTabs";

const AbuseReportTabs = ({ company }) => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  const tabLists = ["Active", "Archived"];
  const tabs = [
    { label: "Active", value: "Active", content: <Active /> },
    {
      label: "Archived",
      value: "Archived",
      content: <Archived />,
    },

    // Add more tabs if needed
  ];
  return (
    <>
      <Box display={{ sm: "none", base: "block" }} pt={"30px"}>
        <CustomTabs tabs={tabs} />
      </Box>
      <Tabs
        onChange={(index) => {
          setTabIndex(index);
        }}
        display={{ sm: "block", base: "none" }}
        index={tabIndex}
        isFitted
      >
        <Box position={"relative"}>
          <TabList
            sx={{
              ...globalStyles.fullTab,
              ...globalStyles.scrollBar,
              ml: { md: "0px", base: "0px" },
              width: { md: "40%", base: "99%" },
              // border: "1px solid red",
            }}
            flexDirection={{ sm: "row", base: "column" }}
          >
            {tabLists?.map((item, ind) => {
              return (
                <Tab
                  key={ind}
                  fontSize={{ md: "16px", base: "14px" }}
                  sx={globalStyles.tabelinkStyle}
                  _selected={globalStyles.selectTab}
                >
                  {" "}
                  {item}
                </Tab>
              );
            })}
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel px={"0px"}>
            <Active />
          </TabPanel>
          <TabPanel px={"0px"}>
            <Archived />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default AbuseReportTabs;
