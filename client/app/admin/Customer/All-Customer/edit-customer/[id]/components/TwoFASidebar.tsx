"use client";

import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Editbutton from './Editbutton';

interface TwoFASidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selected2FA: string;
  onSelect2FA: (value: string) => void;
  onSave: () => void;
}

const TwoFASidebar: React.FC<TwoFASidebarProps> = ({
  isOpen,
  onClose,
  selected2FA,
  onSelect2FA,
  onSave
}) => {
  if (!isOpen) return null;

  return (
    <div className="w-full">
      {/* Header with Back Arrow and Title */}
      <div className="flex items-center mb-8">
        <button
          onClick={onClose}
          className="mr-4 p-2 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className=" xl:text-2xl text-[16px]  font-semibold text-[#E5E5E5]">
          Account Credential
        </h1>
      </div>

      {/* 2FA Options */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          {/* None Option */}
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="none"
              name="2fa"
              value="none"
              checked={selected2FA === 'none'}
              onChange={(e) => onSelect2FA(e.target.value)}
              className="w-5 h-5 text-[#3B82F6] bg-[#0B1739] border-[#172D6D] "
            />
            <label htmlFor="none" className="text-lg text-white font-medium cursor-pointer">
              None
            </label>
          </div>

          {/* Email Verification Option */}
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="email"
              name="2fa"
              value="email"
              checked={selected2FA === 'email'}
              onChange={(e) => onSelect2FA(e.target.value)}
              className="w-5 h-5 text-[#3B82F6] bg-[#0B1739] border-[#172D6D] "
            />
            <label htmlFor="email" className="text-lg text-white font-medium cursor-pointer">
              Email Verification
            </label>
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end pt-8">
        <Editbutton identifier="add-product-btn" buttonText="Save Changes" />
      </div>
    </div>
  );
};

export default TwoFASidebar;
