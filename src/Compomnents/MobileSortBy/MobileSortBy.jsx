import { Box } from "@chakra-ui/react";
import React from "react";
import CheckBoxDropDown from "../CheckBoxDropDown/CheckBoxDropDown";
import globalStyles from "@/styles/globalStyles";

const MobileSortBy = ({ sortArray }) => {
  return (
    <Box
      mb={"20px"}
      flexWrap={"nowrap"}
      sx={globalStyles.scrollBar}
      overflowX={"scroll"}
      display={"flex"}
      alignItems={"center"}
      gap={{ md: "20px", base: "12px" }}
    >
      {sortArray?.map((item, ind) => {
        return (
          <Box key={ind}>
            <CheckBoxDropDown listItem={item.listItem} label={item.label} />
          </Box>
        );
      })}
      {/* <CheckBoxDropDown listItme={listItme2} label="Status" />
      <CheckBoxDropDown listItme={listItme3} label="Education" />
      <CheckBoxDropDown listItme={listItme3} label="Skills" />
       */}
    </Box>
  );
};

export default MobileSortBy;
