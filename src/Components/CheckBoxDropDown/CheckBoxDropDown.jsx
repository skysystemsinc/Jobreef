import {
  Box,
  Button,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiFilter, BiSortDown } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import whiteFilter from "@/assets/Images/whiteFilter.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSelectFilter } from "@/Redux/slices/filters";

const CheckBoxDropDown = ({
  // setSelected,selected,
  key,
  keyVal,
  handleSelect,
  label,
  listItem,
}) => {
  // const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector(
    (state) => state.filters.value.filters
  );

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        bg="blue.500"
        px={"10px"}
        borderRadius={"100px"}
        height={"37px"}
        color={"white.100"}
        as={Box}
        width={"max-content"}
        minWidth={"160px"}
        display={"flex"}
        whiteSpace={"nowrap"}
        alignItems={"center"}
        cursor={"pointer"}
        transition={".5s"}
        _hover={{
          backgroundColor: "blue.600",
        }}
      >
        <Box
          // gap={"4px"}
          display={"flex"}
          alignItems={"center"}
        >
          {/* <BiFilter fontSize={"30px"} />{" "} */}
          <Image src={whiteFilter.src} width={"15px"}  />
          <Heading
            width={"100%"}
            textAlign={"center"}
            fontWeight={400}
            color={"white.100"}
            variant={"p10"}
          >
            {" "}
            {label}{" "}
          </Heading>
        </Box>
      </MenuButton>
      <MenuList minWidth="max-content">
        {/* <MenuDivider /> */}
        <MenuOptionGroup
          onChange={(e) => {
            handleSelect(e);
            // dispatch(setSelectFilter(e));
            // setSelected(e);
          }}
          title=""
          value={filters[keyVal]}
          type="checkbox"
        >
          {listItem?.map((item, index) => {
            return (
              <MenuItemOption
                key={index}
                sx={{ "& .chakra-menu__icon": { color: "#000" } }}
                value={item.value}
              >
                <Heading fontWeight={400} variant={"p10"}>
                  {" "}
                  {item.label}{" "}
                </Heading>
              </MenuItemOption>
            );
          })}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default CheckBoxDropDown;
