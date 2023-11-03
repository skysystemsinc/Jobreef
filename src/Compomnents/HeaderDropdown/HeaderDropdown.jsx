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
import React, { useContext } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import profile from "@/assets/Images/headerProfile.svg";
import { Link } from "@chakra-ui/next-js";
import dasboadrd from "@/assets/Images/dashboard.svg";
import square from "@/assets/Images/square.svg";
import chat from "@/assets/Images/chat.svg";
import resume from "@/assets/Images/resume.svg";

import my_job from "@/assets/Images/job-post.svg";

import header_profile from "@/assets/Images/profile.svg";
import logout from "@/assets/Images/logout.svg";
import { role, roles } from "@/Utils/role";
import { useRouter } from "next/router";
import { Role_context } from "@/context/context";
const HeaderDropdown = ({ candidate , operatorDropdown }) => {
  const router = useRouter();
  const { company, setCompany } = useContext(Role_context);

  const companydropdown = [
    {
      title: "Dashboard",
      icon: <Image width={{ md: "22px", base: "19px" }} src={dasboadrd.src} />,
      pathname: "/company/comapany-details",
    },
    {
      title: "Messages",
      icon: <Image width={{ md: "22px", base: "19px" }} src={chat.src} />,
      pathname: "/company/chat",
    },
    {
      title: "Profile Settings",
      icon: <Image width={{ md: "22px", base: "19px" }} src={profile.src} />,
      pathname: "/company/profile-setting",
    },
    {
      title: "Log Out",
      icon: <Image width={{ md: "22px", base: "19px" }} src={logout.src} />,
      pathname: "/",
    },
  ];
  const candidatedropdown = [
    {
      title: "My Resume",
      icon: <Image width={{ md: "22px", base: "19px" }} src={resume.src} />,
      pathname: "/candidate/my-resume",
    },
    {
      title: "My Jobs",
      icon: <Image width={{ md: "22px", base: "19px" }} src={my_job.src} />,
      pathname: "/candidate/my-jobs",
    },
    {
      title: "Messages",
      icon: <Image width={{ md: "22px", base: "19px" }} src={chat.src} />,
      pathname: "/candidate/chat",
    },
    {
      title: "Profile Settings",
      icon: <Image width={{ md: "22px", base: "19px" }} src={profile.src} />,
      pathname: "/candidate/profile-setting",
    },
    {
      title: "Log Out",
      icon: <Image width={{ md: "22px", base: "19px" }} src={logout.src} />,
      pathname: "/",
    },
  ];
  const operator = [
    {
      title: "Log Out",
      icon: <Image width={{ md: "22px", base: "19px" }} src={logout.src} />,
      pathname: "/",
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
            width={{ md: "40px", base: "30px" }}
            height={{ md: "40px", base: "30px" }}
            borderRadius={"100px"}
            objectFit={"cover"}
            src={header_profile.src}
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
      <MenuList  py="0px">
        {candidate
          ? candidatedropdown.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  
                  _hover={{ bg: "transparent" }}
                  borderBottom={"1px solid #0000001a"}
                  // p={{ md: "14px 20px 16px 20px", base: "7px 16px 14px 16px" }}
                  p={{ md: "17px 20px 17px 20px", base: "16px 16px 16px 16px" }}

                  // mb={"6px"}
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
                      transition= {"all 0.4s ease"}
                      _hover={{
                        transition: "all 0.4s ease",
                        transform: "scale(1.1)",}}
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
          : operatorDropdown
          ? operator.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  bg="transparent"
                  transition={".5s"}
                  _hover={{
                    bg: "gray.200",
                    "& .hoverText": { color: "blue.500" },
                  }}
                  borderBottom={"1px solid #0000001a"}
                  p={{ md: "14px 20px 16px 20px", base: "13px 16px 13px 16px" }}
                  // mb={"6px"}
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

                      <Heading
                        transition={".5s"}
                        className="hoverText"
                        mb="1px"
                        as={"p"}
                        variant={"p4"}
                      >
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
                  transition={".5s"}
                  _hover={{
                    bg: "gray.200",
                    "& .hoverText": { color: "blue.500" },
                  }}
                  borderBottom={"1px solid #0000001a"}
                  p={{ md: "14px 20px 16px 20px", base: "13px 16px 13px 16px" }}
                  // mb={"6px"}
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

                      <Heading
                        transition={".5s"}
                        className="hoverText"
                        mb="1px"
                        as={"p"}
                        variant={"p4"}
                      >
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
