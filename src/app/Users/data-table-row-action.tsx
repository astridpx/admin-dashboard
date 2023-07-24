"use client";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Row } from "@tanstack/react-table";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import editUserStore from "@/lib/zustand/UserPage-store/Edit-User-Data-Store";
import { useMutation, useQueryClient } from "react-query";
import { DeleteUser } from "./APIs/api";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IUser } from "../../../typings";

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
import { useState } from "react";
interface DataTableRowActionsProps<TData> {
  row: Row<TData & any>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const notify = () => toast.loading("Loading...");
  const { setEditData, setShowEditModal, showEditUserModal, setEditUserId } =
    editUserStore();

  const deleteUserMutation = useMutation({
    mutationFn: () => DeleteUser(userId),
    onSuccess: async (data: any) => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.dismiss();
      setIsOpen(false);
      toast.success(data?.message);
    },
    onError: (error: any) => {
      toast.dismiss();
      toast.error(error?.response?.data?.message);
    },
  });

  if (deleteUserMutation.isLoading) {
    notify();
  }

  const handleSubmit = async (e: any) => {
    deleteUserMutation.mutate();
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={deleteUserMutation?.isLoading}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={deleteUserMutation?.isLoading}
            onClick={(e) => handleSubmit(e)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>

      {/* DROPDOWN */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <HiOutlineDotsHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            onClick={async () => {
              setEditData(row?.original);
              setEditUserId(row?.original?._id);
              setShowEditModal(!showEditUserModal);
            }}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={"Label"}>
                <DropdownMenuRadioItem key={1} value={""}>
                  Value 1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem key={2} value={""}>
                  Value 2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem key={3} value={""}>
                  Value 3
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <AlertDialogTrigger
            className="w-full"
            onClick={() => {
              setUserId(row?.original?._id);
              setIsOpen(true);
            }}
          >
            <DropdownMenuItem>Delete</DropdownMenuItem>
            {/* <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut> */}
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
    </AlertDialog>
  );
}
