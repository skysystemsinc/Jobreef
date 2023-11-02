import { Box, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import profile from "@/assets/Images/profile.svg";
import UnreadMessage from "../ChatBox/UnreadMessage";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { getActiveConversation } from "@/Reudx/slices/chat";
const MessageHeader = () => {
  const dispatch = useDispatch()
  const activeConversation = useSelector((state) => state.chat.value.active);
  const [isSmallerThe500] = useMediaQuery("(max-width: 992px)");
const handleBack =()=>{
  dispatch(getActiveConversation(false)) 

}
  return (
    <Box
      bg={"transparent"}
      transition={".5s"}
      cursor={"pointer"}
      borderBottom={"1px solid"}
      borderColor={"white.200"}
      pb="15px"
    >
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          {isSmallerThe500 ? (
            <Box
            onClick={handleBack}
            fontSize={"25px"}
              cursor={"pointer"}
              color={"blue.500"}
              transition={".5s"}
              _hover={{
                color: "blue.600",
              }}
            >
              <HiOutlineChevronLeft />
            </Box>
          ) : null}
          <Image
            src={activeConversation.profilePic}
            width={"40px"}
            height={"40px"}
            objectFit={"cover"}
            borderRadius={"100px"}
          />
          <Box>
            <Heading fontWeight={700} color={"blue.300"} variant={"p4"}>
              {activeConversation.name}
            </Heading>
            <Heading color={"blue.300"} variant={"p12"}>
              {activeConversation.activeStatus}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageHeader;
