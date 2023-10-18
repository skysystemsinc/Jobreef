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
import DropDown from "../DropDown/DropDown";
import Application from "./Application";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import MatchCandidate from "./MatchCandidate";

const CandiateTabs = ({ company }) => {
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
        isFitted
      >
        <Box position={"relative"} width={"100%"}>
          <TabList
            sx={{
              ...globalStyles.fullTab,
              ...globalStyles.scrollBar,
              ml: { md: "0px", base: "0px" },
              flexDirection: { sm: "row", base: "column" },
              width: { md: "40%", base: "99%" },
              // border: "1px solid red",
            }}
          >
            <Tab
              fontSize={{ md: "16px", base: "14px" }}
              sx={globalStyles.tabelinkStyle}
              _selected={globalStyles.selectTab}
            >
              {" "}
              Applications
            </Tab>
            <Tab
              fontSize={{ md: "16px", base: "14px" }}
              _selected={globalStyles.selectTab}
              sx={globalStyles.tabelinkStyle}
            >
              Matched Candidates
            </Tab>

            <Box
              display={{ md: "block", base: "none" }}
              position={"absolute"}
              right={"12px"}
              bottom={"0px"}
            >
              <DropDown
                icon={<Image src={blue_arrow_down.src} />}
                placeholder={"Systems Engineer"}
                variant={"bg-dropdown"}
              />
            </Box>
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel px={"0px"}>
            <Box
              width={"100%"}
              // border={"1px solid red"}
              display={{ md: "none", base: "flex" }}
              justifyContent={"flex-end !important"}
              mb={"12px"}
              onClick={() => router.push("/company/create-job-post")}
            >
              <DropDown
                icon={<Image src={blue_arrow_down.src} />}
                placeholder={"Systems Engineer"}
                variant={"bg-dropdown"}
              />
            </Box>
            <Application />
          </TabPanel>
          <TabPanel px={"0px"}>
            <Box
              onClick={() => router.push("/company/create-job-post")}
              width={"100%"}
              // border={"1px solid red"}
              display={{ md: "none", base: "flex" }}
              justifyContent={"flex-end !important"}
              mb={"12px"}
            >
              <DropDown
                icon={<Image src={blue_arrow_down.src} />}
                placeholder={"Systems Engineer"}
                variant={"bg-dropdown"}
              />
            </Box>
            <MatchCandidate />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CandiateTabs;
