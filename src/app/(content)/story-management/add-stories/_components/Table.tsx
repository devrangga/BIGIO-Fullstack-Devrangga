import { Chapter } from "@/app/lib/constant";
import { columns } from "./columns";
import { DataTable } from "./data-table";

type TableProps = {
  chapter: Chapter[];
};

export default function Table({ chapter }: TableProps) {
  return (
    <div className="mx-auto w-full py-4">
      <DataTable columns={columns} data={chapter} />
    </div>
  );
}
