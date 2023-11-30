import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import mail from "@/assets/Images/mail.svg";
const NewsLetter = () => {
  return (
    <Container maxW={"5xl"}>
      <Box display={"flex"} alignItems={"center"} gap={{ md: "35px", base:'20px'}} justifyContent={"center"} flexWrap={"wrap"}>
        <Box display={"flex"} alignItems={"center"} gap={"15px"}>
          <Image width={{md: "100px", base:"85px"}} src={mail.src} />
          <Box mt={'10px'}>
            <Heading
              mb={{ md:"5px", base:"0px"}}
              className="sora"
              fontWeight={700}
              variant={"h1"}
              color={"gray.text"}
            >
              Subscribe to Newsletter
            </Heading>
            <Heading maxW={"200px"} variant={"p4"}>
              Get the latest updates and news direct to your inbox
            </Heading>
          </Box>
        </Box>
        <Box maxW={"440px"}>
          <Box mb={"12px"} display={"flex"} gap={"15px"} alignItems={"center"}>
            <Input
              borderRadius={"5px !important"}
              type="text"
              variant={"simple"}
              bg={"transparent !important"}
              border={"1px solid !important"}
              borderColor={"gray.300 !important"}
              placeholder="Enter your email address"
              _placeholder={{
                color: "gray.textColor",
                fontWeight:500
              }}
              sx={{ height: "45px" }}
            />
            <Button
              sx={{ height: "45px" }}
              width={"max-content"}
              px={"40px"}
              variant={"blue-btn"}
              fontWeight={600}
              boxShadow={"none"}
            >
              Subscribe
            </Button>
          </Box>
          <Heading variant={"p4"}>
            By subscribing you agree to receive email communications from
            Jobreef. You may unsubscribe at any time.
          </Heading>
        </Box>
      </Box>
    </Container>
  );
};

export default NewsLetter;
