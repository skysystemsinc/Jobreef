import { Box, Select } from "@chakra-ui/react";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const DropDown = ({ placeholder }) => {
  return (
    <Box>
      <Select
        sx={{ color: "gray.100" }}
        variant={"bg-dropdown"}
        icon={<HiOutlineChevronDown color="gray.text" />}
        placeholder={placeholder}
      >
        <option
         
          value="option1"
        >
          Option 1
        </option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Box>
  );
};

export default DropDown;
