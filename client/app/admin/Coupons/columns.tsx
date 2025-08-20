"use client";
import { RiEyeLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EditCouponModal from "./EditCouponModal";
import VeiwCouponModal from "./VeiwCouponModal";

// Define Product type
type Product = {
  id: string;
  discount: string;
  couponTitle: string;
  code: string;
  productType: string;
  startDate: string;
  status: string;
};

// Action Buttons Component
const ActionButtons = ({ productId }: { productId: string }) => {
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleViewClick = () => {
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };

  return (
    <>
      <div className="ml-[-25px] flex space-x-0">
        <Button
          onClick={handleViewClick}
          className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
          aria-label="View product details"
        >
          <RiEyeLine size={20} className="text-white" />
        </Button>
        <Button
          onClick={handleEditClick}
          className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
          aria-label="Edit product details"
        >
          <FiEdit size={20} className="text-white" />
        </Button>
        <Button
          className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
          aria-label="Delete product"
        >
          <FiTrash2 size={20} className="text-white" />
        </Button>
      </div>
      
      {/* Edit Coupon Modal */}
      <EditCouponModal 
        isOpen={isEditModalOpen} 
        onClose={handleCloseEditModal} 
      />

      {/* View Coupon Modal */}
      <VeiwCouponModal 
        isOpen={isViewModalOpen} 
        onClose={handleCloseViewModal} 
      />
    </>
  );
};

export const columns: ColumnDef<Product>[] = [
  
  {
    accessorKey: "Discount",
    header: "Discount",
    cell: ({ row }) => {
      return row.original.discount;
    },
  },
  {
    accessorKey: "Coupon title",
    header: "Coupon title",
    cell: ({ row }) => {
      const couponTitle = row.original.couponTitle;
      return (
        <span className={couponTitle === "Out of stock" ? "text-red-500" : ""}>
          {couponTitle}
        </span>
      );
    },
  },
  {
    accessorKey: "code",
    header: "code",
    cell: ({ row }) => {
      return row.original.code;
    },
  },
  {
    accessorKey: "Product Type",
    header: "Product Type",
    cell: ({ row }) => {
      return row.original.productType;
    },
  },
  {
    accessorKey: "Start Date",
    header: "Start Date",
    cell: ({ row }) => {
      return row.original.startDate;
    },
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          status === "Active" 
            ? " text-[#00FF75]" 
            : " text-[#FF0000]"
        }`}>
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      return <ActionButtons productId={row.original.id} />;
    },
  },
];
