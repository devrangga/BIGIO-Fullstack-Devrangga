"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Table from "./_components/Table";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Story } from "@/app/lib/constant";
import { capitalizeFirstLetter } from "@/lib/helpers";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string(),
  writers: z.string(),
  synopsis: z.string(),
  category: z.enum(["Financial", "Technology", "Health"]),
  status: z.enum(["Publish", "Draft"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function Page() {
  const [data, setData] = useState<Story | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const action: string | null = searchParams.get("action");

  const { register, handleSubmit, setValue, reset } = useForm<FormValues>({
    defaultValues: {
      title: "",
      writers: "",
      synopsis: "",
      category: "",
      status: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = searchParams.get("id");
        const response = await fetch(`/api/story/${params}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });

        const res = await response.json();
        setData(res.story);

        if (res.story) {
          reset({
            title: res.story.title,
            writers: res.story.writers,
            synopsis: res.story.synopsis,
            category: res.story.category,
            status: res.story.status,
          });
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (action !== "add") {
      fetchData();
    }
  }, [searchParams]);

  const isDetailMode = action === "detail";
  const isAddMode = action === "add";

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Form submitted successfully:", data);
        router.back();
        router.refresh();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <AlertDialog>
        <h1 className="inline-flex items-center gap-2">
          <span
            className="text-gray-300 hover:cursor-pointer hover:text-gray-400"
            onClick={() => router.back()}
          >
            Stories{" "}
          </span>
          <span>
            <i className="ri-arrow-right-s-line"></i>
          </span>{" "}
          <span className="text-cyan font-bold">
            {capitalizeFirstLetter(action)} Stories
          </span>
        </h1>

        <div className="flex flex-col gap-2">
          <h1 className="text-gray-900 text-2xl">
            {capitalizeFirstLetter(action)} Stories
          </h1>
          <Button
            onClick={() => router.back()}
            className="w-fit flex flex-row gap-4 rounded-full bg-gray-100 text-gray-900 font-bold px-6 hover:bg-gray-300 hover:text-gray-900"
          >
            <i className="ri-arrow-left-line"></i>
            Back
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <main className="px-8 py-6 shadow-lg rounded-3xl flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-gray-900">Title</h1>
                <Input
                  {...register("title")}
                  type="text"
                  placeholder="Title"
                  className="w-full"
                  disabled={isDetailMode}
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-gray-900">Writer Name</h1>
                <Input
                  {...register("writers")}
                  type="text"
                  placeholder="Writer Name"
                  className="w-full"
                  disabled={isDetailMode}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="font-bold text-gray-900">Synopsis</h1>
              <Textarea
                {...register("synopsis")}
                placeholder="Synopsis"
                className="w-full resize-none h-[150px]"
                disabled={isDetailMode}
              />
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-gray-900">Category</h1>
                <Select
                  {...register("category")}
                  defaultValue={data?.category || undefined}
                  onValueChange={(value) => setValue("category", value)}
                  disabled={isDetailMode}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Financial">Financial</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Health">Health</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-gray-900">Tag/Keywords Story</h1>
                <section className="flex items-center gap-4 h-12 w-full rounded-md border border-input bg-background px-3 py-0 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  {data?.keyword?.map((item, index) => (
                    <Button
                      key={index}
                      className="flex flex-row gap-2 rounded-full bg-orange px-4 py-2 h-fit text-sm text-white"
                      disabled={isDetailMode}
                    >
                      <i className="ri-close-fill"></i>
                      {item}
                    </Button>
                  ))}
                </section>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-gray-900">Cover Image</h1>
                <Input
                  name="image"
                  type="file"
                  className="w-full"
                  disabled={isDetailMode}
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-gray-900">Status</h1>
                <Select
                  {...register("status")}
                  defaultValue={data?.status || undefined}
                  onValueChange={(value) => setValue("status", value)}
                  disabled={isDetailMode}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Publish">Publish</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {!isDetailMode && !isAddMode && (
              <div className="flex justify-end w-full">
                <Button
                  onClick={() =>
                    router.replace(
                      `/story-management/add-stories/add-chapter?action=add&title=${data?.title}`
                    )
                  }
                  className="flex flex-row gap-4 rounded-full bg-orange hover:bg-orange/75 p-6"
                >
                  <p>+</p>
                  <h3>Add Chapter</h3>
                </Button>
              </div>
            )}

            <Table chapter={data?.chapter || []} />
          </main>

          {!isDetailMode && (
            <div className="flex flex-row gap-2 justify-end mt-8">
              <AlertDialogTrigger asChild>
                <Button className="rounded-full bg-white border-[1px] text-gray-900 font-bold p-6 hover:text-gray-900 hover:border-gray-700 hover:bg-white">
                  Cancel
                </Button>
              </AlertDialogTrigger>
              <Button
                type="submit"
                className="bg-orange hover:bg-orange/75 rounded-full font-bold p-6"
              >
                Save
              </Button>
            </div>
          )}
        </form>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel adding the story without saving
              the data?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => router.replace("/story-management")}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
