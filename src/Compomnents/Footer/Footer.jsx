"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Heading,
  Link,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import footerLogo from "@/assets/Images/footerLogo.svg";
import Facebook from "@/assets/Images/Facebook.svg";
import Instagram from "@/assets/Images/Instagram.svg";
import LinkedIn from "@/assets/Images/LinkedIn.svg";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";
const Logo = (props) => {
  return <Image width={{ md: "190px", base: "141px" }} src={footerLogo.src} />;
};

const footerLink = [
  {
    heading: "Services",
    links: [
      { link: "Search Jobs", pathName: "" },
      { link: "Jobreef For Employers", pathName: "" },
      { link: "Jobseeker Tools", pathName: "" },
      { link: "Career  Blog", pathName: "" },
      { link: "Advertising", pathName: "" },
    ],
  },
  {
    heading: "Our Company",
    links: [
      { link: "About Us", pathName: "" },
      { link: "Contact", pathName: "" },
      { link: "Careers", pathName: "" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { link: "Terms of Service", pathName: "" },
      { link: "Privacy Policy", pathName: "" },
      { link: "Usage Guidelines", pathName: "" },
      { link: "Disclaimer", pathName: "" },
      { link: "Help Center", pathName: "" },
    ],
  },
];
function Footer({ waveImage }) {
  return (
    <>
      {waveImage ? (
        <Box position={"relative"}>
          <BottomWaveImage />
        </Box>
      ) : null}

      <Box bg={"blue.500"}>
        <Container as={Stack} maxW={"6xl"} pt={12} pb={5}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "3fr 1fr 1fr 1fr" }}
            spacing={{ md: 20, base: 10 }}
          >
            <Stack spacing={4}>
              <Box>
                <Logo color={useColorModeValue("gray.700", "white")} />
              </Box>
              <Box pl={{ md: "50px", base: "10px" }}>
                <Box color={"white.100"} lineHeight={"10px"}>
                  <Heading variant={"p4"} color={"white.100"}>
                    Nassau, The Bahamas
                  </Heading>
                  <Heading variant={"p4"} color={"white.100"}>
                    {" "}
                    support@jobreef.net
                  </Heading>
                  <Heading variant={"p4"} color={"white.100"}>
                    Tel: 1-242-123-4567
                  </Heading>
                </Box>
                <Stack mt={"20px"} direction={"row"} spacing={4}>
                  <Link href="/">
                    <Image src={Facebook.src} width={"23px"} />
                  </Link>

                  <Link href="/">
                    <Image src={Instagram.src} width={"23px"} />
                  </Link>
                  <Link href="/">
                    <Image src={LinkedIn.src} width={"23px"} />
                  </Link>
                </Stack>
              </Box>
            </Stack>
            {footerLink.map((item, ind) => {
              return (
                <Stack key={ind} align={"flex-start"}>
                  <Heading
                    className="sora"
                    mb={{ md: "7px", base: "0px" }}
                    fontWeight={600}
                    letterSpacing={"1px"}
                    color={"white.100"}
                    variant={"p11"}
                  >
                    {item.heading}
                  </Heading>
                  {item.links.map((item , ind) => {
                    return (
                      <Link
                      key={ind}
                        transition={".5s"}
                        _hover={{ textDecoration: "none", color: "white.300" }}
                        variant={"footerLink"}
                        as="a"
                        href={item.pathName}
                      >
                        {item.link}
                      </Link>
                    );
                  })}
                  {ind == 2 ? (
                    <Heading
                      mt={"20px"}
                      color={"white.100"}
                      textAlign={"end"}
                      variant={"p4"}
                    >
                      {" "}
                      &copy; {new Date().getFullYear()} Jobreef Ltd.{" "}
                    </Heading>
                  ) : null}
                </Stack>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
