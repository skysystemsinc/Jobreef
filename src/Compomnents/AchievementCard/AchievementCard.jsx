import { Box, Circle, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import edit_outline from "@/assets/Images/edit_outline.svg";
import trash from "@/assets/Images/trash.svg";
import moment from "moment";
const AchievementCard = ({
  data,
  state,
  setState,
  headingStyle,
  dispableBlueCard,
}) => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 500px)");

  return (
    <Box
      p={{ sm: "15px 0px 20px 8px ", base: "12px" }}
      mb={{ md: "33px", base: "20px" }}
      width={"100%"}
      borderRadius={"8px"}
      bg={"white.100"}
      border={"1px solid"}
      borderColor={"gray.light"}
      filter="drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05))"
    >
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        // borderBottom={"1px solid "}
        pr={"15px"}
        // borderColor={"gray.400"}
        flexWrap={{ xl: "nowrap", base: "wrap" }}
      >
        <Heading variant={"p7"} color={"gray.text"}>
          {/* {data.certificateName} */}
          Achievement Name
        </Heading>

        <Box
          display={"flex"}
          alignItems={"center"}
          mt={{ xl: "0px", base: "10px" }}
          justifyContent={"flex-end"}
          width={{ xl: "auto", base: "100%" }}
          gap={"20px"}
        >
          <Box
            cursor={"pointer"}
            onClick={() =>
              setState((prev) => {
                return {
                  ...prev,
                  edit: true,
                };
              })
            }
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Image
              width={{ md: "17px", base: "16px" }}
              src={edit_outline.src}
            />
            <Heading variant={"p5"}>Edit</Heading>
          </Box>
          <Box
            cursor={"pointer"}
            onClick={() =>
              setState((prev) => {
                return {
                  ...prev,
                  delete: true,
                };
              })
            }
            display={"flex"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Image width={{ md: "17px", base: "16px" }} src={trash.src} />
            <Heading variant={"p5"}>Delete</Heading>
          </Box>
        </Box>
      </Box>
      <Box
        mt={{ md: "14px", base: "3px" }}
        display={"flex"}
        // alignItems={"flex-start"}
        alignItems={{ md: "flex-start", base: "center" }}
        flexWrap={{ md: "nowrap", base: "wrap" }}
        gap={{ md: "10px", sm: "6px", base: "5px" }}
      >
        <Heading color={"gray.text"} variant={"p12"} sx={headingStyle}>
          {/* {data.organizationName} */}
          Organisation Name
        </Heading>
        <Box fontSize={{ sm: "14px", base: "8px" }}>
          <GoDotFill style={{ color: "#D9D9D9" }} />
        </Box>

        <Heading color={"gray.text"} variant={"p12"} sx={headingStyle}>
          {moment(data.stateDate).format("MMMM YYYY")} {" - "}
          {moment(data.endDate).format("MMMM YYYY")}
        </Heading>
        {/* <Box fontSize={{ sm: "14px", base: "8px" }}>
          <GoDotFill style={{ color: "#D9D9D9" }} />
        </Box> */}

   
      </Box>
     
    </Box>
  );
};

export default AchievementCard;
