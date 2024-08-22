"use client";
import React from "react";
import "remixicon/fonts/remixicon.css";
import { sideBar } from "../lib/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <section className="shadow-2xl bg-white">
      <div className="flex flex-row justify-center text-4xl gap-4 py-12 ">
        <i className="ri-quill-pen-fill text-cyan"></i>
        <h1 className="text-cyan font-black">STORYKU</h1>
      </div>

      <div className="flex flex-col">
        {sideBar.map((item, index) => {
          const isActive = item.href.includes(pathname);

          return (
            <Link
              href={item.href[0]}
              key={index}
              className={`flex flex-row gap-4 items-center w-full py-4 px-8 ${
                isActive ? "text-white bg-cyan" : "text-gray-600 bg-white"
              }`}
            >
              <i className={`${item.icon} text-2xl`}></i>
              <h3 className="text-lg font-bold">{item.label}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
