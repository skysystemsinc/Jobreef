import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import microSoft from "@/assets/Images/micrsoftCompany.svg";
import qua from "@/assets/Images/qua.svg";
import west from "@/assets/Images/west.svg";
import line from "@/assets/Images/line.svg";
import tesla from "@/assets/Images/tesla.svg";
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import Slider from "react-slick";

const TopCompanies = () => {
  const DataArray = [microSoft, qua, west, line, tesla, microSoft];
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
    slidesToShow: 5,
    slidesToScroll: 3,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function CustomArrow({ style, icon, handleEvent }) {
    return (
      <Box
        transition={".5s"}
        position={"absolute"}
        sx={style}
        // right={"0px"}
        zIndex={2}
        color="blue.500"
        cursor={"pointer"}
        onClick={handleEvent}
        _hover={{
          color: "blue.600",
        }}
        fontSize={"14px"}
      >
        {icon}
      </Box>
    );
  }
  return (
    <Container mt={{ md: "60px", base:"40px"}} maxW={"5xl"}>
      <Heading
        textAlign={"center"}
        className="sora"
        mb="17px"
        fontWeight={700}
        color={"gray.text"}
        variant={"h1"}
      >
        Chosen by Top
        <Box mx={"10px"} as="span" color={"blue.500"}>
          Companies
        </Box>
      </Heading>
      <Box position={"relative"}>
        <CustomArrow
          handleEvent={handleNext}
          style={{
            top: "40%",
            right: "0px",
          }}
          icon={<FaChevronRight fontSize={"16"} />}
        />
        <CustomArrow
          style={{
            top: "40%",
            left: "0px",
          }}
          handleEvent={handlePrev}
          icon={<FaAngleLeft fontSize={"16"} />}
        />
        <Slider ref={sliderRef} {...settings}>
          {DataArray.map((item) => {
            return (
              <Box   p={"20px"} >
                <Image mx={"auto"} width={{md: "120px", base:"100px"}} src={item.src} />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Container>
  );
};

export default TopCompanies;
