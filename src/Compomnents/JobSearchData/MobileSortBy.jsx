import React from "react";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import { checkboxes } from "./tempSchema";
import { BiFilter, BiSortDown } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Label,
  Image,
  Select,
  useBreakpointValue,
  Checkbox,
} from "@chakra-ui/react";

const MobileSortBy = ({
  selectedValues,

  handleCheckboxChange,
  temp,
  settemp,
  DataSort,
}) => {
  const listItme = ["Date Applied", "Relevance"];
  const listItme2 = ["Hybrid", "Remote", "Onsite"];
  const listItme3 = ["Full-Time", "Part Time", "Contract", "Internship"];
  const listItme4 = ["EntryLevel", "1 - 3 Years", "3 - 5 Years"];

  return (
    <>
      <Box display={{ lg: "none", base: "block" }}>
        <Box
          mb={"20px"}
          flexWrap={"wrap"}
          display={"flex"}
          alignItems={"center"}
          gap={{ md: "20px", base: "12px" }}
        >
          {checkboxes.map((object, index) => {
            return (
              <Box  key={Math.random()} display={"flex"}>
                <Menu closeOnSelect={false}>
                  <MenuButton
                    bg="blue.500"
                    px={"10px"}
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
                      <Heading
                        fontWeight={400}
                        color={"white.100"}
                        variant={"p10"}
                      >
                        {object.heading}
                      </Heading>
                    </Box>
                  </MenuButton>
                  <MenuList minWidth="max-content">
                    {/* <MenuDivider /> */}
                    <MenuOptionGroup title="" type="checkbox">
                      {object.values?.map((item, index) => {
                        return (
                          <MenuItemOption
                            key={index}
                            sx={{ "& .chakra-menu__icon": { color: "#000" } }}
                            value={item.key}
                            mb={"8px"}
                            isChecked={selectedValues.includes(item.key)}
                            onClick={(e) => {
                              handleCheckboxChange(item.key, e.target.value);
                              if (item.key === "Date Posted") {
                                if (sessionStorage.getItem("temp") === null)
                                  sessionStorage.setItem("temp", true);
                                
                                if (sessionStorage.getItem("temp")) {
                                  sessionStorage.setItem("temp", false);
                                  DataSort(true);
                                } else {
                                  sessionStorage.setItem("temp", true);
                                  DataSort(false);
                                }
                              }
                            }}
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
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default MobileSortBy;
