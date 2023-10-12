import { Box, Circle, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import edit_outline from "@/assets/Images/edit_outline.svg";
import trash from "@/assets/Images/trash.svg";
const SkillsCard = () => {
  return (
    <Box
      p={{ sm: "20px", base: "12px" }}
      mb={{ md: "33px", base: "20px" }}
      width={"100%"}
      borderRadius={"8px"}
      bg={"white.100"}
      border={"1px solid"}
      borderColor={"gray.light"}
      box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
    >
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        flexWrap={{ xl: "nowrap", base: "wrap" }}
        borderColor={"gray.400"}
      >
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={{ md: "18px", base: "12px" }}
        >
          {/* <Box>
            <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} />
          </Box> */}
          <Box display={"flex"} alignItems={"center"} gap={"48px"}>
            <Box>
              <Heading color={"gray.text"} variant={"p4"} mb={"9px"}>
                Skill Name
              </Heading>
              <Heading variant={"p7"} color={"gray.text"}>
                Communication
              </Heading>
            </Box>
            <Box>
              <Heading color={"gray.text"} variant={"p4"} mb={"9px"}>
                Skill Level
              </Heading>
              <Heading variant={"p7"} color={"gray.text"}>
                Proficient
              </Heading>
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          mt={{ xl: "0px", base: "10px" }}
          justifyContent={"flex-end"}
          width={{ xl: "auto", base: "100%" }}
          gap={"20px"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Image
              width={{ md: "19px", base: "16px" }}
              src={edit_outline.src}
            />
            <Heading variant={"p5"}>Edit</Heading>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Image width={{ md: "19px", base: "16px" }} src={trash.src} />
            <Heading variant={"p5"}>Delete</Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsCard;
