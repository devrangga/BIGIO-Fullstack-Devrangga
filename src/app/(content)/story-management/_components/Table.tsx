import { Story } from "@/app/lib/constant";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function Table(story: Story[]) {
  return (
    <div className="mx-auto py-4">
      <DataTable columns={columns} data={story.story} />
    </div>
  );
}
