import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import rightGrayArrow from "@/assets/Images/rightGrayArrow.svg";
import SliderArrows from "../SliderArrows/SliderArrows"
import Slider from "react-slick";
import ActiveJobCard from "../ActiveJobCard/ActiveJobCard";
import { DataArray } from "../JobSearchData/tempSchema";

import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const ActivelyRecruiting = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <Box height={"250px"} mb={{ md: "300px", base:"240px"} }pt={{md: '50px', base:"30px"}} bg={"blue.200"}>
      <Container maxW={"6xl"}>
        <Box
        mb={'25px'}
        mx={'12px'}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading
            className="sora"
            fontWeight={700}
            variant={"p6"}
            color={"gray.text"}
          >
            Actively recruiting
          </Heading>
          <Button
            rightIcon={<Image src={rightGrayArrow.src} width={"20px"} />}
            color={"gray.text"}
            variant={"unstyled"}
            fontWeight={600}
          >
            {"Explore Companies"}
          </Button>
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
            {DataArray.map((item , index) => {
              return (
                <Box py={'10px'}
                sx={{
                  // transform:"scale(0..)"
                }}
                key={index} px={"17px"}>
                  <ActiveJobCard object={item} />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ActivelyRecruiting;
