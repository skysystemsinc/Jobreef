import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Image } from "@chakra-ui/react";

import React from "react";
import home from "@/assets/Images/home.svg";
import job_post from "@/assets/Images/job-post.svg";
import candidate from "@/assets/Images/candidate.svg";
import team from "@/assets/Images/team.svg";
import building from "@/assets/Images/building.svg";
import blue_building from "@/assets/Images/blue_building.svg";
import white_team from "@/assets/Images/white_team.svg";
import white_job_post from "@/assets/Images/white-job-post.svg";
import { useRouter } from "next/router";
import white_candidate from "@/assets/Images/white_candidate.svg";
import profile from "@/assets/Images/headerProfile.svg";
import profile_white from "@/assets/Images/profile_white.svg";
import upload_blog from "@/assets/Images/upload_blog.svg";
import upload_blog_blue from "@/assets/Images/upload_blog_blue.svg";
import Logo from "../Logo/Logo";
import sidebarLogo from "@/assets/Images/sidebarLogo.svg";
const OperatorSidebar = () => {
  const router = useRouter();
  const navLinks = [
    {
      title: "Dashboard",
      icon: home,
      pathname: "#",
    },
    {
      title: "Job Posts",
      icon:
        router.pathname == "/operator/job-posts" ? white_job_post : job_post,
      pathname:
        router.pathname == "/company/create-job-post"
          ? "/company/create-job-post"
          : "/operator/job-posts",
    },
    {
      title: "Users",
      icon: router.pathname == "/operator/users" ? white_candidate : candidate,
      pathname: "/operator/users",
    },

    {
      title: "Companies",
      icon: router.pathname == "/operator/companies" ? building : blue_building,
      pathname: "/operator/companies",
    },
    {
      title: "Operators",
      icon:
        router.pathname == "/operator/operators" ||
        router.pathname == "/company/add-members"
          ? profile_white
          : profile,
      pathname:
        router.pathname == "/company/add-members"
          ? "/company/add-members"
          : "/operator/operators",
    },
    {
      title: "Upload Blogs",
      icon:
        router.pathname == "/operator/upload-blog"
          ? upload_blog
          : upload_blog_blue,
      pathname: "/operator/upload-blog",
    },
  ];
  const activeStyle = {
    backgroundColor: "blue.500",
    borderRadius: { xl: "6px", base: "100px" },
    width: { xl: "auto", base: "40px" },
    height: { xl: "auto", base: "40px" },
    display: "flex",
    justifyContent: { xl: "flex-start", base: "center" },
    trnsition: ".5s",
    _hover: {
      backgroundColor: "blue.600",
    },
    // mx:"auto",
    padding: "12px 10px",

    img: {
      width: { xl: "22px", sm: "17px", base: "15px" },
    },
    "& p": {
      color: "#fff",
    },
  };
  return (
    <Box
      width={{ xl: "250px", base: "55px" }}
      position={"fixed"}
      top={"0px"}
      bg={"#fff"}
      height={"100vh"}
      zIndex={2}
      left={"0px"}
      boxShadow=" 0px 2px 15px 0px rgba(0, 0, 0, 0.06)"
    >
      <Box
        display={{ xl: "block", base: "none" }}
        p={{ xl: "30px 20px 0px 20px", base: "10px 10px 0px 7px" }}
      >
        <Logo />
      </Box>
      <Box
        p={"10px 8px"}
        bg={"white.100"}
        display={{ xl: "none", base: "block" }}
      >
        <Image width={"100px"} src={sidebarLogo.src} />
      </Box>
      <Box p={{ xl: "130px 20px 0px 10px", base: "70px 10px 0px 7px" }}>
        {navLinks.map((item, ind) => {
          return (
            <Link key={ind} _hover={{ textDecor: "none" }} href={item.pathname}>
              <Box
                sx={item.pathname == router.pathname ? activeStyle : null}
                padding={{ xl: "12px 10px", base: "10px 8px 10px 9px" }}
                gap={"15px"}
                key={ind}
                transition={".5s"}
                mb={{ xl: "7px", base: "7px" }}
                display={"flex"}
                alignItems={"center"}
              >
                <Image
                  src={item.icon.src}
                  width={{ xl: "25px", base: "21px" }}
                />
                <Heading
                  display={{ xl: "block", base: "none" }}
                  color={"gray.light"}
                  variant={"p7"}
                  fontWeight={400}
                  as={"p"}
                >
                  {item.title}
                </Heading>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default OperatorSidebar;
