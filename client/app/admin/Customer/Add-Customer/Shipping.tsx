"use client";

import React from 'react';

interface ShippingProps {
  formData: {
    shippingFirstName: string;
    shippingLastName: string;
    shippingPhone: string;
    address: string;
    city: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const Shipping: React.FC<ShippingProps> = ({ formData, onInputChange }) => {
  return (
    <div>
      <h3 className="xl:text-[32px] text-[24px] font-semibold text-[#E5E5E5] mb-6">Shipping Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">First Name</label>
          <input
            type="text"
            value={formData.shippingFirstName}
            onChange={(e) => onInputChange('shippingFirstName', e.target.value)}
            className="w-full px-4 xl:py-1 py-2 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">Last Name</label>
          <input
            type="text"
            value={formData.shippingLastName}
            onChange={(e) => onInputChange('shippingLastName', e.target.value)}
            className="w-full px-4 xl:py-1 py-2  border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">Phone number</label>
          <input
            type="tel"
            value={formData.shippingPhone}
            onChange={(e) => onInputChange('shippingPhone', e.target.value)}
            className="w-full px-4 xl:py-1 py-2 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => onInputChange('city', e.target.value)}
            className="w-full px-4 xl:py-1 py-2  border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[#FFFFFF] text-[17px] mb-2">Address</label>
          <textarea
            value={formData.address}
            onChange={(e) => onInputChange('address', e.target.value)}
            className="w-full px-4 xl:py-1 py-2 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none h-20 resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
