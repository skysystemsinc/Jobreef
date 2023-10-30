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
  const CheckBoxDropDownKHI = ({ object, label  }) => {
    
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
        >
          <Box display={"flex"} alignItems={"center"} gap={"7px"}>
            <BiFilter fontSize={"20px"} />{" "}
            <Heading fontWeight={400} color={"white.100"} variant={"p10"}>
              {" "}
              {object.heading }{" "}
            </Heading>
          </Box>
        </MenuButton>
        <MenuList minWidth="max-content">
          {/* <MenuDivider /> */}
          <MenuOptionGroup title="" type="checkbox">
            {object.values?.map((item , index) => {
              return (
                <MenuItemOption
                key={index}
                  sx={{ "& .chakra-menu__icon":{color:"#000"} }}
                  value={item.key}
                >
                  <Heading fontWeight={400} variant={"p10"}>
                    {" "}
                    {item.key}{" "}
                  </Heading>
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    );
  };
  
  export default CheckBoxDropDownKHI;
  