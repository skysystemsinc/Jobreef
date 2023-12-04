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
import React, { useEffect, useState } from "react";
import globalStyles from "@/styles/globalStyles";
import arrow_right from "@/assets/Images/arrow-right.svg";
import arrow_left from "@/assets/Images/arrow-left.svg";
import profile from "@/assets/Images/profile.svg";
const PaginatedTable = ({
  columns,
  totalPages,
  data,
  trStyle,
  keys,
  pageSize,
  currentPage,
  onPageChange,
  showExtraHeader,
}) => {
  const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = currentPage * pageSize;
  const [sorting, setSorting] = useState({ key: "Candidates", ascending: true });
  const endIndex = Math.min(currentPage * pageSize, data.length);

  const paginatedData = data.slice(startIndex, endIndex);
  const [tableData, settableData] = useState(paginatedData);
  const activeStyle = {
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "blue.500",
    color: "blue.500",
  };
  useEffect(() => {
    const tableCopy = [...tableData];

    const sortedTable = tableCopy.sort((a, b) => {
      return a[sorting.key]?.localeCompare(b[sorting.key]);
    });

    settableData(sorting.ascending ? sortedTable : sortedTable.reverse());
  }, [sorting]);

  function applySorting(key, ascending) {
    setSorting({ key: key, ascending: ascending });
  }
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
        bg={"white.100"}
        // mb={"30px"}
      >
        {showExtraHeader?
        <Box bg={"blue.500"} p={"20px 15px 10px"} >
          <Heading variant={'p7'} color={"white.100"} fontWeight={400} > Recent Orders</Heading>
        </Box>
        :null
        }
        <Table variant="custome-table">
          <Thead>
            {/* {showExtraHeader ? (
              <Tr>
                <Th fontWeight={700} colspan={"100%"}>
                  Recent Orders
                </Th>
              </Tr>
            ) : null} */}
            {columns.map((item, ind) => {
              return (
                <Tr sx={trStyle} key={ind}>
                  {keys.map((key, ind) => (
                    <Th key={ind} className="nintoFont">
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        {item[key]}
                        <Box className="vertical-divider"></Box>
                        {item[key] == "Candidates" ? (
                          <>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap={"7px"}
                            >
                              {sorting.ascending ? (
                                <Image
                                  onClick={() => applySorting(key, false)}
                                  cursor={"pointer"}
                                  src={bottomTringle.src}
                                  width={"13px"}
                                />
                              ) : (
                                <Image
                                  onClick={() => applySorting(key, true)}
                                  cursor={"pointer"}
                                  src={topTringle.src}
                                  width={"13px"}
                                />
                              )}
                            </Box>
                          </>
                        ) : null}
                      </Box>
                    </Th>
                  ))}
                </Tr>
              );
            })}
          </Thead>
          <Tbody>
            {tableData.map((item, ind) => {
              return (
                <Tr key={ind}>
                  {keys.map((key, ind) => (
                    <Td key={ind} className="nintoFont">
                      {item[key]?.image ? (
                        <Box display={"flex"} alignItems={"center"} gap="10px">
                          <Image
                            src={item[key].image}
                            width={"35px"}
                            height={"35px"}
                            objectFit={"cover"}
                            borderRadius={"100px"}
                          />
                          <Heading color={"blue.500"} variant={"p1"}>
                            {item[key].name}
                          </Heading>
                        </Box>
                      ) : (
                        item[key]
                      )}
                    </Td>
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
        mt={"20px"}
        mb={"17px"}
        pt={"15px"}
        flexWrap={"wrap"}
        gap={{ sm: "0px", base: "20px" }}
        borderTop={"1px solid "}
        bg={"white.100"}
        borderColor={"gray.500"}
        // color={"blue.500"}
      >
        <Heading color={"blue.500"} variant={"p4"}>
          {`Showing ${currentPage} to ${endIndex} of ${
            data?.length ?? "0"
          } Entries`}
        </Heading>
        <Box
          flexWrap={"wrap"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          width={{ md: "max-content", base: "100%" }}
          gap={{ md: "10px", base: "3px" }}
        >
          <Image
            _disabled={currentPage == totalPages}
            onClick={() => onPageChange(currentPage - 1)}
            cursor={"pointer"}
            width={{ md: "22px", base: "16px" }}
            src={arrow_right.src}
          />

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page, index) => {
              return (
                <Button
                  key={index}
                  disabled={currentPage == totalPages}
                  onClick={() => onPageChange(page)}
                  variant={"square-btn"}
                  border={"2px solid "}
                  borderColor={"blue.500"}
                  color={page === index ? "red" : "#fff"}
                  bg="blue.500"
                  sx={currentPage === index + 1 ? activeStyle : {}}
                >
                  {page}
                </Button>
              );
            }
          )}

          <Image
            _disabled={currentPage == totalPages}
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
