"use client";

import React from 'react';

const CredentialTab = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Email Section */}
      <div>
        <div className="mb-2">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            Email
          </label>
        </div>
        <input
          type="email"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          readOnly
        />
      </div>

      {/* Username Section */}
      <div>
        <div className="mb-2">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            Username
          </label>
        </div>
        <input
          type="text"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          readOnly
        />
      </div>

      {/* Password Section */}
      <div>
        <div className="mb-2">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            Password
          </label>
        </div>
        <input
          type="password"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          readOnly
        />
      </div>

      {/* Phone Number Section */}
      <div>
        <div className="mb-2">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            Phone number
          </label>
        </div>
        <input
          type="tel"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          placeholder="No phone number added"
          disabled
        />
      </div>

      {/* 2-Factor Authentication Section */}
      <div>
        <div className="mb-2">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            2-factor authentication
          </label>
        </div>
        <input
          type="text"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          placeholder="None"
          disabled
        />
      </div>
    </div>
  );
};

export default CredentialTab; 
