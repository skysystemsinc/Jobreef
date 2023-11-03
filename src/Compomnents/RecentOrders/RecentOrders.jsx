import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import Popovers from "../PaginatedTable/Popovers";

const RecentOrders = () => {
  const columns = [
    {
      InvoiceNumber: "Invoice Number",
      date: "Date",
      total: "Total",
      status: "Status",
      actions: "Actions",
    },
  ];
  const keys = ["InvoiceNumber", "date", "total", "status", "actions"];
  const actionList = ["Download", "Print"];

  const data = [
    {
      InvoiceNumber: "1234567890",
      date: "30/10/2023",
      total: "$299.00",
      status: "$299.00",
      actions: <Popovers actionList={actionList} />,
    },
    {
      InvoiceNumber: "1234567890",
      date: "30/10/2023",
      total: "$299.00",
      status: "$299.00",
      actions: <Popovers actionList={actionList} />,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of rows per page
  const totalPages = Math.ceil(data.length / pageSize);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <PaginatedTable
    showExteraHeader
      trStyle={{ position: "relative !important", top: "-41px !important" }}
      
      keys={keys}
      totalPages={totalPages}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      columns={columns}
      data={data}
    />
  );
};

export default RecentOrders;
