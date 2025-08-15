import React from "react";
import { X } from "lucide-react";
import { Order } from "../All-Orders/columns";
import OrderButton from "./OrderButton";

interface ViewOrderDetailsProps {
  onClose: () => void;
  order: Order;
}

const ViewOrderDetails: React.FC<ViewOrderDetailsProps> = ({ onClose, order }) => {
  return (
    <div className="fixed inset-0 bg-[#00000033] flex items-center justify-center z-[10000] p-4">
      <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl rounded-3xl bg-black/20 border border-[#172D6D] backdrop-blur-[500px] p-4 sm:p-6 shadow-lg z-[9999] overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 border-[#028EFC]/20 rounded-full p-1.5 sm:p-2 bg-[#028EFC]/20 text-white"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Title */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold mb-4 sm:mb-5 text-[#FFFFFF] pl-2 sm:pl-5">
          Order Details
        </h2>

        {/* Order Details - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-2 sm:p-5">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Customer Name */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#FFFFFF]">
                Customer Name
              </label>
              <input
                type="text"
                value={order.customer}
                readOnly
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#172D6D] bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50"
              />
            </div>

            {/* Order Date */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#FFFFFF]">
                Order Date
              </label>
              <input
                type="text"
                value={order.orderDate}
                readOnly
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#172D6D] bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50"
              />
            </div>

            {/* Amount */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#FFFFFF]">
                Amount
              </label>
              <input
                type="text"
                value={order.amount}
                readOnly
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#172D6D] bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50"
              />
            </div>

            {/* Quantity */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#FFFFFF]">
                Quantity
              </label>
              <input
                type="text"
                value="1"
                readOnly
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#172D6D] bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Products */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#FFFFFF]">
                Products
              </label>
              <input
                type="text"
                value={order.productName}
                readOnly
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#172D6D] bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50"
              />
            </div>

            {/* Delivery Date */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#FFFFFF]">
                Delivery Date
              </label>
              <input
                type="text"
                placeholder="Select Date"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#172D6D] bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50 placeholder-gray-400"
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#FFFFFF]">
                Payment Method
              </label>
              <input
                type="text"
                value="Card"
                readOnly
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#172D6D] bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50"
              />
            </div>

            {/* Payment Method Dropdown */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#FFFFFF]">
                Payment Method
              </label>
              <div className="relative">
                <select
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#172D6D] bg-transparent text-white text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#AEB9E1]/50 focus:border-[#AEB9E1]/50"
                >
                  <option value="card" className="bg-[#0B1739] text-white">Card</option>
                  <option value="cash" className="bg-[#0B1739] text-white">Cash</option>
                  <option value="bank" className="bg-[#0B1739] text-white">Bank Transfer</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#AEB9E1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4 sm:mt-6 px-2 sm:px-5">
          <OrderButton
            identifier="submit-order-btn"
            buttonText="Submit"
            onClick={onClose}
            className="w-full sm:w-auto text-[14px] sm:text-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewOrderDetails;