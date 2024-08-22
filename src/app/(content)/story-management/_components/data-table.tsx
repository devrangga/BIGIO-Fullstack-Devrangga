"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Story } from "@/app/lib/constant";
import { useRouter } from "next/navigation";

interface DataTableProps {
  columns: ColumnDef<Story>[];
  data: Story[];
}

export function DataTable({ columns, data }: DataTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const currentPageIndex = table.getState().pagination.pageIndex;
  const currentPageSize = table.getState().pagination.pageSize;
  const currentRowCount = table.getRowModel().rows.length;
  const accumulatedRowCount =
    currentPageIndex * currentPageSize + currentRowCount;
  const isLastPage = currentPageIndex >= table.getPageCount() - 1;
  const router = useRouter();

  return (
    <div>
      <Table className="w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="grid grid-cols-[1fr,3fr,1.25fr,1.25fr,2.5fr,2fr]"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="font-extrabold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                onClick={() => {
                  router.push(
                    `/story-management/add-stories?action=detail&title=${row.original.title}`
                  );
                }}
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="grid grid-cols-[1fr,3fr,1.25fr,1.25fr,2.5fr,2fr]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="hover:cursor-pointer">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="mt-16 flex flex-row justify-between">
        <h1>
          Menampilkan {accumulatedRowCount} dari{" "}
          {table.getFilteredRowModel().rows.length} baris
        </h1>

        <div className="flex flex-row gap-2">
          <button
            className={` w-[40px] h-[40px] rounded-xl flex items-center justify-center bg-orange text-white hover:cursor-pointer ${
              currentPageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => table.previousPage()}
            disabled={currentPageIndex === 0}
          >
            <i className={`ri-arrow-left-line`}></i>
          </button>

          <button className="w-[40px] h-[40px] rounded-xl flex items-center justify-center font-black bg-orange text-white">
            {currentPageIndex + 1}
          </button>

          <button
            className={` w-[40px] h-[40px] rounded-xl flex items-center justify-center bg-orange text-white hover:cursor-pointer ${
              isLastPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLastPage}
            onClick={() => table.nextPage()}
          >
            <i className={`ri-arrow-right-line`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
