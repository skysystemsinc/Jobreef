import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import resumes from "@/assets/Images/resumes.svg";
import arrowGray from "@/assets/Images/arrowGray.svg";
const Advices = () => {
  const advicesData = [
    {
      title: "Career Advice",
      desc: "The latest blog posts on professional development and industry trends.",
    },
    {
      title: "Resume Builder",
      desc: "Free online Resume Builder to generate a PDF copy of your resume.",
    },
    {
      title: "Salary Calculator",
      desc: "Calculates your paycheck amount and National Insurance contributions.",
    },
  ];
  return (
    <Box
      bg={"blue.200"}
      height={{ md: "232px", base: "auto" }}
      pt={{ md: "30px", base: "10px" }}
      mb={{ md: "230px", base: "40px" }}
      pb={{ md: "0px", base: "30px" }}
      px={"10px"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ md: "100px", base: "10px" }}
        flexWrap={"wrap"}
      >
        <Box>
          {advicesData.map((item, ind) => {
            return (
              <Box
                cursor={"pointer"}
                key={ind}
                py={{ md: "16px", base: "14px" }}
                borderBottom={ind == 2 ? "none" : "1px solid "}
                borderColor={"blue.900"}
              >
                <Heading
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  variant={"p6"}
                  fontWeight={700}
                  color={"gray.text"}
                  mb={{ md: "7px", base: "4px" }}
                >
                  {item.title}
                  <Image
                    width={{ md: "15px", base: "13px" }}
                    src={arrowGray.src}
                  />
                </Heading>
                <Heading
                  lineHeight={{ md: "28px", base: "20px" }}
                  maxWidth={"330px"}
                  variant={"p5"}
                >
                  {item.desc}
                </Heading>
              </Box>
            );
          })}
        </Box>
        <Image width={"450px"} src={resumes.src} />
      </Box>
    </Box>
  );
};

export default Advices;
