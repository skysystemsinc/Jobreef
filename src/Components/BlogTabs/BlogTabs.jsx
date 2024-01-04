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
import ActiveJobs from "./Active";

import InActiveJobs from "./InActive";
import { useRouter } from "next/router";

import CustomTabs from "../CustomeTabs/CustomeTabs";

const BlogTabs = ({ company }) => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  const tabLists = ["Active", "Inactive"];
  const tabs = [
    { label: "Active", value: "Active", content: <ActiveJobs /> },

    { label: "Inactive", value: "Inactive", content: <InActiveJobs /> },

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

            <Button
              onClick={()=>router.push("/operator/upload-blog")}
              display={{ md: "block", base: "none" }}
              position={"absolute"}
              right={"12px"}
              bottom={"0px"}
              variant={"blue-btn"}
            >
              Create Blog Post
            </Button>
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel px={"0px"}>
            <ActiveJobs />
          </TabPanel>
  
          <TabPanel px={"0px"}>
            <InActiveJobs />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default BlogTabs;
