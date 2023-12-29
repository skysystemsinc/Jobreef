import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";
import { BiFilter, BiSortDown } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
const CheckBoxDropDown = ({ handleSelect, label, listItem }) => {
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
        minWidth={"180px"}
        display={"flex"}
        whiteSpace={"nowrap"}
        alignItems={"center"}
      >
        <Box
          // gap={"4px"}
          display={"flex"}
          alignItems={"center"}
        >
          <BiFilter fontSize={"30px"} />{" "}
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
          }}
          title=""
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
