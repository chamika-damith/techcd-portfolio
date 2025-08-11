"use client";

import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, ChevronDown } from 'lucide-react';

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
      <div className="flex items-center mb-8">
        <button
          onClick={onClose}
          className="mr-4 p-2 hover:bg-[#172D6D] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-xl font-semibold text-white">
          Account Credential
        </h1>
      </div>

      {/* Phone Number Section */}
      <div className="space-y-6">
        <div>
          <label className="block text-[#FFFFFF] text-[17px] font-medium mb-3">
            phone Number
          </label>
          <div className="flex space-x-3">
            {/* Country Code Dropdown */}
            <div className="relative">
              <button className="flex items-center justify-between w-32 px-4 py-3 bg-[#172D6D] border border-[#172D6D] rounded-xl text-white hover:bg-[#1E40AF] transition-colors">
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
              className="flex-1 px-4 py-3 bg-[#172D6D] border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
              placeholder="+1"
            />
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end pt-8">
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-xl font-medium transition-colors"
        >
          <span>Save Changes</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PhoneNumberForm;
