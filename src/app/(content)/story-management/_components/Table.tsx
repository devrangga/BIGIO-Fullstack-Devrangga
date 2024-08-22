import { story } from "@/app/lib/constant";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function Table() {
  return (
    <div className="mx-auto py-4">
      <DataTable columns={columns} data={story} />
    </div>
  );
}
