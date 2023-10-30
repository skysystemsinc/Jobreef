import React from "react";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import cross from "../../assets/Images/cross.svg";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Label,
  Image,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";

const PreviousSearches = [
  {
    Search: "Microsoft",
  },
  {
    Search: "Amazon",
  },
  {
    Search: "FaceBook",
  },
  {
    Search: "Google",
  },
];

const ShowPreviousSearches = () => {
  return (
    <Box

      display={"flex"}
      flexDirection={"column"}
      flexWrap={"wrap"}
      width="100%"
    //  width={"250px"}
      // flex={1.25}
    >
      <Box borderWidth={1} borderColor="gray.400" borderRadius={"8px"}>
        <Heading mt={"22px"} ml={2} mb={2} variant={"p10"}>
          Previous Searches
        </Heading>
        {PreviousSearches.map((object, index) => {
          return (
            <Box
              
              pb={4}
              borderBottom={"1px solid"}
              borderBottomColor="gray.100"
              
              // border={"1px solid red"}
              ml={2}
              mt={2}
              mr={2}
              key={Math.random()}
            >
              <Heading
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                color={"gray"}
                fontWeight={"normal"}
                fontSize={16}
                variant={"p4"}
              >
                {object.Search}
                <Image
                  width={"9px"}
                  src={cross.src}
                  marginRight={2}
                />
              </Heading>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ShowPreviousSearches;
