// Importing necessary modules
import {
  Box,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Popovers from "./Popovers";
import moment from "moment";
import arrow_right from "@/assets/Images/arrow-right.svg";
import arrow_left from "@/assets/Images/arrow-left.svg";


function ReactTable({ data ,columns}) {
  const actionList = ["Edit", "Pause", "Close job"];


  // Using the useReactTable hook
  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

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
        <Table variant="custome-table">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={columns.length} className="h-24 text-center">
                  No results.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <Box
        px={"20px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        // mt={"20px"}
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
          {`Showing ${
            table.getState().pagination.pageIndex + 1
          } to ${table.getPageCount()} of ${
            table.getFilteredRowModel().rows.length
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
            // _disabled={currentPage == totalPages}
            onClick={() => table.previousPage()}
            cursor={"pointer"}
            width={{ md: "22px", base: "16px" }}
            src={arrow_right.src}
          />

          {/* {Array.from({ length: totalPages }, (_, index) => index + 1).map(
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
          )} */}

          <Image
            // _disabled={currentPage == totalPages}
            onClick={() => table.nextPage()}
            cursor={"pointer"}
            width={{ md: "22px", base: "16px" }}
            src={arrow_left.src}
          />
        </Box>
      </Box>
    </Box>
  );
}

// Exporting the DataTable component
export default ReactTable;
