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
import React, { useContext, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import profile from "@/assets/Images/headerProfile.svg";
import { Link } from "@chakra-ui/next-js";
import dasboadrd from "@/assets/Images/dashboard.svg";
import square from "@/assets/Images/square.svg";
import chat from "@/assets/Images/chat.svg";
import resume from "@/assets/Images/resume.svg";

import my_job from "@/assets/Images/job-post.svg";

import header_profile from "@/assets/Images/profile_icon.svg";
// import header_profile from "@/assets/Images/profile.svg";
import logout from "@/assets/Images/logout.svg";
import { role, roles } from "@/Utils/role";
import { useRouter } from "next/router";
import { Role_context } from "@/context/context";
import { useDispatch, useSelector } from "react-redux";
import { setLoginUser } from "@/Reudx/slices/LoginUser";
import endPoints from "@/Utils/endpoints";
import { httpRequest } from "@/helper/httpRrequest";
import { BACKEND_URL } from "@/Utils/urls";
import { LoadingSkeleton } from "../LoadingSkeleton/LoadingSkeleton";
import { addCompany } from "@/Reudx/slices/company";
import { addEmployee } from "@/Reudx/slices/employee";
import { get } from "@/helper/fetch";
import { getTeamMembers } from "@/Reudx/slices/teamMembers";
const HeaderDropdown = ({ candidate, operatorDropdown, hiddenStyle }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.LoginUser.value);

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
      pathname: "/login",
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
      pathname: "/login",
    },
  ];
  const operator = [
    {
      title: "Log Out",
      icon: <Image width={{ md: "22px", base: "19px" }} src={logout.src} />,
      pathname: "/login",
    },
  ];

  const getUser = async () => {
    const id = localStorage.getItem("id");
    try {
      const postData = await get(`${endPoints.user}/${id}`);
      if (postData.success) {
        const { data } = postData;

        dispatch(setLoginUser(postData.data));
        dispatch(addCompany(postData?.data?.company));
        dispatch(getTeamMembers(postData?.data?.company?.companyEmployees));

        dispatch(addEmployee(postData?.data?.employee));
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    if (!loginUser) {
      getUser();
    }
  }, []);
  return (
    <>
      {!loginUser ? (
        <LoadingSkeleton />
      ) : (
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
              justifyContent={"flex-end"}
              gap={"10px"}
              position={"relative"}
            >
              <Image
                width={{ md: "40px", base: "30px" }}
                height={{ md: "40px", base: "30px" }}
                borderRadius={"100px"}
                objectFit={"cover"}
                src={loginUser?.profilePic ?? header_profile.src}
              />
              <Box
                display={{ xl: "block", base: "none" }}
                sx={hiddenStyle}
                textAlign={"start"}
              >
                <Heading as={"p"} variant={"p4"}>
                  {" "}
                  {`${loginUser?.firstName} ${loginUser?.lastName}`}
                  {/* Jacob Jones */}
                </Heading>
                <Heading variant={"p1"}>
                  {loginUser?.email}
                  {/* jacobjones9@acme.com */}
                </Heading>
              </Box>

              <Box display={{ xl: "block", base: "none" }}>
                <HiOutlineChevronDown
                  style={{ position: "absolute", right: "8px", top: "3px" }}
                  color="black.100"
                  // fontSize={{ "2xl": "27px", base: "240px" }}
                  fontSize={"17px"}
                />
              </Box>
            </Box>
          </MenuButton>
          <MenuList py="0px">
            {candidate
              ? candidatedropdown.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      _hover={{ textDecoration: "none" }}
                      href={item.pathname}
                    >
                      <MenuItem
                        key={index}
                        transition={".5s"}
                        _hover={{
                          bg: "gray.200",
                          "& .hoverText": { color: "blue.500" },
                        }}
                        borderBottom={"1px solid #0000001a"}
                        // p={{ md: "14px 20px 16px 20px", base: "7px 16px 14px 16px" }}
                        p={{
                          md: "14px 20px 16px 20px",
                          base: "13px 16px 13px 16px",
                        }}

                        // mb={"6px"}
                      >
                        <Box
                          border={"1px solid black.100"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"10px"}
                          className="hoverText"
                        >
                          {/* <Image src={dasboadrd.src} /> */}
                          {item.icon}

                          <Heading
                            className="hoverText"
                            transition={".5s"}
                            mb="1px"
                            as={"p"}
                            variant={"p4"}
                          >
                            {" "}
                            {item.title}
                          </Heading>
                        </Box>
                      </MenuItem>
                    </Link>
                  );
                })
              : operatorDropdown
              ? operator.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      _hover={{ textDecoration: "none" }}
                      href={item.pathname}
                    >
                      <MenuItem
                        key={index}
                        bg="transparent"
                        transition={".5s"}
                        _hover={{
                          bg: "gray.200",
                          "& .hoverText": { color: "blue.500" },
                        }}
                        borderBottom={"1px solid #0000001a"}
                        p={{
                          md: "14px 20px 16px 20px",
                          base: "13px 16px 13px 16px",
                        }}
                        // mb={"6px"}
                      >
                        <Box
                          border={"1px solid black.100"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"10px"}
                        >
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
                      </MenuItem>
                    </Link>
                  );
                })
              : companydropdown.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      _hover={{ textDecoration: "none" }}
                      href={item.pathname}
                    >
                      <MenuItem
                        key={index}
                        bg="transparent"
                        transition={".5s"}
                        _hover={{
                          bg: "gray.200",
                          "& .hoverText": { color: "blue.500" },
                        }}
                        borderBottom={"1px solid #0000001a"}
                        p={{
                          md: "14px 20px 16px 20px",
                          base: "13px 16px 13px 16px",
                        }}
                        // mb={"6px"}
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
                      </MenuItem>
                    </Link>
                  );
                })}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default HeaderDropdown;
