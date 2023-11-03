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
import UploadedCard from "../UploadedCard/UploadedCard";
import { RxCross2 } from "react-icons/rx";

const UploadBox = ({
  btnLabelStyle,
  handleDelete,
  showSelectedImage,
  butLabel,
  handleEvent,
  titie,
  list,
  style,
}) => {
  return (
    <Flex justifyContent={"center"}>
      <Box
        // border={"lpx solid!important"}
        maxWidth={"max-content"}
        borderColor={"gray.500 !important"}
        borderRadius={"8px"}
        p={"20px 10px"}
        bg={"white.100"}
        // mt={{ md: "80px", base: "40px" }}
        sx={{ border: "1px solid", ...style }}
      >
        <Box textAlign={"center"}>
          <Heading variant={"p7"}>{titie}</Heading>
        </Box>

        <Box display={"flex"} justifyContent={"center"} mb={"10px"} mt={"11px"}>
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
                    fontSize: { md: "15px", base: "12px" },
                  }}
                >
                  <ListIcon
                    m={"0px"}
                    fontSize={"32px"}
                    as={BsDot}
                    color="blue.500"
                  />
                  {item}
                </ListItem>
              );
            })}
          </List>
        </Box>
        {showSelectedImage ? (
          <Box width="90%" mx={"auto"}>
            {showSelectedImage?.map((item) => {
              return (
                <UploadedCard
                  fileName={item.pdfFile.name}
                  crossIcon={<RxCross2 />}
                  boxStyle={{ border: "none" }}
                  handleDelete={handleDelete}
                  // handleDelete={
                  //   () => {
                  //     if (item.resume) {
                  //       handleDelete(ind, "resume");
                  //     } else {
                  //       handleDelete(ind, "additional");
                  //     }
                  //   }

                  // }

                  // fileName={"What Ever"}
                />
              );
            })}
          </Box>
        ) : null}
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
            gap={{ md: "10px", base: "8px" }}
            sx={btnLabelStyle}
          >
            <Image src={upload.src} width={{ md: "17px", base: "15px" }} />{" "}
            {butLabel ? butLabel : "Upload"}
            <Input multiple onChange={handleEvent} type="file" hidden />
          </FormLabel>
        </Box>
      </Box>
    </Flex>
  );
};

export default UploadBox;
