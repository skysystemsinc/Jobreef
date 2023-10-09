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
const ProfileSettingTabs = () => {
  const tabelinkStyle = {
    fontWeight: 400,
    color: "gray.text",
    lineHeight: "28px",
    fontFamily: "var(--chakra-\fonts-openSans)",
    // fontSize: { md: "16px", base: "14px" },
    margin: "0px",
  };
  const selectTab = {
    position: "relative",
    fontWeight: 600,
    color: "blue.500",
    "&::after": {
      content: `""`,
      position: "absolute",
      top: { md: "48px", base: "43px" },
      bg: "blue.500",
      borderRadius: "12px 12px 0px 0px",
      left: "10%",
      width: "80%",
      height: "6px",
    },
  };
  let [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Image
        src={waves.src}
        position={"absolute"}
        bottom={"0px"}
        left={"0px"}
        width={"100%"}
      />
      <Tabs
        onChange={(index) => {}}
        index={tabIndex}
        variant={"blue-tab"}
        isFitted
      >
        <TabList
          border={"1px solid "}
          mx={"auto"}
          borderColor={"blue.500"}
          width={{ xl: "60%", md: "70%", base: "100%" }}
          py={{ md: "10px", base: "6px" }}
          bg={"gray.200"}
          borderRadius={"5px"}
        >
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            sx={tabelinkStyle}
            _selected={selectTab}
          >
            {" "}
            About You
          </Tab>
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            _selected={selectTab}
            sx={tabelinkStyle}
          >
            Email
          </Tab>
          <Tab
            fontSize={{ md: "16px", base: "14px" }}
            _selected={selectTab}
            sx={tabelinkStyle}
          >
            Password
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AboutYouTabs />
          </TabPanel>
          <TabPanel>
            <EmailTabs />
          </TabPanel>
          <TabPanel>
            <ChangePassword />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={"20px"}
        my={{ md: "56px", base: "20px" }}
        mb={"56px"}
      >
        <Button
          onClick={() => {
            tabIndex == 2 ? null : setTabIndex(++tabIndex);
          }}
          width={{ md: "200px", sm: "180px", base: "140px" }}
          variant={"blue-btn"}
        >
          Save
        </Button>
        <Button
          onClick={() => setTabIndex(--tabIndex)}
          width={{ md: "200px", sm: "180px", base: "140px" }}
          variant="outline-blue"
        >
          Cencel
        </Button>
      </Box>
    </>
  );
};

export default ProfileSettingTabs;
