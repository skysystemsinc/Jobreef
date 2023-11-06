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
import ActiveUsers from "./ActiveUsers";
import InActive from "./InActive";

const UsersTab = ({ company }) => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  const tabLists = ["Active", "Inactive"];
  return (
    <Tabs
      onChange={(index) => {
        setTabIndex(index);
      }}
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
            // onClick={()=>router.push("/company/create-job-post")}
            display={{ md: "block", base: "none" }}
            position={"absolute"}
            right={"12px"}
            bottom={"0px"}
            variant={"blue-btn"}
          >
            Create User
          </Button>
        </TabList>
      </Box>

      <TabPanels>
        <TabPanel px={"0px"}>
          <ActiveUsers />
          <Box
            width={"100%"}
            display={{ md: "none", base: "flex" }}
            justifyContent={"flex-end !important"}
            mb={"12px"}
            // onClick={()=>router.push("/company/create-job-post")}
          >
            <Button variant={"blue-btn"}>Create User</Button>
          </Box>
        </TabPanel>
        <TabPanel px={"0px"}>
          <Box
            width={"100%"}
            display={{ md: "none", base: "flex" }}
            justifyContent={"flex-end !important"}
            mb={"12px"}
            // onClick={()=>router.push("/company/create-job-post")}
          >
            <Button variant={"blue-btn"}>Create User</Button>
          </Box>
          <InActive />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default UsersTab;
