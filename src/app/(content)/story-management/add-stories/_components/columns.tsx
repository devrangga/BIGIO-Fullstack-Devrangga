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
import { Chapter, story } from "@/app/lib/constant";
import { useRouter, useSearchParams } from "next/navigation";

export const columns: ColumnDef<Chapter>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
    cell: ({ row }) => {
      const searchParams = useSearchParams();
      const isDetail = searchParams.get("action") === "detail";

      const router = useRouter();
      const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        router.push(
          `/story-management/add-stories/add-chapter?action=edit&id=${row.original.id}`
        );
      };

      const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        console.log("Delete action triggered for:", row.original.id);
      };

      return (
        <DropdownMenu>
          <div className="flex justify-between items-center">
            <h1>{row.getValue("lastUpdated")}</h1>
            <DropdownMenuTrigger
              disabled={isDetail}
              className="flex flex-row gap-1 "
            >
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
