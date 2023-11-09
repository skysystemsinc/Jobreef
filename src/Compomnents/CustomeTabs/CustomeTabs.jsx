import { useState } from "react";
import { Box, Image, Select } from "@chakra-ui/react";

import black_arrow_down from "@/assets/Images/black-arrow-down.svg";

const CustomTabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabChange = (value) => {
    const selected = tabs.find((tab) => tab.value === value);
    setSelectedTab(selected);
  };
  console.log("selectedTab", selectedTab);
  return (
    <Box>
      <Box width={"100%"}>
        <Select
          value={selectedTab.value}
          onChange={(e) => handleTabChange(e.target.value)}
          variant={"bg-dropdown"}
          icon={<Image width={"16px !important"} src={black_arrow_down.src} />}
          //   placeholder={placeholder}
          sx={{ width: "100%", border: "1px solid", borderRadius: "6px" }}
        >
          {tabs &&
            tabs?.map((item, ind) => {
              return item.disable ? null : (
                <option key={ind} value={item.value}>
                  {item.label}
                </option>
              );
            })}
        </Select>
      </Box>

      <Box mt={"35px"} mb={"30px"}>
        {selectedTab.content}
      </Box>
    </Box>
  );
};

export default CustomTabs;
