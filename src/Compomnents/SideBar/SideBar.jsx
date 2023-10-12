import { Link } from "@chakra-ui/next-js";
import { Box, Image } from "@chakra-ui/react";

import React from "react";
import home from "@/assets/Images/home.svg";
import job_post from "@/assets/Images/job-post.svg";
import candidate from "@/assets/Images/candidate.svg";
import team from "@/assets/Images/team.svg";
import building from "@/assets/Images/building.svg";
import { useRouter } from "next/router";

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
      icon: job_post,
      pathname: "/",
    },
    {
      title: "Candidates",
      icon: candidate,
      pathname: "/",
    },
    {
      title: "Team Members",
      icon: team,
      pathname: "/",
    },
    {
      title: "Company Details",
      icon: building,
      pathname: "/company/comapany-details",
    },
  ];
  const activeStyle = {
    backgroundColor: "blue.500",
    borderRadius: "6px",
    "& a": {
      color: "#fff",
    },
  };
  return (
    <Box
      width={"300px"}
      position={"fixed"}
      top={"0px"}
      height={"100vh"}
      zIndex={1}
      left={"0px"}
      boxShadow=" 0px 2px 15px 0px rgba(0, 0, 0, 0.06)"
      p={"160px 40px 0px 10px"}
    >
      {navLinks.map((item, ind) => {
        return (
          <Box
            sx={item.pathname == router.pathname ? activeStyle : null}
            padding={"15px 10px"}
            gap={"20px"}
            key={ind}
            mb={"11px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Image src={item.icon.src} width={"25px"} />
            <Link
            fontWeight={500}
              _hover={{ textDecor: "none" }}
              color={"gray.light"}
              variant={"blue-link"}
              href={"/"}
            >
              {item.title}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default SideBar;
