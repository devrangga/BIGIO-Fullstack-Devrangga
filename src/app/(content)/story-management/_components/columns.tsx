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
import { useRouter } from "next/navigation";
import { Story } from "@/app/lib/constant";

export const columns: ColumnDef<Story>[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => {
      return row.index + 1;
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "writers",
    header: "Writers",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "keyword",
    header: "Keyword",
    cell: ({ row }) => {
      const keywords = row.getValue<string[]>("keyword");
      return (
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full"
            >
              {keyword}
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const router = useRouter();

      const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        router.push(
          `/story-management/add-stories?action=edit&id=${row.original.id}`
        );
      };

      const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        console.log("Delete action triggered for:", row.original.id);
      };

      return (
        <DropdownMenu>
          <div className="flex flex-row gap-4 items-center justify-between pr-8">
            <div
              className={`px-4 py-2 w-fit rounded-full ${
                row.getValue("status") === "Draft"
                  ? "text-yellow-600 bg-yellow-200"
                  : "text-green-600 bg-green-200"
              }`}
            >
              {row.getValue("status")}
            </div>

            <DropdownMenuTrigger className="flex flex-row gap-1 ">
              {Array.from({ length: 3 }).map((item, index) => (
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
              <DropdownMenuItem
                onClick={handleEdit}
                className="text-gray-900 font-semibold inline-flex items-center justify-end gap-2 hover:cursor-pointer hover:bg-yellow-100"
              >
                Edit <i className="ri-edit-2-fill"></i>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleDelete}
                className="text-gray-900 font-semibold inline-flex items-center justify-end gap-2 hover:cursor-pointer hover:bg-red-100"
              >
                Delete <i className="ri-delete-bin-7-fill"></i>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
