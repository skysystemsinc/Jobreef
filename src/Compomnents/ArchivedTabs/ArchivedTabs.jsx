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

import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import All from "./All";
import SelectedCandidate from "./SelectedCandidate";
import Archived from "./Archived";

const ArchivedTabs = ({ matchCandidate, company, tablist, componentList }) => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Tabs
        // px={ {xl:"0px",   base: "10px"}}
        onChange={(index) => {
          setTabIndex(index);
        }}
        // border={"1px solid red"}
        width={{ lg: "100%", base: "100%" }}
        justifyContent={"flex-start"}
        // mx={"auto"}
        index={tabIndex}
      >
        {/* <Box position={"relative"} width={"100%"}> */}
        <TabList
          sx={{
            ...globalStyles.outlineTab,
            ...globalStyles.scrollBar,

            whiteSpace: "nowrap",
            mt: "11px",

            width: { md: "60%", base: "99%" },
          }}
        >
          {tablist?.map((item  , index) => {
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
        {/* </Box> */}

        <TabPanels>
          {componentList?.map((item , index)  => {
            return <TabPanel key={index} px={"0px"}>{item}</TabPanel>;
          })}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ArchivedTabs;
