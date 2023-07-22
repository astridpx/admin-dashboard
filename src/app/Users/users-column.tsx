"use client";

import { ColumnDef } from "@tanstack/react-table";
import { IUser } from "../../../typings";
import { DataTableRowActions } from "./data-table-row-action";

// ? @what this where the table head define. This column will pass on DataTable component
// ? @desc This column define is a users colemn for user pages
// ? @desc The header name is will be the name that shows on the table
// ? @desc the accessorkey is the value that will display the assigned value must be match in the data that will display

export const userColumns: ColumnDef<IUser>[] = [
  // {
  //   header: "Id",
  //   accessorKey: "_id",
  // },
  {
    header: "First Name",
    accessorKey: "first_name",
  },
  {
    header: "Last Name",
    accessorKey: "last_name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    id: "action",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
