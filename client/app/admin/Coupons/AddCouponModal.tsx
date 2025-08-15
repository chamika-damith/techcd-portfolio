import React from "react";
import Updatebutton from "./Updatebutton";

export default function AddCouponModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#00000033]/20 backdrop-blur-[500px] rounded-2xl shadow-lg w-[650px] p-6 relative border border-[#172D6D]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 bg-[#028EFC47] p-2 border border-[#1E2A45] rounded-full w-8 h-8 flex items-center justify-center text-white hover:bg-[#1E2A45]"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-white text-2xl font-bold mb-6">Add Coupons</h2>

        {/* Form */}
        <form className="grid grid-cols-2 gap-8 items-start">
          {/* Left Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2 text-sm">Coupon Title</label>
              <input
                type="text"
                className="w-full h-10 px-3 text-[15px] bg-transparent border border-[#1E2A45] rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">Code</label>
              <input
                type="text"
                className="w-full h-10 px-3 text-[15px] bg-transparent border border-[#1E2A45] rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">Start Date</label>
              <input
                type="date"
                className="w-full h-10 px-3 text-[15px] bg-transparent border border-[#1E2A45] rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2 text-sm">Product Type</label>
              <select
                className="w-full h-10 px-3 text-[15px] bg-transparent border border-[#1E2A45] rounded-md text-white focus:outline-none focus:border-blue-500"
              >
                <option value="" className="bg-[#0A0F1C]">
                  Select Product
                </option>
                <option value="1" className="bg-[#0A0F1C]">
                  Product 1
                </option>
                <option value="2" className="bg-[#0A0F1C]">
                  Product 2
                </option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">Amount/percentage</label>
              <input
                type="text"
                className="w-full h-10 px-3 text-[15px] bg-transparent border border-[#1E2A45] rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">End Date</label>
              <input
                type="date"
                className="w-full h-10 px-3 text-[15px] bg-transparent border border-[#1E2A45] rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </form>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <Updatebutton identifier="add-coupon" buttonText="Add Coupon" />
        </div>
      </div>
    </div>
  );
}
