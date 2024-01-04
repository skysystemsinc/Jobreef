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
  multipleSelectDropdown,
  variant,
  multiple,
  name,
  defaultDropdown,
  style,
  keyName,
  placeholder,
}) => {
  const option = [
    {
      label: "option1",
      value: "option1",
    },
    {
      label: "option2",
      value: "option2",
    },
    {
      label: "option3",
      value: "option3",
    },
  ];
  return (
    <Box>
      {defaultDropdown ? (
        <Select
          defaultValue={dropdownOption && dropdownOption[0]}
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
              
              return item[keyName] ? (
                <option key={ind} value={JSON.stringify(item)}>
                  {/* {item.label} */}
                  {item[keyName]}
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
        </Select>
      ) : multipleSelectDropdown ? (
        <MultiSelect
          options={dropdownOption ?? option}
          value={state ?? ""}
          label=""
          multiple
          name={name}
          onChange={setState}
          placeholder={placeholder}
          SelectIconButtonProps={{ icon: <Image src={black_arrow_down.src} /> }}
        />
      ) : (
        <MultiSelect
          sx={{ input: { width: "100% !important" } }}
          options={dropdownOption ?? option}
          value={state ?? ""}
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
          SelectIconButtonProps={{ icon: <Image src={black_arrow_down.src} /> }}
        />
      )}
    </Box>
  );
};

export default DropDown;
