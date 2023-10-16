import { Box, Image, Select } from "@chakra-ui/react";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
 
const DropDown = ({icon, variant, placeholder }) => {
  return (
    <Box>
      <Select
        // sx={{ color: "blue.500" }}
        variant={variant?variant:"outline-dropdown"}
        icon={icon}
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
