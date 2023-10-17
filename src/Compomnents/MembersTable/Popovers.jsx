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
} from "@chakra-ui/react";
import React from "react";
import menu from "@/assets/Images/menu.svg";

const Popovers = ({ width, actionList }) => {
  return (
    <Popover size={"sm"} placement="bottom-end">
      <PopoverTrigger>
        {/* <Button>Trigger</Button>
         */}
        <Image src={menu.src} width={"24px"} />
      </PopoverTrigger>
      <PopoverContent
        outline={"none"}
        bg={"white.100"}
        width={width ? width : "145px"}
        boxShadow="0px 2px 15px 0px rgba(0, 0, 0, 0.06)"
      >
        <PopoverBody p={"0px"}>
          {actionList.map((item, index) => {
            return (
              <Box
                key={index}
                padding={"12px  20px"}
                borderBottom={"1px solid"}
                borderColor={"gray.500"}
              >
                <Heading as={"p"} variant={"p4"}>
                  {item}
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