import { Box } from "@chakra-ui/react";

const SliderArrows = ({ style, icon, handleEvent }) => {
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
};
export default SliderArrows;
