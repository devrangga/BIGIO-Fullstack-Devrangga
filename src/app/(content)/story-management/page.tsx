"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";
import Table from "./_components/Table";
import Link from "next/link";
import { story as initialStories, Story } from "@/app/lib/constant";

const StoryManagement = () => {
  const [data, setData] = useState<Story[]>(initialStories);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filteredData = initialStories.filter(
      (story) =>
        story.title.toLowerCase().includes(searchValue) ||
        story.writers.toLowerCase().includes(searchValue)
    );

    setData(filteredData);
  };

  const applyFilter = () => {
    const filteredData = initialStories
      .filter(
        (story) =>
          story.title.toLowerCase().includes(searchTerm) ||
          story.writers.toLowerCase().includes(searchTerm)
      )
      .filter(
        (story) =>
          (categoryFilter ? story.category === categoryFilter : true) &&
          (statusFilter ? story.status === statusFilter : true)
      );

    setData(filteredData);
  };

  const resetFilter = () => {
    setCategoryFilter("");
    setStatusFilter("");
    setSearchTerm("");
    setData(initialStories);
  };

  return (
    <section className="flex flex-col gap-4">
      <Dialog>
        <h1>Stories</h1>

        <div className="px-8 py-6 shadow-lg rounded-3xl">
          <div className="flex flex-row justify-between">
            <Input
              type="text"
              placeholder="Search by Writers/Title"
              className="w-[50%] py-6"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="flex flex-row items-center gap-4">
              <DialogTrigger asChild>
                <button className="flex items-center justify-center rounded-full border-[1px] border-gray-300 shadow-md h-[48px] w-[48px]">
                  <i className="ri-filter-2-line text-2xl"></i>
                </button>
              </DialogTrigger>
              <Separator orientation="vertical" />
              <Link href={"/story-management/add-stories?action=add"}>
                <Button className="flex flex-row gap-2 bg-orange hover:bg-orange/75 rounded-full text-lg p-7">
                  <h3>+</h3>
                  <h1>Add Story</h1>
                </Button>
              </Link>
            </div>
          </div>

          <Table story={data} />
        </div>

        <DialogContent className="w-[425px] gap-8">
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-2">
            <p className="font-extrabold">Category</p>
            <Select onValueChange={setCategoryFilter} value={categoryFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Financial">Financial</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-extrabold">Status</p>
            <Select onValueChange={setStatusFilter} value={statusFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Publish">Publish</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="flex flex-row justify-between items-center ">
            <Button
              type="reset"
              className="rounded-full bg-white border-[1px] border-gray-300 text-gray-950 p-4"
              onClick={resetFilter}
            >
              Reset
            </Button>
            <div className="flex flex-row gap-2">
              <Button
                type="reset"
                className="rounded-full bg-white border-[1px] border-gray-300 text-gray-950 p-4"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-full bg-orange p-4"
                onClick={applyFilter}
              >
                Filter
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default StoryManagement;
