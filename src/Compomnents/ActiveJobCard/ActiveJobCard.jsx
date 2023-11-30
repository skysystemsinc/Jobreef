import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { Box, Divider, Heading, Image } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import users from "@/assets/Images/users.svg";
import grayBuilding from "@/assets/Images/grayBuilding.svg";
const ActiveJobCard = () => {
  return (
    <Box
      width={"100%"}
      padding={{ md:"20px 30px 30px 30px", base:"16px 20px 21px 20px"}}
      borderRadius={"5px"}
      transition={"all 0.4s ease"}
      _hover={{
        cursor: "pointer",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        transition: "all 0.4s ease",
        transform: "scale(1.05)",
      }}
      backgroundColor={"white.100"}
      boxShadow="0px 6px 4px 0px rgba(0, 0, 0, 0.05)"
    >
      <Box  display={"flex"} alignItems={"center"} gap={"20px"}>
        <Image width={{ md: "50px", base:'40px'}} src={microsoft.src} />
        <Heading fontWeight={500} color={"gray.text"} variant={"p6"}>
          Microsoft
        </Heading>
      </Box>
      <Divider mb={{ md: "36px",base: "26px"}} borderColor={"gray.borderColor"} mt={"15px"} />
      <Box>
        <Heading
          display={"flex"}
          gap={"10px"}
          alignItems={"center"}
          variant={"p4"}
        >
          {" "}
          <HiLocationMarker style={{ color: "#4A4A4A" }} /> Redmond, Washington
          State, USA
        </Heading>
        <Heading
          display={"flex"}
          gap={"10px"}
          alignItems={"center"}
          variant={"p4"}
          mt={"10px"}
          mb={"10px"}
        >
          {" "}
          <Image src={users.src} style={{ color: "#4A4A4A" }} />
          1,001 Employees
        </Heading>
        <Heading
          display={"flex"}
          gap={"10px"}
          alignItems={"center"}
          variant={"p4"}
        >
          {" "}
          <Image src={grayBuilding.src} style={{ color: "#4A4A4A" }} />
          Technology
        </Heading>
        <Heading variant={"p4"} maxWidth={"100%"} mt={'20px'}>
          Voted Best Airline – UK and Best Low-Cost Airline – Europe at the Trip
          Advisor Travelers' Choice Awards for four years running, Jet2.com’s
          the top place to go for cheap flights.
        </Heading>
      </Box>
    </Box>
  );
};

export default ActiveJobCard;
