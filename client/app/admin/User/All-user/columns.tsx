"use client";
import { RiEyeLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define User type
type User = {
  id: string;
  userImage: string;
  userName: string;
  email: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "Image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <img 
          src={row.original.userImage} 
          alt={row.original.userName}
          className="w-10 h-10 rounded-full object-cover"
        />
      );
    },
  },
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => {
      return row.original.userName;
    },
  },
  {
    accessorKey: "Email",
    header: "Email",
    cell: ({ row }) => {
      return row.original.email;
    },
  },
  {
    accessorKey: "Role",
    header: "Role",
    cell: ({ row }) => {
      return row.original.role;
    },
  },
  
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const router = useRouter();

     

      return (
        <div className="ml-[-25px] flex space-x-0">
          <Button
            onClick={() => router.push(`/admin/User/All-user/view-user/${row.original.id}`)}
            className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
            aria-label="View user details"
          >
            <RiEyeLine size={20} className="text-white" />
          </Button>
          <Button
            onClick={() => router.push(`/admin/User/All-user/edit-user/${row.original.id}`)}
            className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
            aria-label="Edit user details"
          >
            <FiEdit size={20} className="text-white" />
          </Button>
          <Button
           
          
            className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
            aria-label="Delete customer"
          >
            <FiTrash2 size={20} className="text-white" />
          </Button>
        </div>
      );
    },
  },
];
