"use client"

import { useState } from "react";
import { DataTable } from "./All-Orders/DataTable"
import { Order, columns } from "./All-Orders/columns"
import { FaSearch } from "react-icons/fa";
import { RiEyeLine } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import ViewOrderDetails from "./view-order/ViewOrderDetails";

// Sample data - replace with actual data fetching logic
const data: Order[] = [
  {
    id: "#TBT2121",
    customer: "James bond",
    productName: "White T shirt",
    amount: "$12.00",
    orderDate: "25/07/23",
    status: "Delivered",
  },
  {
    id: "#TBT2122",
    customer: "James bond",
    productName: "White T shirt",
    amount: "$12.00",
    orderDate: "25/07/23",
    status: "Cancelled",
  },
  {
    id: "#TBT2123",
    customer: "James bond",
    productName: "Technology",
    amount: "$12.00",
    orderDate: "25/07/23",
    status: "Pending",
  },
]

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [showViewOrder, setShowViewOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Enhanced filtering logic
  const filteredOrders = data.filter((order) => {
    // Search across multiple fields
    const searchLower = searchTerm.toLowerCase();
    const customerMatches = order.customer.toLowerCase().includes(searchLower);
    const productMatches = order.productName.toLowerCase().includes(searchLower);
    const orderIdMatches = order.id.toLowerCase().includes(searchLower);

    // Status filter
    const statusMatches = statusFilter === "" || order.status === statusFilter;

    const searchMatches = searchTerm === "" || customerMatches || productMatches || orderIdMatches;

    return searchMatches && statusMatches;
  });

  // Handle view order click
  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowViewOrder(true);
  };

  // Handle close popup
  const handleCloseViewOrder = () => {
    setShowViewOrder(false);
    setSelectedOrder(null);
  };

  // Create columns with view handler
  const columnsWithHandler = columns.map(col => {
    if (col.id === "actions") {
      return {
        ...col,
        cell: ({ row }: any) => (
          <div className="ml-[-5px] flex space-x-0">
            <button
              onClick={() => handleViewOrder(row.original)}
              className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
              aria-label="View order details"
            >
              <RiEyeLine size={20} className="text-white" />
            </button>
            <button
              onClick={() => console.log("Delete order:", row.original.id)}
              className="rounded p-2 bg-transparent hover:bg-transparent focus:bg-transparent"
              aria-label="Delete order"
            >
              <FiTrash2 size={20} className="text-white" />
            </button>
          </div>
        )
      };
    }
    return col;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Orders Table with Sorting & Search */}
        <div className="mt-6 rounded-2xl sm:gap-0">
          <div className="flex flex-col gap-4 sm:mb-6 sm:items-center sm:justify-between md:flex-row">
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-[20px] font-bold sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-[#E5E5E5]">
                  Orders
                </h1>
                <span className="text-[14px] text-[#E5E5E5] font-semibold sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] mt-1 sm:mt-2">
                  All orders
                </span>
              </div>
            </div>

            {/* Responsive Filters and Search Container */}
            <div className="flex flex-col gap-3 w-full md:w-auto md:flex-row md:gap-3 lg:gap-4">
              {/* Status Filter */}
              <div className="relative w-full md:w-32 lg:w-36 xl:w-40">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full rounded-3xl bg-[#0B1739] px-3 py-3 text-sm border border-[#FFFFFF33]/20 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50 transition-all duration-200 hover:border-[#AEB9E1]/30"
                >
                  <option value="" className="bg-[#0B1739] text-white py-2">All Status</option>
                  <option value="Delivered" className="bg-[#0B1739] text-white py-2">Delivered</option>
                  <option value="Pending" className="bg-[#0B1739] text-white py-2">Pending</option>
                  <option value="Cancelled" className="bg-[#0B1739] text-white py-2">Cancelled</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#AEB9E1] transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Payment Filter */}
              <div className="relative w-full md:w-40 lg:w-44 xl:w-48">
                <select
                  value={paymentFilter}
                  onChange={(e) => setPaymentFilter(e.target.value)}
                  className="w-full rounded-3xl bg-[#0B1739] px-3 py-3 text-sm border border-[#FFFFFF33]/20 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50 transition-all duration-200 hover:border-[#AEB9E1]/30"
                >
                  <option value="" className="bg-[#0B1739] text-white py-2">All Payments</option>
                  <option value="card" className="bg-[#0B1739] text-white py-2">Card</option>
                  <option value="cash" className="bg-[#0B1739] text-white py-2">Cash</option>
                  <option value="bank" className="bg-[#0B1739] text-white py-2">Bank Transfer</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#AEB9E1] transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-48 lg:w-56 xl:w-64 2xl:w-72">
                <input
                  type="text"
                  placeholder="Search For..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-3xl bg-[#0B1739] px-3 pl-10 py-3 text-sm border border-[#FFFFFF33]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50 transition-all duration-200"
                />
                <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-[#AEB9E1] text-sm" />
              </div>
            </div>
          </div>

          <div className="mt-[10px] sm:mt-0">
            <DataTable columns={columnsWithHandler} data={filteredOrders} />
          </div>
        </div>
      </div>

      {/* View Order Details Popup */}
      {showViewOrder && selectedOrder && (
        <ViewOrderDetails
          onClose={handleCloseViewOrder}
          order={selectedOrder}
        />
      )}
    </div>
  )
}