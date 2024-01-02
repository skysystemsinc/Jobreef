import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import CheckBoxDropDown from "../CheckBoxDropDown/CheckBoxDropDown";
import globalStyles from "@/styles/globalStyles";
import { educationOtp, experienceOtp, status } from "@/schema/stateSchema";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../IconButton/IconButton";
import { BiFilter } from "react-icons/bi";
import whiteFilter from "@/assets/Images/whiteFilter.svg";

import { setFilter, setSelectFilter } from "@/Redux/slices/filters";

const MobileSortBy = ({ handleApplyFilter, handleReset }) => {
  const [isApplied, setIsApplied] = useState(false);
  const [selected, setSelected] = useState([]);

  const dispatch = useDispatch();
  const selectedJobState = useSelector(
    (state) => state.jobApplicantList.value.selectedJob
  );
  const selectedFilterState = useSelector(
    (state) => state.filters.value.filters
  );
  console.log("selectedFilterState", selectedFilterState);
  const handleFilter = async (data, key) => {
    console.log("filter", data, key);
    dispatch(
      setFilter(
        selectedFilterState
          ? {
              ...selectedFilterState,
              [key]: data,
            }
          : { [key]: data }
      )
    );
  };

  const sortArray = [
    {
      label: "Sort Candidates By",
      key: "",
      listItem: [
        { label: "Date Applied", value: "" },
        { label: "Relevance", value: "" },
      ],
    },
    {
      label: "Status",
      key: "status",

      listItem: status,
      handleSelect: (data) => handleFilter(data, "status"),
    },
    {
      label: "Education",
      key: "educationLevel",

      listItem: educationOtp,
      handleSelect: (data) => handleFilter(data, "educationLevel"),
    },

    {
      label: "Skills",
      key: "skills",
      handleSelect: (data) => handleFilter(data, "skills"),
      listItem: [
        {
          label: selectedJobState?.desiredSkills,
          value: selectedJobState?.desiredSkills,
        },
      ],
    },
    {
      label: "Experience",
      key: "experience",
      handleSelect: (data) => handleFilter(data, "skills"),
      listItem: experienceOtp,
    },
  ];
  return (
    <Box
      mb={"20px"}
      flexWrap={"wrap"}
      sx={globalStyles.scrollBar}
      display={"flex"}
      alignItems={"center"}
      gap={{ md: "15px", base: "12px" }}
    >
      {sortArray?.map((item, ind) => {
        return (
          <Box key={ind}>
            <CheckBoxDropDown
              keyVal={item.key}
              setSelected={setSelected}
              selected={selected}
              handleSelect={item.handleSelect}
              listItem={item.listItem}
              label={item.label}
            />
          </Box>
        );
      })}

      <Button
        onClick={()=>{handleApplyFilter(),setIsApplied(true)}}
        variant={"blue-btn"}
        sx={{
          borderRadius: "100px",
          height: "35px",
          width: "120px",
        }}
        // isDisabled={selectedFilterState}
      >
        {" Apply Filter"}
      </Button>
      {isApplied ? (
        <Button
          onClick={() => {
            handleReset(),
            setIsApplied(false)
          }}
          variant={"outline-blue"}
          sx={{
            borderRadius: "100px",
            height: "35px",
            width: "120px",
          }}
        >
          {"Reset"}
        </Button>
      ) : null}
    </Box>
  );
};

export default MobileSortBy;
