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
import { useRouter } from "next/router";

const ArchivedTabs = ({ setActiveTabIndex, tablist, componentList }) => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Tabs
        onChange={(index) => {
          setTabIndex(index);
          if (setActiveTabIndex) {
            setActiveTabIndex(index);
          }
        }}
        width={{ lg: "100%", base: "100%" }}
        justifyContent={"flex-start"}
        index={tabIndex}
      >
        <TabList
          sx={{
            ...globalStyles.outlineTab,
            ...globalStyles.scrollBar,

            whiteSpace: "nowrap",
            mt: "11px",

            width: { md: "60%", base: "99%" },
          }}
        >
          {tablist?.map((item, index) => {
            return (
              <Tab
                key={index}
                fontSize={{ md: "16px", base: "14px" }}
                sx={globalStyles.outlineTab.tabelinkStyle}
                _selected={globalStyles.outlineTab.selectTab}
              >
                {item}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          {componentList?.map((item, index) => {
            return (
              <TabPanel key={index} px={"0px"}>
                {item}
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ArchivedTabs;
