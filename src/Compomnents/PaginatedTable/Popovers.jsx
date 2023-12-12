import {
  Box,
  Button,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import menu from "@/assets/Images/menu.svg";

const Popovers = ({ width, actionList }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      // placement="right"
      closeOnBlur={false}
      size={"sm"}
      placement="left"
    >
      <PopoverTrigger>
        {/* <Button>Trigger</Button>
         */}
        <Image
          cursor={"pointer"}
          onClick={(e) => {
            e.stopPropagation(), onToggle();
          }}
          src={menu.src}
          width={"20px"}
        />
      </PopoverTrigger>
      <PopoverContent
        outline={"none"}
        bg={"white.100"}
        width={width ? width : "145px"}
        boxShadow="0px 2px 15px 0px rgba(0, 0, 0, 0.06)"
      >
        <PopoverBody p={"0px"}>
          {actionList?.map((item, index) => {
            return (
              <Box
                onClick={() => {
                  item.handleEvent(), onClose();
                }}
                cursor={"pointer"}
                key={index}
                padding={"12px  20px"}
                borderBottom={"1px solid"}
                borderColor={"gray.500"}
                transition={".5s"}
                _hover={{ borderColor: "blue.500" }}
              >
                <Heading as={"p"} variant={"p4"}>
                  {item.title ?? item}
                </Heading>
              </Box>
            );
          })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Popovers;
