"use client";
import { RiEyeLine } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

// Define Order type
export type Order = {
  id: string;
  customer: string;
  productName: string;
  amount: string;
  orderDate: string;
  status: "Delivered" | "Pending" | "Cancelled";
};

// Action Buttons Component
const ActionButtons = ({ orderId, onViewClick }: { orderId: string; onViewClick: () => void }) => {
  const handleDeleteClick = () => {
    console.log("Delete order:", orderId);
  };

  return (
    <div className="ml-[-25px] flex space-x-0">
      <Button
        onClick={onViewClick}
        className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
        aria-label="View order details"
      >
        <RiEyeLine size={20} className="text-white" />
      </Button>
      <Button
        onClick={handleDeleteClick}
        className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
        aria-label="Delete order"
      >
        <FiTrash2 size={20} className="text-white" />
      </Button>
    </div>
  );
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => {
      return (
        <div className="font-medium text-blue-600">{row.original.id}</div>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => {
      return row.original.customer;
    },
  },
  {
    accessorKey: "productName",
    header: "Product Name",
    cell: ({ row }) => {
      return row.original.productName;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return row.original.amount;
    },
  },
  {
    accessorKey: "orderDate",
    header: "Order Date",
    cell: ({ row }) => {
      return row.original.orderDate;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            status === "Delivered"
              ? " text-green-600"
              : status === "Cancelled"
              ? " text-red-600"
              : " text-yellow-600"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      return <ActionButtons orderId={row.original.id} onViewClick={() => {}} />;
    },
  },
];
