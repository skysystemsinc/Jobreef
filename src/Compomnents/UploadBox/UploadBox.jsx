import {
  Box,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import upload from "@/assets/Images/upload.svg";
import { BsDot } from "react-icons/bs";

const UploadBox = ({ titie, list }) => {
  return (
    <Flex justifyContent={"center"}>
      <Box
        // border={"lpx solid!important"}
        sx={{ border: "1px solid" }}
        maxWidth={"max-content"}
        borderColor={"gray.500 !important"}
        borderRadius={"8px"}
        p={"20px 10px"}
        // mt={{ md: "80px", base: "40px" }}
      >
        <Box textAlign={"center"}>
          <Heading variant={"p7"}>{titie}</Heading>
        </Box>

        <Box display={"flex"} justifyContent={"center"} mb={"23px"} mt={"11px"}>
          <List>
            {list?.map((item, ind) => {
              return (
                <ListItem
                  key={ind}
                  sx={{
                    fontWeight: 600,

                    color: "gray.light",
                    display: "flex",
                    alignItems: "center",
                    // lineHeight: "28px",
                    fontFamily: "var(--chakra-\fonts-Nunito)",
                    fontSize: { "2xl": "18px", sm: "15px", base: "13px" },
                  }}
                >
                  <ListIcon fontSize={"27px"} as={BsDot} color="blue.500" />
                  {item}
                </ListItem>
              );
            })}

          </List>
        </Box>

        <Box
          mt={{ base: "20px", md: "0px" }}
          display={"flex"}
          justifyContent={"center"}
        >
          <FormLabel
            variant={"lightblue"}
            border={"1px dashed"}
            borderColor={"#BBBBC7"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"14px"}
          >
            <Image src={upload.src} width={{ md: "20px", base: "17px" }} /> Drag
            & Drop
            <Input type="file" hidden />
          </FormLabel>
        </Box>
      </Box>
    </Flex>
  );
};

export default UploadBox;
