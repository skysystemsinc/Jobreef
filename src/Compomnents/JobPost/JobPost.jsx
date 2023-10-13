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
import ActiveJobs from "./ActiveJobs";

import InActiveJobs from "./InActive";

const JobPostTabs = ({ company }) => {
  let [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Tabs
        onChange={(index) => {
          setTabIndex(index);
        }}
        // border={"1px solid red"}
        width={{ lg: "100%", base: "100%" }}
        justifyContent={"flex-start"}
        // mx={"auto"}
        index={tabIndex}
        isFitted
      >
        <Box  position={"relative"}  width={"100%"} >
        <TabList
          sx={{
            ...globalStyles.fullTab,
            ...globalStyles.scrollBar,
            ml: "17px",
            whiteSpace: "nowrap",

            overflowX: "scroll",
            width: { sm: "40%", base: "100%" },
            // border: "1px solid red",
          }}
        >
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            sx={globalStyles.tabelinkStyle}
            _selected={globalStyles.selectTab}
          >
            {" "}
            Active
          </Tab>
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            _selected={globalStyles.selectTab}
            sx={globalStyles.tabelinkStyle}
          >
            Inactive
          </Tab>

          <Button position={"absolute"} right={"20px"} bottom={"0px"} variant={"blue-btn"}>Create a Job Post</Button>
        </TabList>
        </Box>

        <TabPanels>
          <TabPanel>
            <ActiveJobs />
          </TabPanel>
          <TabPanel>
            <InActiveJobs/>
          </TabPanel>
          {/* 
            <TabPanel>
              <CompanyLocation />
            </TabPanel>
            <TabPanel>
              <SocialLink />
            </TabPanel> */}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default JobPostTabs;
