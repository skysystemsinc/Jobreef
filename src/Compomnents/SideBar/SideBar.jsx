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
const SideBar = () => {
  const router = useRouter();
  const navLinks = [
    {
      title: "Home",
      icon: home,
      pathname: "/",
    },
    {
      title: "Job Posts",
      icon: router.pathname == "/company/job-post" ? white_job_post : job_post,
      pathname: "/company/job-post",
    },
    {
      title: "Candidates",
      icon: router.pathname == "/company/candidate" ? white_candidate :  candidate,
      pathname: "/company/candidate",
    },
    {
      title: "Team Members",
      icon: router.pathname == "/company/team-members" ? white_team : team,
      pathname: "/company/team-members",
    },
    {
      title: "Company Details",
      icon:
        router.pathname == "/company/comapany-details"
          ? building
          : blue_building,
      pathname: "/company/comapany-details",
    },
  ];
  const activeStyle = {
    backgroundColor: "blue.500",
    borderRadius: { xl: "6px", base: "100px" },
    width: { xl: "auto", base: "40px" },
    height: { xl: "auto", base: "40px" },
    display: "flex",
    justifyContent: { xl: "flex-start", base: "center" },
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
      width={{ xl: "240px", base: "55px" }}
      position={"fixed"}
      top={"0px"}
      bg={"#fff"}
      height={"100vh"}
      zIndex={2}
      left={"0px"}
      boxShadow=" 0px 2px 15px 0px rgba(0, 0, 0, 0.06)"
      p={{ xl: "130px 20px 0px 10px", base: "100px 10px 0px 7px" }}
    >
      {navLinks.map((item, ind) => {
        return (
          <Link key={ind} _hover={{ textDecor: "none" }} href={item.pathname}>
            <Box
              sx={item.pathname == router.pathname ? activeStyle : null}
              // pl={{ md: "10px", base: "11px" }}

              padding={{ xl: "12px 10px", base: "10px 8px 10px 9px" }}
              gap={"15px"}
              key={ind}
              mb={{ xl: "7px", base: "7px" }}
              display={"flex"}
              alignItems={"center"}
            >
              <Image src={item.icon.src} width={{ xl: "25px", base: "21px" }} />
              <Heading
                display={{ xl: "block", base: "none" }}
                color={"gray.light"}
                variant={"p7"}
                as={"p"}
              >
                {item.title}
              </Heading>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default SideBar;
