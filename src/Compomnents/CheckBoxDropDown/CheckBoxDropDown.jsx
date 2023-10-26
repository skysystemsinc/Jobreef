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
const CheckBoxDropDown = ({ label, listItme }) => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        bg="blue.500"
        px={"20px"}
        borderRadius={"100px"}
        height={"35px"}
        color={"white.100"}
        as={Box}
        width={"max-content"}
        display={"flex"}
        whiteSpace={"nowrap"}
        alignItems={"center"}
        // colorScheme="blue"
      >
        <Box display={"flex"} alignItems={"center"} gap={"7px"}>
          <BiFilter fontSize={"20px"} />{" "}
          <Heading fontWeight={400} color={"white.100"} variant={"p10"}>
            {" "}
            {label}{" "}
          </Heading>
        </Box>
      </MenuButton>
      <MenuList minWidth="max-content">
        {/* <MenuDivider /> */}
        <MenuOptionGroup title="" type="checkbox">
          {listItme?.map((item , index) => {
            return (
              <MenuItemOption
              key={index}
                sx={{ "& .chakra-menu__icon":{color:"#000"} }}
                value={item}
              >
                <Heading fontWeight={400} variant={"p10"}>
                  {" "}
                  {item}{" "}
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
