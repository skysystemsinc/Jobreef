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

import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";

const MessagesData = () => {
  let [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <BottomWaveImage />
    </>
  );
};

export default MessagesData;
