"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Chapter } from "@/app/lib/constant";

export const columns: ColumnDef<Chapter>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <div className="flex justify-between items-center">
            <h1>{row.getValue("lastUpdated")}</h1>
            <DropdownMenuTrigger className="flex flex-row gap-1 ">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[5px] h-[5px] rounded-full bg-gray-950"
                ></div>
              ))}
            </DropdownMenuTrigger>
          </div>

          <DropdownMenuContent>
            <DropdownMenuLabel className="text-end">Action</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col gap-1">
              <DropdownMenuItem className="text-gray-900 font-semibold inline-flex items-center justify-end gap-2 hover:cursor-pointer hover:bg-yellow-100">
                Edit <i className="ri-edit-2-fill"></i>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-900 font-semibold inline-flex items-center justify-end gap-2 hover:cursor-pointer hover:bg-red-100">
                Delete <i className="ri-delete-bin-7-fill"></i>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
