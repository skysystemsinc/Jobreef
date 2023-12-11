import React from "react";
import {
  Box,
  Heading,
  Input,
  Container,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactForm = ({ style,label , smallText}) => {
  return (
    <Box bg={"blue.200"} py={{md: "30px", base:"20px"}} height={"250px"} mb={"190px"} sx={style} >
      <Heading
        className="sora"
        fontWeight={700}
        color={"gray.text"}
        textAlign={"center"}
        variant={"h1"}
        mb={{md: "40px", base:"27px"}}
      >
        {label}
        <Box mx={"10px"} as="span" color={"blue.500"}>
          {smallText}
        </Box>
      </Heading>

      <Container maxW={"2xl"}>
        <Box flexWrap={{ sm: "nowrap", base:"wrap"}} display={"flex"} alignItems={"center"} gap={{sm: "40px", base:"13px"}}>
          <Input
            borderRadius={"5px !important"}
            type="text"
            variant={"simple"}
            bg={"white.100 !important"}
            border={"1px solid !important"}
            borderColor={"gray.300 !important"}
            placeholder="Name"
            _placeholder={{
              color: "gray.textColor",
              fontWeight: 500,
            }}
            sx={{ height: "45px" }}
          />
          <Input
            borderRadius={"5px !important"}
            type="text"
            variant={"simple"}
            bg={"white.100 !important"}
            border={"1px solid !important"}
            borderColor={"gray.300 !important"}
            placeholder="Email Address"
            _placeholder={{
              color: "gray.textColor",
              fontWeight: 500,
            }}
            sx={{ height: "45px" }}
          />
        </Box>
        <Box mt={"20px"}>
          <Textarea
            borderRadius={"5px !important"}
            type="text"
            variant={"simple"}
            bg={"white.100 !important"}
            border={"1px solid !important"}
            borderColor={"gray.300 !important"}
            placeholder="Message..."
            _placeholder={{
              color: "gray.textColor",
              fontWeight: 500,
            }}
            resize={"none"}
            minH={"140px"}
            // sx={{ height: "45px" }}
          />
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"} mt={"10px"}>
          <Button
            width={"max-content"}
            height={"40px"}
            px={"30px"}
            fontWeight={600}
            variant={"blue-btn"}
          >
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
