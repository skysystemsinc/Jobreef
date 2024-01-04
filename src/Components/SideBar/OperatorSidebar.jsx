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
import abuseReportWhite from "@/assets/Images/abuseReportWhite.svg";
import abuseReport from "@/assets/Images/abuseReport.svg";
import whitehome from "@/assets/Images/whitehome.svg";

import Logo from "../Logo/Logo";
import sidebarLogo from "@/assets/Images/sidebarLogo.svg";
const OperatorSidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  const navLinks = [
    {
      title: "Overview",
      // icon: home,
      icon: router.pathname == "/operator/overview" ? whitehome : home,

      pathname: "/operator/overview",
      activePathnames: ["/operator/overview"],

    },
    {
      title: "Job Posts",
      icon:
        router.pathname == "/operator/job-posts" ||
        router.pathname == "/operator/edit-job-post" ||
        router.pathname == "/operator/create-job-post"
          ? white_job_post
          : job_post,
      pathname: "/operator/job-posts",
      activePathnames: ["/operator/edit-job-post","/operator/create-job-post", "/operator/job-posts"],
    },
    {
      title: "Users",
      icon:
        router.pathname == "/operator/users" ||
        router.pathname == "/operator/create-user"
          ? white_candidate
          : candidate,
      activePathnames: ["/operator/users", "/operator/create-user"],

      pathname: "/operator/users",
    },

    {
      title: "Companies",
      icon:
        router.pathname == "/operator/companies" ||
        router.pathname == "/operator/create-company"
          ? building
          : blue_building,
      activePathnames: ["/operator/companies", "/operator/create-company"],
      pathname: "/operator/companies",
      // pathname == "/operator/companies"
      //   ? "/operator/companies"
      //   : "/operator/create-company",
    },
    {
      title: "Operators",
      icon:
        router.pathname == "/operator/operators" ||
        router.pathname == "/operator/create-operator"
          ? profile_white
          : profile,
      pathname: "/operator/operators",

      activePathnames: ["/operator/create-operator", "/operator/operators"],
    },
    {
      title: "Blogs",
      icon:
        router.pathname == "/operator/upload-blog" ||
        router.pathname == "/operator/blog"
          ? upload_blog
          : upload_blog_blue,
      activePathnames: ["/operator/upload-blog", "/operator/blog"],

      pathname: "/operator/blog",
    },
    {
      title: "Abuse Reports",
      icon:
        router.pathname == "/operator/abuse-report" 
        // || router.pathname == "/operator/blog"
          ? abuseReportWhite
          : abuseReport,
      activePathnames: ["/operator/abuse-report",],

      pathname: "/operator/abuse-report",
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
      <Box p={{ xl: "70px 20px 0px 10px", base: "70px 10px 0px 7px" }}>
        {navLinks.map((item, ind) => {
          return (
            <Link key={ind} _hover={{ textDecor: "none" }} href={item.pathname}>
              <Box
                sx={
                  item.activePathnames?.includes(router.pathname)
                    ? activeStyle
                    : null
                }
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
