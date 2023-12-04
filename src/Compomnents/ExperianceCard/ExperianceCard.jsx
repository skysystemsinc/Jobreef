import { Box, Circle, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import edit_outline from "@/assets/Images/edit_outline.svg";
import trash from "@/assets/Images/trash.svg";
import moment from "moment";
const ExperianceCard = ({ handleEdit, data, state, setState }) => {
  return (
    <Box
      p={{ sm: "16px", base: "12px" }}
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
        borderBottom={"1px solid "}
        flexWrap={{ xl: "nowrap", base: "wrap" }}
        borderColor={"gray.400"}
        pb={{ lg: "20px", base: "10px" }}
      >
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={{ md: "13px", base: "12px" }}
        >
          {/* <Box>
            <Image width={{ md: "50px", base: "35px" }} src={microsoft.src} />
          </Box> */}
          <Box>
            <Heading variant={"p7"} color={"gray.text"}>
              {data.designation}
            </Heading>
            <Box
              mt={{ md: "6px", base: "3px" }}
              display={"flex"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={{ md: "12px", sm: "6px", base: "5px" }}
            >
              <Heading color={"gray.text"} variant={"p4"}>
                {data.companyName}
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading color={"gray.text"} variant={"p4"}>
                {moment(data.stateDate).format("MMMM YYYY")} {" - "}
                {data.endDate
                  ? moment(data.endDate).format("MMMM YYYY")
                  : "Present"}
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading
                display={"flex"}
                gap={"6px"}
                alignItems={"center"}
                variant={"p4"}
              >
                {" "}
                <HiLocationMarker style={{ color: "#4A4A4A" }} />{" "}
                {data.location.country}
              </Heading>
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          mt={{ md: "0px", base: "10px" }}
          justifyContent={"flex-end"}
          width={{ xl: "auto", base: "100%" }}
          gap={"18px"}
        >
          <Box
            onClick={handleEdit
            }
            cursor={"pointer"}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Image
              width={{ md: "17px", base: "15px" }}
              src={edit_outline.src}
            />
            <Heading variant={"p5"}>Edit</Heading>
          </Box>
          <Box
            onClick={() =>
              setState((prev) => {
                return {
                  ...prev,
                  delete: true,
                };
              })
            }
            cursor={"pointer"}
            display={"flex"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Image width={{ md: "17px", base: "15px" }} src={trash.src} />
            <Heading variant={"p5"}>Delete</Heading>
          </Box>
        </Box>
      </Box>

      <Box>
        <Heading
          lineHeight={"25px"}
          pt={"14px"}
          color={"gray.text"}
          variant={"p5"}
        >
          {data.jobSummary}
        </Heading>
      </Box>
    </Box>
  );
};

export default ExperianceCard;
