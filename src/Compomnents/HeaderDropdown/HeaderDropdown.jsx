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
import { role, roles } from "@/Utils/role";
import { useRouter } from "next/router";
const HeaderDropdown = () => {
  const router = useRouter();
  const companydropdown = [
    {
      title: "Dashboard",
      icon: <Image width={{ md: "22px", base: "19px" }} src={dasboadrd.src} />,
      pathname: "/",
    },
    {
      title: "Profile Settings",
      icon: <Image width={{ md: "22px", base: "19px" }} src={square.src} />,
      pathname: "/",
    },
  ];
  const candidatedropdown = [
    {
      title: "Dashboard",
      icon: <Image width={{ md: "22px", base: "19px" }} src={dasboadrd.src} />,
      pathname: "/",
    },
    {
      title: "My Resume",
      icon: <Image width={{ md: "22px", base: "19px" }} src={square.src} />,
      pathname: "/candidate/my-resume",
    },
    {
      title: "My Jobs",
      icon: <Image width={{ md: "22px", base: "19px" }} src={square.src} />,
      pathname: "/candidate/my-jobs",
    },
    {
      title: "Profile Settings",
      icon: <Image width={{ md: "22px", base: "19px" }} src={square.src} />,
      pathname: "/candidate/profile-setting",
    },
  ];
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
            width={{ "2xl": "58px", base: "50px" }}
            height={{ "2xl": "58px", base: "50px" }}
            borderRadius={"100px"}
            objectFit={"cover"}
            src={profile.src}
          />
          <Box textAlign={"start"}>
            <Heading as={"p"} variant={"p4"}>
              {" "}
              Jacob Jones
            </Heading>
            <Heading variant={"p1"}>jacobjones9@gmail.com</Heading>
          </Box>
          <HiOutlineChevronDown
            style={{ position: "absolute", right: "0px", top: "6px" }}
            color="black.100"
            // fontSize={{ "2xl": "27px", base: "240px" }}
            fontSize={"17px"}
          />
        </Box>
      </MenuButton>
      <MenuList _active={{ bg: "transparent" }}>
        {router.pathname.includes("candidate")
          ? candidatedropdown.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  borderBottom={"1px solid #0000001a"}
                  p={{ md: "10px 20px 16px 20px", base: "7px 16px 14px 16px" }}
                  mb={"6px"}
                >
                  <Link
                    _hover={{ textDecoration: "none" }}
                    href={item.pathname}
                  >
                    <Box
                      border={"1px solid black.100"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"10px"}
                    >
                      {/* <Image src={dasboadrd.src} /> */}
                      {item.icon}

                      <Heading mb="1px" as={"p"} variant={"p4"}>
                        {" "}
                        {item.title}
                      </Heading>
                    </Box>
                  </Link>
                </MenuItem>
              );
            })
          : companydropdown.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  borderBottom={"1px solid #0000001a"}
                  p={{ md: "10px 20px 16px 20px", base: "7px 16px 14px 16px" }}
                  mb={"6px"}
                >
                  <Link
                    _hover={{ textDecoration: "none" }}
                    href={item.pathname}
                  >
                    <Box
                      border={"1px solid black.100"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"10px"}
                    >
                      {/* <Image src={dasboadrd.src} /> */}
                      {item.icon}

                      <Heading mb="1px" as={"p"} variant={"p4"}>
                        {" "}
                        {item.title}
                      </Heading>
                    </Box>
                  </Link>
                </MenuItem>
              );
            })}

        {/* <MenuItem _hover={{ bg: "transparent" }} p={"10px 20px"}>
          <Box
            border={"1px solid black.100"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Image src={square.src} />
            <Heading mb="1px" as={"p"} variant={"p4"}>
              {" "}
              Profile Settings
            </Heading>
          </Box>
        </MenuItem> */}
      </MenuList>
    </Menu>
  );
};

export default HeaderDropdown;
