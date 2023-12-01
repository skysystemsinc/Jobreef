import { Box, IconButton } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const HeaderDropdown = dynamic(
  () => import("../HeaderDropdown/HeaderDropdown"),
  {
    ssr: false,
  }
);
const OperatorHeader = () => {
  return (
    <Box
      width={"100%"}
      boxShadow={" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      pr={"30px"}
      py={"10px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      gap={"27px"}
      bg={"white.100"}
    >
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="blue"
        aria-label="Done"
        size={"sm"}
        icon={<IoNotificationsOutline />}
      />
      <HeaderDropdown hiddenStyle={{ display: "block" }} operatorDropdown />
    </Box>
  );
};

export default OperatorHeader;
