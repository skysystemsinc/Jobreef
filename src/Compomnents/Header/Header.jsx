import Logo from "@/Compomnents/Logo/Logo";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "@/assets/Images/logo.svg";
import { AiOutlineClose } from "react-icons/ai";
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons';
import { RxHamburgerMenu } from "react-icons/rx";
// import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";

import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "@chakra-ui/next-js";
import { BsHeart } from "react-icons/bs";
import heart from "@/assets/Images/heart.svg";
import { MdArrowDropDown } from "react-icons/md";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const HeaderDropdown = dynamic(
  () => import("../HeaderDropdown/HeaderDropdown"),
  {
    ssr: false,
  }
);
export default function Header({ candidate }) {
  const { isOpen, onToggle } = useDisclosure();
  const [isSmallerThe500] = useMediaQuery("(max-width: 500px)");

  return (
    <Box zIndex={5} position={"sticky"} top={"0px"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ md: 3 , base:0}}
        // pb={{ base: 4, "2xl": 7 }}
        px={{ "2xl": 8, base: 1 }}
        // position={"relative"}
        // top={"0px"}

        // pr={{base:20}}
        borderBottom={1}
        boxShadow={" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, xl: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", xl: "none" }}
        >
          <IconButton
            color={"black.100"}
            onClick={onToggle}
            icon={
              isOpen ? (
                <AiOutlineClose
                  color="black.100"
                  fontSize={isSmallerThe500 ? "24px" : "30px"}
                />
              ) : (
                <RxHamburgerMenu
                  color="black.100"
                  fontSize={isSmallerThe500 ? "24px" : "30px"}
                />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", xl: "start" }}>
          <Link href={"/"}>
            <Logo width={{ md: "130px", base: "120px" }} />
          </Link>

          <Flex display={{ base: "none", xl: "flex" }} mx={"auto"}>
            <DesktopNav candidate={candidate} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, xl: 0 }}
          justify={"flex-end"}
          direction={"row"}
          alignItems={"center"}
          spacing={{xl: 6 , base:2}}
        >
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="blue"
            aria-label="Done"
            // fontSize={"15px"}
            size={"sm"}
            // width={{ base: "35px" }}
            // height={{ base: "35px" }}
            // size={"lg"}
            // size={["md", "md", "lg", "lg"]}
            icon={<IoNotificationsOutline />}
          />
          {/* <Box display={{ xl: "block", base: "none" }}> */}
            <HeaderDropdown candidate={candidate} />
          {/* </Box> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const router = useRouter();

  return (
    <Stack direction={"row"} spacing={1}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                variant={"blue-link"}
                fontSize={"14px"}
                p={2}
                py={1}
                transition={".5s"}
                href={navItem.pathName ?? "#"}
                // fontSize={"sm"}
                // fontWeight={500}
                display={"flex"}
                alignItems={"center"}
                gap={"2px"}
                color={
                  navItem.pathName == router.pathname
                    ? "blue.500"
                    : "gray.light"
                }
                fontWeight={navItem.pathName == router.pathname ? 400 : 400}
                _hover={{
                  textDecoration: "none",
                  color: "gray.light",

                  fontWeight: 400,
                  color: "blue.500",
                }}
              >
                {navItem.label} {navItem.icon ?? ""}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="div"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Link
            href={"/"}
            transition={"all .3s ease"}
            variant={"blue-link"}
            color={"pink.100"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label ?? ""}
          </Link>
          {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={RxHamburgerMenu} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = ({ candidate }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ xl: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={RxHamburgerMenu}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    pathName: "/",
    // icon: <Image src={heart.src} />,
  },
  {
    label: "Search Jobs",
    pathName: "/candidate/job-search",
  },
  {
    label: "For Job Seekers",
    icon: <Image src={heart.src} />,

    href: "#",
  },
  {
    label: "For Employers",
    icon: (
      // <MdArrowDropDown/>,
      <Image src={heart.src} />
    ),

    href: "#",
  },
  {
    label: "Career Advice",
    href: "#",
  },
  {
    label: "Our Company ",
    href: "#",
  },
];
