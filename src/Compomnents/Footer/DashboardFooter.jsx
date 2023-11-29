import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";

const DashboardFooter = ({ waveImage }) => {
  return (
    <  Box  >
      {waveImage ? (
        <Box position={"relative"} height={"100%"}>
          <BottomWaveImage />
        </Box>
      ) : null}
      <Box bg={"blue.500"}>
        <Container maxW={"4xl"} p={"10px 20px 10px 20px"}>
          <Heading color={"white.100"} textAlign={"center"} variant={"p4"}>
            {" "}
            &copy; {new Date().getFullYear()} Jobreef Ltd.{" "}
          </Heading>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardFooter;
