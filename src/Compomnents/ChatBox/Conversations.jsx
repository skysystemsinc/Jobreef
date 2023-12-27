import {
  Box,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import UnreadMessage from "./UnreadMessage";
import { CiSearch } from "react-icons/ci";
import search from "@/assets/Images/search.svg";

import msg_edit from "@/assets/Images/msg_edit.svg";
import ConversationCard from "../ConversationCard/ConversationCard";
import globalStyles from "@/styles/globalStyles";
import conversation from "@/db/chat.json";
import { useDispatch } from "react-redux";
import { getActiveConversation } from "@/Redux/slices/chat";
const Conversations = ({ disableEdit }) => {
  const dispatch = useDispatch();
  const [isSmallerThe500] = useMediaQuery("(max-width:992px)");
  console.log("isSmallerThe500", isSmallerThe500);

  const handleActiveConversation = (conversation) => {
    dispatch(getActiveConversation(conversation));
    // dispatch(getAllMessages(conversation));
  };
  useEffect(() => {
    if (typeof window != undefined) {
      if (window.innerWidth > 992) {
        dispatch(getActiveConversation(conversation[0]));
      }
    }

    return () => {};
  }, []);

  return (
    <Box
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"gray.700"}
      bg={"gray.800"}
      // height={"100vh"}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
    >
      <Box
        padding={"18px  18px 14px 18px"}
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"9px"}>
          <Heading variant={"p11"} color={"black.400"}>
            Messages
          </Heading>
          <UnreadMessage count={"49"} />
        </Box>
        <Box>
          {disableEdit ? null : <Image src={msg_edit.src} width={"30px"} />}
        </Box>
      </Box>
      <Box padding={"0px 18px"}>
        <InputGroup>
          <InputLeftElement height={"35px"} pointerEvents="none">
            {/* <CiSearch fontSize={"18px"} color="blue.700" /> */}
            <Image src={search.src} width={"16px"} />
          </InputLeftElement>
          <Input
            type="text"
            color={"blue.700"}
            variant={"bg-input"}
            borderRadius={"5px"}
            placeholder="Search"
            sx={{
              height: "35px",
              _placeholder: {
                fontSize: "16px",
                color: "blue.700",
              },
            }}
            // height={"35px"}
          />
        </InputGroup>
      </Box>

      <Box
        height={"575px"}
        overflowY={"scroll"}
        sx={globalStyles.scrollBar}
        mt={"15px"}
      >
        {conversation?.map((item, ind) => {
          return (
            <Box key={ind} onClick={() => handleActiveConversation(item)}>
              <ConversationCard data={item} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Conversations;
