import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import rightGrayArrow from "@/assets/Images/rightGrayArrow.svg";
import IconButton from "../IconButton/IconButton";
import Slider from "react-slick";
import JobCard from "../JobCard/JobCard";
import { DataArray } from "../JobSearchData/tempSchema";

import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
function CustomArrow({ style, icon, handleEvent }) {
  return (
    <Box
      width={"25px"}
      height={"25px"}
      borderRadius={"100px"}
      cursor={"pointer"}
      bg={"white.100"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      transition={".5s"}
      position={"absolute"}
      sx={style}
      // right={"0px"}
      zIndex={2}
      onClick={handleEvent}
      _hover={{
        backgroundColor: "gray.500",
      }}
    >
      {icon}
    </Box>
  );
}
const LatestJobs = () => {
  const sliderRef = useRef(null);
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows:true
    // nextArrow: (
    //   <CustomArrow
    //     handleEvent={handleNext}
    //     style={{
    //       top:'50%',
    //       right:'0px'
    //     }}
    //     icon={<FaChevronRight fontSize={"12px"} />}
    //   />
    // ),
    // prevArrow: (
    //   <CustomArrow
    //   style={{
    //     top:'50%',
    //     left:'0px'
    //   }}
    //     handleEvent={handlePrev}
    //     icon={<FaAngleLeft fontSize={"12px"} />}
    //   />
    // ),
  };

  return (
    <Box bg={"blue.200"} pt={"17px"} pb={"10px"}>
      <Container mt={{ md: "30px", base:"15px"}} maxW={"5xl"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          position={"relative"}
          mb={{ md: "31px", base:"20px"}}
        >
          <Button
            position={"absolute"}
            right={"0px"}
            top={{ md:"10px", base:"50px"}}
            rightIcon={<Image src={rightGrayArrow.src} width={"20px"} position={"relative"} top={"4px"} />}
            variant={"unstyled"}
            gap={"7px"}
            fontWeight={600}
            display={{md:"block",base:'none' }}
          >
            {"Explore more"}
          </Button>

          <Heading
            className="sora"
            mb="5px"
            fontWeight={700}
            color={"gray.text"}
            variant={"h1"}
          >
            Latest
            <Box mx={"10px"} as="span" color={"blue.500"}>
              Featured
            </Box>
            Jobs
          </Heading>
          <Heading color={"gray.text"} variant={"p7"}>
            Dream jobs available from the best local employers
          </Heading>
        </Box>
        <Box position={"relative"}>
          <CustomArrow
            handleEvent={handleNext}
            style={{
              top: "40%",
              right: "0px",
            }}
            icon={<FaChevronRight fontSize={"12px"} />}
          />
          <CustomArrow
            style={{
              top: "40%",
              left: "0px",
            }}
            handleEvent={handlePrev}
            icon={<FaAngleLeft fontSize={"12px"} />}
          />
          <Slider ref={sliderRef} {...settings}>
            {DataArray.map((item) => {
              return (
                <Box p={{ md:"20px", base:"10px"}} px={{ md: "50px", base:"10px"}}>
                  <JobCard object={item} />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default LatestJobs;
