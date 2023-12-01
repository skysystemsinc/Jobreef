import { Box, Image, Select } from "@chakra-ui/react";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import black_arrow_down from "@/assets/Images/black-arrow-down.svg";
import { MultiSelect } from "chakra-multiselect";
const DropDown = ({
  dropdownOption,
  setState,
  state,
  icon,
  variant,
  name,
  style,
  placeholder,
}) => {
  const option = [{
    label:"option1",
    value:"option1"
  }]
  return (
    <Box>
      <MultiSelect
        options={dropdownOption??option}
        value={state ??""}
        label=""
        single
        name={name}
        onChange={(e) =>
          setState({
            target: {
              name: name,
              value: e,
            },
          })
        }
        placeholder={placeholder}
        // icon={<Image src={black_arrow_down.src} />}
        SelectIconButtonProps={{ icon: <Image src={black_arrow_down.src} /> }}
      />
      {/* <Select
        value={state}
        name={name}
        onChange={setState}
        variant={variant ? variant : "outline-dropdown"}
        icon={
          icon ? (
            icon
          ) : (
            <Image width={"16px !important"} src={black_arrow_down.src} />
          )
        }
        placeholder={placeholder}
        sx={style}
      >
        {dropdownOption ? (
          dropdownOption?.map((item, ind) => {
            
            return item.label ? (
              <option key={ind} value={item}>
                {item.label}
              </option>
            ) : (
              <option key={ind} value={item}>
                {item}
              </option>
            );
          })
        ) : (
          <>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </>
        )}
      </Select> */}
    </Box>
  );
};

export default DropDown;
