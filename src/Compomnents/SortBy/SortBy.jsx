import globalStyles from "@/styles/globalStyles";
import { Box, Checkbox, Heading } from "@chakra-ui/react";
import React from "react";

const SortBy = () => {
  return (
    <Box
    height={"max-content"}
      borderRadius={"8px"}
      width={"max-content"}
      whiteSpace={"nowrap"}
      border={"1px solid"}
      bg={"white.100"}
      borderColor={"gray.light"}
    >
      <Box
        p={"20px  20px 16px 20px"}
        borderBottom={"1px solid "}
        borderColor={"gray.light"}
      >
        <Heading variant={"p7"} color={"gray.text"}>
          Sort Candidates By
        </Heading>
        <Box>
          <Box mt={"16px"}>
            <Checkbox
              borderColor={"black.200"}
              borderRadius={"8px"}
              defaultChecked
              sx={globalStyles.checkBoxStyle}
              size="md"
              rounded={"sm"}
              colorScheme="blue"
            >
              <Heading color={"blue.500"} variant={"p4"}>
                Date Applied
              </Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              sx={{
                "& .chakra-checkbox__control": {
                  // Add your custom styles here
                  borderRadius: "5px", // Make the checkbox round
                },
              }}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Relevance</Heading>
            </Checkbox>
          </Box>
        </Box>
      </Box>
      <Box
        p={"20px  20px 16px 20px"}
        borderBottom={"1px solid "}
        borderColor={"gray.light"}
      >
        <Heading variant={"p7"} color={"gray.text"}>
          Status
        </Heading>
        <Box>
          <Box mt={"16px"}>
            <Checkbox
              borderColor={"black.200"}
              borderRadius={"8px"}
              sx={globalStyles.checkBoxStyle}
              size="md"
              rounded={"sm"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>New</Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Read</Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Interviewing</Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Closed</Heading>
            </Checkbox>
          </Box>
        </Box>
      </Box>
      <Box
        p={"20px  20px 16px 20px"}
        borderBottom={"1px solid "}
        borderColor={"gray.light"}
      >
        <Heading variant={"p7"} color={"gray.text"}>
        Education
        </Heading>
        <Box>
          <Box mt={"16px"}>
            <Checkbox
              borderColor={"black.200"}
              borderRadius={"8px"}
              sx={globalStyles.checkBoxStyle}
              size="md"
              rounded={"sm"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Masters Degree or Higher</Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Bachelor’s Degree or Higher</Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Associate Degree or Higher</Heading>
            </Checkbox>
          </Box>
          
        </Box>
      </Box>
      
      <Box
        p={"20px  20px 16px 20px"}
        borderBottom={"1px solid "}
        borderColor={"gray.light"}
      >
        <Heading variant={"p7"} color={"gray.text"}>
        Skills
        </Heading>
        <Box>
          <Box mt={"16px"}>
            <Checkbox
              borderColor={"black.200"}
              borderRadius={"8px"}
              sx={globalStyles.checkBoxStyle}
              size="md"
              rounded={"sm"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Project Management</Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>System Architecture</Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Product Design</Heading>
            </Checkbox>
          </Box>
          
          <Box mt={"10px"}>
            <Checkbox
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading variant={"p4"}>Leadership</Heading>
            </Checkbox>
          </Box>

          
        </Box>
      </Box>
      
    </Box>
  );
};

export default SortBy;
