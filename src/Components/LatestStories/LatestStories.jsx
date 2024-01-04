import React from "react";
import rightGrayArrow from "@/assets/Images/rightGrayArrow.svg";
import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import BlogCard from "../BlogCard/BlogCard";

const LatestStories = () => {
  return (
    <Container pt={{ md: "40px", base:"30px"}} pb={{ md: "40px", base:"25px"}} maxW={"5xl"}>
      <Box
        mb={{md: "25px", base:"10px"}}
        mx={"12px"}
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
          Latest stories
        </Heading>
        <Button
          rightIcon={<Image src={rightGrayArrow.src} width={"20px"} />}
          color={"gray.text"}
          variant={"unstyled"}
          fontWeight={600}
        >
          {"Explore "}
        </Button>
      </Box>

      <Box
        display={"grid"}
        gridTemplateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Box>
    </Container>
  );
};

export default LatestStories;
