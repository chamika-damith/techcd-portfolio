"use client";

import React from 'react';

const ShippingAddressTab = () => {
  return (
    <div className="space-y-6">
      {/* First Name and Last Name */}
      
        <div>
          <label className="block text-[17px]  text-[#FFFFFF] font-medium  mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
            
          />
        </div>
        <div>
          <label className="block text-[17px]  text-[#FFFFFF] font-medium  mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
           
          />
        </div>
    

      {/* Phone */}
      <div>
        <label className="block text-[17px]  text-[#FFFFFF] font-medium  mb-2">
          Phone
        </label>
        <input
          type="tel"
          className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
         
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-[17px]  text-[#FFFFFF] font-medium  mb-2">
          Address
        </label>
        <input
          type="text"
          className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
         
        />
      </div>

      {/* City and State/Province */}
      
        <div>
          <label className="block text-[17px]  text-[#FFFFFF] font-medium  mb-2">
            City
          </label>
          <input
            type="text"
            className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          
          />
        </div>
        <div>
          <label className="block text-[17px]  text-[#FFFFFF] font-medium  mb-2">
            State or province
          </label>
          <input
            type="text"
            className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          
          />
        </div>
      

      {/* Zip Code */}
      <div>
        <label className="block text-[17px]  text-[#FFFFFF] font-medium  mb-2">
          Zip Code
        </label>
        <input
          type="text"
          className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        
        />
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end pt-6">
        <button className="bg-[#3B82F6] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2">
          <span>Save Changes</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShippingAddressTab; 