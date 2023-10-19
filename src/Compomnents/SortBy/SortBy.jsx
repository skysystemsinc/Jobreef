import globalStyles from "@/styles/globalStyles";
import { Box, Checkbox, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

const SortBy = ({ matchCandidate }) => {
  // const [relevance, setRelevance] = useState(false);
  const [checkBoxs, setcheckBoxs] = useState({
    dateApplied: true,
    relevance: false,
    new: false,
    read: false,
    inerviewing: false,
    closed: false,
    master: false,
    bachelor: false,
    associated: false,
    pom: false,
    sa: false,
    pd: false,
    leadership: false,
  });
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
          {matchCandidate ? null : (
            <Box mt={"16px"}>
              <Checkbox
                checked={checkBoxs.dateApplied}
                onChange={(e) => {
                  setcheckBoxs((prev) => {
                    return { ...prev, dateApplied: e.target.checked };
                  });
                }}
                borderColor={"black.200"}
                borderRadius={"8px"}
                defaultChecked
                sx={globalStyles.checkBoxStyle}
                size="md"
                rounded={"sm"}
                colorScheme="blue"
              >
                <Heading
                  color={checkBoxs.dateApplied ? "blue.500" : "black.200"}
                  variant={"p4"}
                >
                  Date Applied
                </Heading>
              </Checkbox>
            </Box>
          )}
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
              checked={checkBoxs.relevance}
              onChange={(e) => {
                setcheckBoxs((prev) => {
                  return { ...prev, relevance: e.target.checked };
                });
              }}
              colorScheme="blue"
            >
              <Heading
                color={checkBoxs.relevance ? "blue.500" : "black.200"}
                variant={"p4"}
              >
                Relevance
              </Heading>
            </Checkbox>
          </Box>
        </Box>
      </Box>

      {matchCandidate ? null : (
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
                checked={checkBoxs.new}
                onChange={(e) => {
                  setcheckBoxs((prev) => {
                    return { ...prev, new: e.target.checked };
                  });
                }}
                size="md"
                rounded={"sm"}
                colorScheme="blue"
              >
                <Heading
                  color={checkBoxs.new ? "blue.500" : "black.200"}
                  variant={"p4"}
                >
                  New
                </Heading>
              </Checkbox>
            </Box>
            <Box mt={"10px"}>
              <Checkbox
                checked={checkBoxs.read}
                onChange={(e) => {
                  setcheckBoxs((prev) => {
                    return { ...prev, read: e.target.checked };
                  });
                }}
                sx={globalStyles.checkBoxStyle}
                borderColor={"black.200"}
                size="md"
                rounded={"md"}
                colorScheme="blue"
              >
                <Heading
                  color={checkBoxs.read ? "blue.500" : "black.200"}
                  variant={"p4"}
                >
                  Read
                </Heading>
              </Checkbox>
            </Box>
            <Box mt={"10px"}>
              <Checkbox
                checked={checkBoxs.inerviewing}
                onChange={(e) => {
                  setcheckBoxs((prev) => {
                    return { ...prev, inerviewing: e.target.checked };
                  });
                }}
                sx={globalStyles.checkBoxStyle}
                borderColor={"black.200"}
                size="md"
                rounded={"md"}
                colorScheme="blue"
              >
                <Heading
                  color={checkBoxs.inerviewing ? "blue.500" : "black.200"}
                  variant={"p4"}
                >
                  Interviewing
                </Heading>
              </Checkbox>
            </Box>
            <Box mt={"10px"}>
              <Checkbox
                checked={checkBoxs.closed}
                onChange={(e) => {
                  setcheckBoxs((prev) => {
                    return { ...prev, closed: e.target.checked };
                  });
                }}
                sx={globalStyles.checkBoxStyle}
                borderColor={"black.200"}
                size="md"
                rounded={"md"}
                colorScheme="blue"
              >
                <Heading
                  color={checkBoxs.closed ? "blue.500" : "black.200"}
                  variant={"p4"}
                >
                  Closed
                </Heading>
              </Checkbox>
            </Box>
          </Box>
        </Box>
      )}
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
              checked={checkBoxs.master}
              onChange={(e) => {
                setcheckBoxs((prev) => {
                  return { ...prev, master: e.target.checked };
                });
              }}
              borderColor={"black.200"}
              borderRadius={"8px"}
              sx={globalStyles.checkBoxStyle}
              size="md"
              rounded={"sm"}
              colorScheme="blue"
            >
              <Heading
                color={checkBoxs.master ? "blue.500" : "black.200"}
                variant={"p4"}
              >
                Masters Degree or Higher
              </Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              checked={checkBoxs.bachelor}
              onChange={(e) => {
                setcheckBoxs((prev) => {
                  return { ...prev, bachelor: e.target.checked };
                });
              }}
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading
                color={checkBoxs.bachelor ? "blue.500" : "black.200"}
                variant={"p4"}
              >
                Bachelor’s Degree or Higher
              </Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              checked={checkBoxs.associated}
              onChange={(e) => {
                setcheckBoxs((prev) => {
                  return { ...prev, associated: e.target.checked };
                });
              }}
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading
                color={checkBoxs.associated ? "blue.500" : "black.200"}
                variant={"p4"}
              >
                Associate Degree or Higher
              </Heading>
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
              checked={checkBoxs.pom}
              onChange={(e) => {
                setcheckBoxs((prev) => {
                  return { ...prev, pom: e.target.checked };
                });
              }}
              borderColor={"black.200"}
              borderRadius={"8px"}
              sx={globalStyles.checkBoxStyle}
              size="md"
              rounded={"sm"}
              colorScheme="blue"
            >
              <Heading
                color={checkBoxs.pom ? "blue.500" : "black.200"}
                variant={"p4"}
              >
                Project Management
              </Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              checked={checkBoxs.sa}
              onChange={(e) => {
                setcheckBoxs((prev) => {
                  return { ...prev, sa: e.target.checked };
                });
              }}
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading
                color={checkBoxs.sa ? "blue.500" : "black.200"}
                variant={"p4"}
              >
                System Architecture
              </Heading>
            </Checkbox>
          </Box>
          <Box mt={"10px"}>
            <Checkbox
              checked={checkBoxs.pd}
              onChange={(e) => {
                setcheckBoxs((prev) => {
                  return { ...prev, pd: e.target.checked };
                });
              }}
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading
                color={checkBoxs.pd ? "blue.500" : "black.200"}
                variant={"p4"}
              >
                Product Design
              </Heading>
            </Checkbox>
          </Box>

          <Box mt={"10px"}>
            <Checkbox
              checked={checkBoxs.leadership}
              onChange={(e) => {
                setcheckBoxs((prev) => {
                  return { ...prev, leadership: e.target.checked };
                });
              }}
              sx={globalStyles.checkBoxStyle}
              borderColor={"black.200"}
              size="md"
              rounded={"md"}
              colorScheme="blue"
            >
              <Heading
                color={checkBoxs.leadership ? "blue.500" : "black.200"}
                variant={"p4"}
              >
                Leadership
              </Heading>
            </Checkbox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SortBy;
