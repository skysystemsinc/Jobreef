import React from "react";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import Generalblog from "@/assets/Images/Generalblog.svg";
import arrowupright from "@/assets/Images/arrow-up-right.svg";
import Avatar from "@/assets/Images/Avatar.png";

const BlogCard = ({ disableProfile }) => {
  return (
    <Box
      mb={"4%"}
      p={"8px"}
      borderRadius={"5px"}
      width={"100%"}
      display={"flex"}
      flexDirection="column"
      gap={"2px"}
      transition={"all 0.4s ease"}
      _hover={{
        cursor: "pointer",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        transition: "all 0.4s ease",
        transform: "scale(1.05)",
      }}
      // onClick={()=>{object}} object bhejna hai Article ko
    >
      <Image width={"100%"} src={Generalblog.src} />
      <Heading
        mt={{ md: "19px", base: "10px" }}
        mb={{ md: "11px", base: "6px" }}
        color={"blue.500"}
        fontWeight={"bold"}
        variant={"p4"}
      >
        Design
      </Heading>
      <Box
        maxW={"100%"}
        alignItems={"center"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Heading color={"gray.text"} variant={"p11"}>
          UX review Presentation
        </Heading>
        <Box>
          <Image width={"20px"} src={arrowupright.src} />
        </Box>
      </Box>
      <Heading
        maxWidth={"100%"}
        mt={{ md: "10px", base: "3px" }}
        mb={{ md: "22px", base: "15px" }}
        color={"gray.text"}
        variant={"p4"}
      >
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </Heading>

      {disableProfile ? null : (
        <Box display={"flex"} gap={"17px"}>
          <Image
            width={"45px"}
            height={"45px"}
            objectFit={"cover"}
            src={Avatar.src}
          />
          <Box display={"flex"} flexDirection={"Column"}>
            <Heading color={"gray.text"} fontWeight={700} variant={"p4"}>
              Olivia Rhye
            </Heading>
            <Heading color={"gray.text"} variant={"p4"}>
              20 Jan 2022
            </Heading>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BlogCard;
