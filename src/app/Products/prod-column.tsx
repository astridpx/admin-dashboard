"use client";

import { ColumnDef } from "@tanstack/react-table";
import { IProducts } from "../../../typings";

export const productColumns: ColumnDef<IProducts>[] = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Code",
    accessorKey: "prod_code",
  },
  {
    header: "Product",
    accessorKey: "prod_name",
  },
  {
    header: "Stock",
    accessorKey: "stock",
  },
  {
    header: "Import",
    accessorKey: "prod_import",
  },
];
