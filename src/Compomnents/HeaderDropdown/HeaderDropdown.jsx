import {
  Box,
  Button,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import profile from "@/assets/Images/profile.svg";
import { Link } from "@chakra-ui/next-js";
import dasboadrd from "@/assets/Images/dashboard.svg";
import square from "@/assets/Images/square.svg";
const HeaderDropdown = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant={"unstyled"}
        // border={"1px solid red"}
        height={"max-content"}
        width={"max-content"}
        // rightIcon={<HiOutlineChevronDown color="red" fontSize={"24px"} />}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={"10px"}
          position={"relative"}
        >
          <Image
            width={"58px"}
            height={"58px"}
            borderRadius={"100px"}
            objectFit={"cover"}
            src={profile.src}
          />
          <Box textAlign={"start"}>
            <Heading mb="1px" as={"p"} variant={"p4"}>
              {" "}
              Jacob Jones
            </Heading>
            <Heading variant={"p1"}>jacobjones9@gmail.com</Heading>
          </Box>
          <HiOutlineChevronDown
            style={{ position: "absolute", right: "0px", top: "4px" }}
            color="black.100"
            fontSize={"24px"}
          />
        </Box>
      </MenuButton>
      <MenuList  _active={{bg:"transparent"}}  >
        <MenuItem bg="transparent" _hover={{bg:'transparent'}} borderBottom={"1px solid #0000001a"} p={"10px 20px 16px 20px"} mb={"6px"}>
          <Box border={"1px solid black.100"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            
            <Image src={dasboadrd.src} />
            <Heading mb="1px" as={"p"} variant={"p4"}>
              {" "}
              Dashboard
            </Heading>
          </Box>
        </MenuItem>
        
        <MenuItem  _hover={{bg:'transparent'}} p={"10px 20px"}>
          <Box  border={"1px solid black.100"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            
            <Image src={square.src} />
            <Heading mb="1px" as={"p"} variant={"p4"}>
              {" "}
              Profile Settings 
            </Heading>
          </Box>
        </MenuItem>


      </MenuList>
    </Menu>
  );
};

export default HeaderDropdown;
