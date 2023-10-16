import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import bottomTringle from "@/assets/Images/bottomTringle.svg";
import topTringle from "@/assets/Images/topTringle.svg";
import React from "react";
import globalStyles from "@/styles/globalStyles";
import arrow_right from "@/assets/Images/arrow-right.svg";
import arrow_left from "@/assets/Images/arrow-left.svg";

const PaginatedTable = ({
  columns,
  data,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <Box
      boxShadow="0px 2px 15px 0px rgba(0, 0, 0, 0.06)"
      borderRadius={"6px"}
      bg={"white.100"}
      pb={"1px"}
      border={"1px solid "}
      borderColor="gray.500"

      // borderRadius={"6px"}
    >
      <TableContainer
        whiteSpace={"nowrap"}
        // overflowX={"scroll"}
        // boxShadow="0px 2px 15px 0px rgba(0, 0, 0, 0.06)"
        borderRadius={"6px"}
        // bg={"white.100"}
        // mb={"30px"}
      >
        <Table variant="custome-table">
          <Thead>
            <Tr>
              {columns.map((item, ind) => {
                return (
                  <Th key={ind} className="nintoFont">
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                      {item}
                      <Box className="vertical-divider"></Box>
                      {ind == 0 ? (
                        <>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"7px"}
                          >
                            <Image src={bottomTringle.src} width={"13px"} />
                            <Image src={topTringle.src} width={"13px"} />
                          </Box>
                        </>
                      ) : null}
                    </Box>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((item , ind) => {
              return (
                <Tr key={ind}>
                  {columns.map((key, ind) => (
                    <Td key={ind} className="nintoFont">{item[key]}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box
        px={"20px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={"40px"}
        mb={"17px"}
        pt={"15px"}
        borderTop={"1px solid "}
        borderColor={"gray.500"}
        // color={"blue.500"}
      >
        <Heading color={"blue.500"} variant={"p4"}>
          {`Showing 1 to ${pageSize} of ${totalPages} Pages`}
        </Heading>
        <Box display={"flex"} alignItems={"center"} gap={{ md: "10px" , base:"3px"}}>
          <Image
            cursor={"progress"}
            width={{ md: "22px", base: "16px" }}
            src={arrow_right.src}
          />
          <Button
            variant={"square-btn"}
            border={"2px solid "}
            borderColor={"blue.500"}
            color={"#fff"}
            bg="blue.500"
          >
            1
          </Button>
          <Button
            variant={"square-btn"}
            border={"2px solid "}
            borderColor={"blue.500"}
            color={"blue.500"}
          >
            2
          </Button>
          <Image
            onClick={() => onPageChange(currentPage + 1)}
            cursor={"pointer"}
            width={{ md: "22px", base: "16px" }}
            src={arrow_left.src}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PaginatedTable;
