"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sidebarItems } from "@/utils/sidebar-data/sidebar-data";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Water-Drop.svg";
import useSidebarStore from "@/lib/zustand/sidebar-store/sidebar-store";

export default function Sidebar() {
  const { isExpand } = useSidebarStore();
  return (
    <>
      {/* //? IT WILL BE 23rem for full width of sidebar */}
      <aside
        className={`h-screen bg-gray-100 ${
          isExpand ? "w-[23rem]" : "w-[5rem]"
        }`}
      >
        <div className="h-[10vh] p-4  flex items-center space-x-4">
          {/* // ? WITdth WILL BE w-14 & h-14 for full width of logo if the sidebar is in fullwidth */}
          <Image
            src={Logo}
            alt="Logo Image"
            className={`${
              isExpand ? "h-14 w-14" : "h-10 w-10"
            } ml-2 cursor-pointer`}
          />
          <h1 className="text-lg font-bold text-gray-950">Water Station</h1>
        </div>

        {/*  THE HEIGHT WILL BE 90vh if the sidebar is in full width */}
        <div className="h-[90vh] font-medium">
          <ScrollArea className="h-full w-full px-4 py-4">
            {sidebarItems.map((items) => {
              return (
                <>
                  <h1
                    className={`text-base text-gray-500 ml-3 my-2  ${
                      !isExpand && "hidden"
                    }`}
                  >
                    {items.title}
                  </h1>

                  {/* Items */}
                  {items.items.map((list) => {
                    return (
                      <>
                        <Link
                          key={list.path}
                          href={list.path}
                          className="flex items-center px-3 py-3 cursor-pointer rounded hover:bg-slate-200"
                        >
                          {React.createElement(list.icon, {
                            size: 22,
                            className: "mr-4 text-gray-500",
                          })}
                          {/* //? IT WILL BE HIDDEn IF THE SIDEBAR IS MINIMIZE */}
                          <h1
                            className={`text-base text-gray-500 ${
                              !isExpand && "hidden"
                            }`}
                          >
                            {list.name}
                          </h1>
                        </Link>
                      </>
                    );
                  })}
                </>
              );
            })}
          </ScrollArea>
        </div>
      </aside>
    </>
  );
}
