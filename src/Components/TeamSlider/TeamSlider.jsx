import React from "react";
import { DataArray } from "../JobSearchData/tempSchema";
import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import Generalblog from "@/assets/Images/Generalblog.svg";
import Slider from "react-slick"
const TeamSlider = ({style}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <Slider {...settings}>
      {DataArray.map((item, index) => {
        return (
          <Box
            key={index}
            
            px={{ md: "20px", base:"2px"}}
            sx={style}
          >
            <Image
            // borderRadius={"5px"}
              width={"100%"}
              height={"320px"}
              objectFit={"cover"}
              src={Generalblog.src}
            />
          </Box>
        );
      })}
    </Slider>
  );
};

export default TeamSlider;
