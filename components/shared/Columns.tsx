"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { todoType } from "@/types/todoType";
import ChangeTodo from "./ChangeTodo";
import DeleteTodo from "./DeleteTodo";

export const columns: ColumnDef<todoType>[] = [
  {
    accessorKey: "isCompleted",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className=""
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <>
          <ChangeTodo todo={row.original} />
        </>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className=""
        >
          Task
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <>
          {/* <EditTodo todo={row.original} /> */}
          {row.original.title}
        </>
      );
    },
  },

  {
    accessorKey: "createdAt",
    header: () => <div className="text-right">Date</div>,
    cell: ({ row }) => {
      const unformatedDate = row.getValue("createdAt");
      let date = new Date(unformatedDate as any);
      let month = (date.getMonth() + 1).toString();
      let day = date.getDate().toString();
      let year = date.getFullYear().toString();

      month = month.length < 2 ? "0" + month : month;
      day = day.length < 2 ? "0" + day : day;

      return (
        <div className="text-right font-medium">
          {month + "/" + day + "/" + year}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2  justify-around">
          <DeleteTodo todo={row.original} />
        </div>
      );
    },
  },
  // ...
];
