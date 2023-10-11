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
const ProfileSettingTabs = () => {
  const router = useRouter();
  let [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <BottomWaveImage />

      <Tabs
        onChange={(index) => {
          setTabIndex(index);
        }}
        index={tabIndex}
        isFitted
      >
        <TabList sx={globalStyles.fullTab}>
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
        </TabList>

        <TabPanels>
          <TabPanel>
            <AboutYouTabs />
          </TabPanel>
          <TabPanel>
            <Box pb={{ md: "90px", base: "40px" }}>
              <EmailTabs />
            </Box>
          </TabPanel>
          <TabPanel>
            <ChangePassword />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={{ md: "20px", base: "10px" }}
        my={{ md: "56px", base: "20px" }}
        pb={"39px"}
      >
        <Button
          onClick={() => {
            router.push("/");

            // tabIndex == 2
            //   ? role == roles.employee
            //     ? router.push("/my-resume")
            //     : router.push("/")
            //   : setTabIndex(++tabIndex);
          }}
          variant={"blue-btn"}
        >
          Save
        </Button>
        <Button
          onClick={() => {
            // tabIndex == 0 ? null : setTabIndex(--tabIndex);

            router.push("/");
          }}
          variant="outline-blue"
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default ProfileSettingTabs;
