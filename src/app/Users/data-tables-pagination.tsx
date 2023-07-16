"use client";

import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import {
  HiMiniChevronDoubleLeft,
  HiMiniChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

// // ? @desc INTERFACE OF PAGINATION TABLE
interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export default function DataTablePagination({
  table,
}: DataTablePaginationProps<any>) {
  return (
    <>
      <div className="w-full flex justify-end items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to first page</span>
          <HiMiniChevronDoubleLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <HiChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <HiChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to last page</span>
          <HiMiniChevronDoubleRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
