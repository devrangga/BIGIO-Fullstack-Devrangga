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
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { story, Story } from "@/app/lib/constant";
import { capitalizeFirstLetter } from "@/lib/helpers";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function Page() {
  const [data, setData] = useState<Story | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const action: string | null = searchParams.get("action");

  useEffect(() => {
    const res = story.find(
      (item: Story) => item?.chapter[0]?.title === searchParams.get("title")
    );
    setData(res || null);
  }, [searchParams]);

  const isDetailMode = action === "detail";
  const isEditMode = action === "edit";

  const [content, setContent] = useState<string>("");
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };
  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
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
          <span
            className="text-gray-300 hover:cursor-pointer hover:text-gray-400"
            onClick={() =>
              router.replace(
                `/story-management/add-stories?action=${action}&title=${data?.title}`
              )
            }
          >
            {capitalizeFirstLetter(action)} Stories
          </span>
          <span>
            <i className="ri-arrow-right-s-line"></i>
          </span>{" "}
          <span className="text-cyan font-bold">
            {capitalizeFirstLetter(action)} Chapter
          </span>
        </h1>

        <div className="flex flex-col gap-2">
          <h1 className="text-gray-900 text-2xl">
            {capitalizeFirstLetter(action)} Chapter
          </h1>
          <Button
            onClick={() =>
              router.replace(
                `/story-management/add-stories?action=${action}&title=${data?.title}`
              )
            }
            className="w-fit flex flex-row gap-4 rounded-full bg-gray-100 text-gray-900 font-bold px-6 hover:bg-gray-300 hover:text-gray-900"
          >
            <i className="ri-arrow-left-line"></i>
            Back
          </Button>
        </div>

        <main className="px-8 py-6 shadow-lg rounded-3xl h-full flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="font-bold text-gray-900">Title</h1>
            <Input
              name="title"
              type="text"
              placeholder="Title"
              className="w-full"
              value={data?.title || ""}
              onChange={(e) =>
                setData({ ...data, title: e.target.value as string })
              }
              disabled={isDetailMode}
            />
          </div>

          <div className="flex flex-col gap-2 h-full ">
            <h1 className="font-bold text-gray-900">Story</h1>

            <QuillEditor
              value={content}
              onChange={handleEditorChange}
              modules={quillModules}
              formats={quillFormats}
              className="overflow-hidden"
              style={{
                blockSize: "500px",
                wordBreak: "break-word",
                borderBlockColor: "white",
              }}
              readOnly={isDetailMode}
            />
          </div>
        </main>

        {!isDetailMode && (
          <div className="flex flex-row gap-2 ml-auto mt-8">
            <AlertDialogTrigger asChild>
              <Button className="rounded-full bg-white border-[1px] text-gray-900 font-bold p-6 hover:text-gray-900 hover:border-gray-700 hover:bg-white">
                Cancel
              </Button>
            </AlertDialogTrigger>
            <Button className="bg-orange hover:bg-orange/75 rounded-full font-bold p-6">
              Save
            </Button>
          </div>
        )}

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
              onClick={() =>
                router.replace(
                  `/story-management/add-stories?action=${action}&title=${data?.title}`
                )
              }
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
