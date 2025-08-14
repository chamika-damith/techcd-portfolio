"use client";

import React from 'react';
import SaveButton from './Savebutton';
import { FiEdit3 } from 'react-icons/fi';

const ProfileTab = () => {
  return (
    <div className="space-y-6">
      {/* Profile Avatar Section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">JB</span>
            </div>
          </div>
          <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
            <FiEdit3 className="text-white text-sm" />
          </button>
        </div>
        <h2 className="text-xl font-bold text-white">James Bond</h2>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* First Name */}
        <div className='space-y-4'>
          <label className="block text-[17px]  text-[#FFFFFF] font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-1  placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-[17px] font-medium text-[#FFFFFF] mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-1 border placeholder:text-xl  border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          
          />
        </div>
        <div>
          <label className="block text-[17px] font-medium text-[#FFFFFF] mb-2">
            Role
          </label>
          <select
            
            className="w-full px-4 xl:py-1 py-2 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none bg-transparent"
            required
          >
            <option value="" className="bg-[#172D6D] text-white">Select Role</option>
            <option value="admin" className="bg-[#172D6D] text-white">Admin</option>
            <option value="user" className="bg-[#172D6D] text-white">User</option>
            <option value="moderator" className="bg-[#172D6D] text-white">Moderator</option>
            <option value="editor" className="bg-[#172D6D] text-white">Editor</option>
          </select>
        </div>

        
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end pt-6">
      <SaveButton identifier="add-product-btn" buttonText="Save Changes" />
      </div>
    </div>
  );
};

export default ProfileTab; 