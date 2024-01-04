import React, { useRef } from "react";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import SliderArrows from "../SliderArrows/SliderArrows";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import { DataArray } from "../JobSearchData/tempSchema";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Slider from "react-slick";
const Testimonial = () => {
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
    slidesToShow: 2,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <Box bg={"blue.200"} py={{ md: "50px", base: "30px" }}>
      <Container maxW={"5xl"}>
        <Box>
          {" "}
          <Heading
            textAlign={"center"}
            className="sora"
            mb={{ md: "30px", base: "20px" }}
            fontWeight={700}
            color={"gray.text"}
            variant={"h1"}
          >
            Testimonials From Our
            <Box mx={"10px"} as="span" color={"blue.500"}>
              Customers
            </Box>
          </Heading>
        </Box>

        <Box position={"relative"}>
          <SliderArrows
            handleEvent={handleNext}
            style={{
              top: "40%",
              right: "0px",
            }}
            icon={<FaChevronRight fontSize={"12px"} />}
          />
          <SliderArrows
            style={{
              top: "40%",
              left: "0px",
            }}
            handleEvent={handlePrev}
            icon={<FaAngleLeft fontSize={"12px"} />}
          />
          <Slider ref={sliderRef} {...settings}>
            {DataArray.map((item, index) => {
              return (
                <Box py={"10px"} key={index} px={{md: "9px", base:"8px"}}>
                  <TestimonialCard object={item} />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
