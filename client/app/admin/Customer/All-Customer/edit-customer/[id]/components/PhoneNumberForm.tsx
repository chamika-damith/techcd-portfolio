"use client";

import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, ChevronDown } from 'lucide-react';
import Editbutton from './Editbutton'
interface PhoneNumberFormProps {
  onClose: () => void;
  onSave: (phoneData: { countryCode: string; phoneNumber: string }) => void;
}

const PhoneNumberForm: React.FC<PhoneNumberFormProps> = ({
  onClose,
  onSave
}) => {
  const [countryCode, setCountryCode] = useState('US +1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    onSave({ countryCode, phoneNumber });
    onClose();
  };

  return (
    <div className="w-full">
      {/* Header with Back Arrow and Title */}
      <div className="flex items-center mb-6 sm:mb-8">
        <button
          onClick={onClose}
          className="mr-3 sm:mr-4 p-2 hover:bg-[#172D6D] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
        <h1 className="2xl:text-2xl text-[16px] font-semibold text-[#E5E5E5]">
          Account Credential
        </h1>
      </div>

      {/* Phone Number Section */}
      <div className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-[#FFFFFF] text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3">
            Phone Number
          </label>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            {/* Country Code Dropdown */}
            <div className="relative">
              <button className="flex items-center justify-between w-full sm:w-32 px-3 sm:px-4 py-2 sm:py-3 bg-[#0B1739]  rounded-xl text-white hover:bg-[#1E40AF] transition-colors">
                <span className="text-sm">{countryCode}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Dropdown options would go here */}
            </div>
            
            {/* Phone Number Input */}
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2 bg-[#0B1739]  rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors text-sm sm:text-base"
              placeholder="+1"
            />
          </div>
        </div>

        {/* Password Section */}
        <div>
          <label className="block text-[#FFFFFF] text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 sm:px-4 py-2 sm:py-2 bg-[#0B1739]  rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors text-sm sm:text-base"
          
          />
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end pt-6 sm:pt-8">
      <Editbutton identifier="add-product-btn" buttonText="Save Changes" />
      </div>
    </div>
  );
};

export default PhoneNumberForm;
