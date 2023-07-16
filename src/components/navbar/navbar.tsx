"use client";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { Toggle } from "@/components/ui/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { signOut } from "next-auth/react";
import useSidebarStore from "@/lib/zustand/sidebar-store/sidebar-store";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function Navbar() {
  const { toggleSidebar, isExpand } = useSidebarStore();

  return (
    <>
      <nav className="h-[10vh] w-full px-4 bg-white flex justify-between sticky top-0 border-b border-gray-200 ">
        <div className="flex items-center">
          <Toggle onClick={() => toggleSidebar(!isExpand)}>
            <HiOutlineMenuAlt2
              size={26}
              className="cursor-pointer text-gray-500"
            />
          </Toggle>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-0 focus:outline-none">
                <Badge variant="secondary" className="rounded-3xl">
                  <IoMdNotificationsOutline
                    size={23}
                    className="text-gray-500 cursor-pointer"
                  />
                </Badge>
              </DropdownMenuTrigger>

              {/* NOTIFICATION DROPDOWN */}
              <DropdownMenuContent className="h-72 w-56" align="end" forceMount>
                <DropdownMenuLabel className="py-4">
                  <h4 className="text-sm font-medium leading-none">
                    Notifications
                  </h4>
                </DropdownMenuLabel>
                <Separator />
                <ScrollArea className="h-full w-full">
                  <div className="px-4">
                    {tags.map((tag) => (
                      <>
                        <div className="text-sm py-3 text-gray-600 " key={tag}>
                          {tag}
                        </div>
                        <Separator />
                      </>
                    ))}
                  </div>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-0 focus:outline-none">
              <div className="h-[10vh] flex items-center px-2 space-x-4 focus:outline-0 focus:outline-none border-none cursor-pointer">
                <div className="flex flex-col justify-end text-right leading-6 ">
                  <h1 className="text-gray-700">Joe Biden</h1>
                  <p className="text-xs text-gray-600">Admin</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <IoIosArrowDown size={21} className="text-gray-400" />
                </div>
              </div>
            </DropdownMenuTrigger>

            {/* //? DROPDOWN MENU ITEMS */}
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">shadcn</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    m@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                <DropdownMenuItem>New Team</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                Log out
                {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}
