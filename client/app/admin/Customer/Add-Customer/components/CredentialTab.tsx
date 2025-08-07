"use client";

import React from 'react';

const CredentialTab = () => {
  return (
    <div className="space-y-6">
      {/* Email Section */}
      <div>
        <label className="block text-[17px] text-[#FFFFFF] font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        />
      </div>

      {/* Username Section */}
      <div>
        <label className="block text-[17px] text-[#FFFFFF] font-medium mb-2">
          Username
        </label>
        <input
          type="text"
          className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        />
      </div>

      {/* Password Section */}
      <div>
        <label className="block text-[17px] text-[#FFFFFF] font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        />
      </div>

      {/* Phone Number Section */}
      <div>
        <label className="block text-[17px] text-[#FFFFFF] font-medium mb-2">
          Phone number
        </label>
        <input
          type="tel"
          className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        />
      </div>

      {/* 2-Factor Authentication Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-[17px] text-[#FFFFFF] font-medium">
            2-factor authentication
          </label>
          <button className="text-[#3B82F6] hover:text-blue-400 text-sm font-medium transition-colors">
            Change
          </button>
        </div>
        <input
          type="text"
          className="w-full px-4 py-1 placeholder:text-xl border border-[#172D6D] rounded-xl text-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          placeholder="None"
          disabled
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

export default CredentialTab; 
