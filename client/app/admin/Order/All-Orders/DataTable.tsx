"use client";

import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
}

export function DataTable<TData>({ columns, data }: DataTableProps<TData>) {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 8, // Adjust number of rows per page
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
    state: { pagination },
    onPaginationChange: setPagination,
  });

  const totalPages = table.getPageCount();
  const currentPage = pagination.pageIndex;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 6) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
    } else {
      pages.push(0); // First page
      if (currentPage > 2) pages.push("...");
      for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages - 2, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages - 1); // Last page
    }
    return pages;
  };

  return (
    <div className="rounded-md border-none">
      {/* Scrollable Table for Mobile and Tablet */}
      <div className="overflow-auto">
        <Table className="w-full min-w-[700px] md:min-w-[850px] lg:min-w-[900px] border-none table-fixed">
          <TableHeader className="border-none bg-[#0B1739] [&:hover]:bg-[#0B1739] [&_*]:hover:bg-transparent">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none">
                {headerGroup.headers.map((header: any, index: number) => (
                  <TableHead 
                    key={header.id} 
                    className={`border-none py-3 sm:py-4 md:py-5 lg:py-6 px-2 sm:px-3 md:px-4 lg:px-5 text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] whitespace-nowrap truncate text-white font-medium`}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="border-none">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, rowIndex) => (
                <TableRow key={row.id} className="border-none">
                  {row.getVisibleCells().map((cell, cellIndex) => (
                    <TableCell
                      key={cell.id}
                      className={`border-none py-2 sm:py-2.5 md:py-3 lg:py-4 px-2 sm:px-3 md:px-4 lg:px-5 text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] truncate text-white ${
                        rowIndex % 2 === 0 ? "bg-[#081028]" : "bg-[#0B1739]"
                      }`}
                      title={String(flexRender(cell.column.columnDef.cell, cell.getContext()))} // Tooltip for overflow text
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center border-none py-6 md:py-8 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-white">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-3 sm:mt-4 md:mt-5 flex justify-end">
        <div className="flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5">
          <button
            className="rounded-full w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-[10px] xs:text-[11px] sm:text-[11px] md:text-[12px] lg:text-[14px] flex items-center justify-center text-white transition bg-[#31406D] border border-[#EEEEEE] disabled:opacity-50"
            onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex - 1 }))}
            disabled={currentPage === 0}
          >
            {"<"}
          </button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center text-gray-500 text-[10px] xs:text-[11px] sm:text-[11px] md:text-[12px] lg:text-[14px]">
                ...
              </span>
            ) : (
              <button
                key={page}
                className={`rounded-full w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-[10px] xs:text-[11px] sm:text-[11px] md:text-[12px] lg:text-[14px] flex items-center justify-center transition ${
                  page === currentPage
                    ? "bg-[#FFFFFF] text-black"
                    : "bg-[#0B1739] text-white"
                }`}
                onClick={() => setPagination((prev) => ({ ...prev, pageIndex: page as number }))}>
                {typeof page === "number" ? page + 1 : page}
              </button>
            )
          )}

          <button
            className="rounded-full w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-[10px] xs:text-[11px] sm:text-[11px] md:text-[12px] lg:text-[14px] flex items-center justify-center text-white transition bg-[#31406D] border border-[#EEEEEE] disabled:opacity-50"
            onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }))}
            disabled={currentPage === totalPages - 1}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}