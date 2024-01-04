import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
const Faqs = () => {
  const faqs = [
    {
      ques: "Question #1",
      ans: "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut            enim ad minim veniam, quis nostrud exercitation ullamco laboris            nisi ut aliquip ex ea commodo consequat.",
    },
    {
      ques: "Question #2",
      ans: "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut            enim ad minim veniam, quis nostrud exercitation ullamco laboris            nisi ut aliquip ex ea commodo consequat.",
    },
    {
      ques: "Question #3",
      ans: "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut            enim ad minim veniam, quis nostrud exercitation ullamco laboris            nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <Container mb={"100px"} maxW={"6xl"}>
      <Heading  mt={'36px'} mb="20px" ml={'3px'} color={"gray.text"} className="exo" variant={"h2"}>
        Frequently Asked Questions
      </Heading>

      <Accordion defaultIndex={[0]} allowMultiple>
        {faqs.map((item) => {
          return (
            <AccordionItem
              p={"10px 20px 10px 20px"}
              boxShadow={
                "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
              }
              borderRadius={"5px"}
            >
              <AccordionButton
                transition={".5s"}
                _expanded={{
                  "& .accordionIcon": { transform: "rotate(180deg)" },
                }}
              >
                <Box as="span" flex="1" textAlign="left">
                  <Heading  color={"gray.text"} fontWeight={500} variant={"p11"}>
                    {item.ques}
                  </Heading>
                </Box>
                {/* <AccordionIcon  /> */}
                <BsChevronDown className="accordionIcon" />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Heading variant={"p5"}>{item.ans}</Heading>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Faqs;
