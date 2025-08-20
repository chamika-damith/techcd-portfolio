"use client";

import React, { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import ProfileSidebar from './components/ProfileSidebar';
import Savebutton from './Savebutton'
function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    biography: ''
  });
  const [activeTab, setActiveTab] = useState('profile');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData);
    // Add your save logic here
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl ">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-white mb-8">Profile  </h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section - Account Settings Sidebar */}
          <ProfileSidebar 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Right Section - Profile Details Form */}
          <div className="flex-1 bg-[#0000004D]/30 backdrop-blur-[500px] border border-[#172D6D] rounded-2xl p-4 lg:p-8 relative overflow-hidden">
            {/* Blue gradient on right edge */}
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#028EFC]/20 to-transparent"></div>
            
            {/* Profile Picture and Name */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full border-2 border-[#028EFC] overflow-hidden">
                  <img 
                    src="/images/sample-img.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <input
                  type="file"
                  id="profile-picture-input"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      // Handle the selected file here
                      console.log('Selected file:', file);
                      // You can add logic to upload the image or update the profile picture
                    }
                  }}
                />
                <button 
                  type="button"
                  onClick={() => document.getElementById('profile-picture-input')?.click()}
                  className="absolute -bottom-1 -right-1 bg-[#028EFC] p-2 rounded-lg hover:bg-[#028EFC]/80 transition-colors"
                >
                  <FiEdit3 className="text-white text-sm" />
                </button>
              </div>
              <h2 className="text-2xl font-bold text-white mt-4">James Bond</h2>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-white text-[17px] font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm  border border-[#172D6D] rounded-lg text-white  "
                
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-white text-[17px] font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm   border border-[#172D6D] rounded-lg text-white  transition-all"
                  
                />
              </div>

              {/* Location */}
              <div className="relative">
                <label className="block text-white text-[17px] font-medium mb-2">
                  Location
                </label>
                <select
         
            className="w-full px-4 xl:py-1  py-2 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none bg-transparent"
            required
          >
            <option value="" className="bg-[#172D6D] text-white">Select Location</option>
            <option value="admin" className="bg-[#172D6D] text-white">Admin</option>
            <option value="user" className="bg-[#172D6D] text-white">User</option>
            <option value="moderator" className="bg-[#172D6D] text-white">Moderator</option>
            <option value="editor" className="bg-[#172D6D] text-white">Editor</option>
          </select>
                
              </div>

              {/* Biography */}
              <div>
                <label className="block text-white text-[17px] font-medium mb-2">
                  Biography
                </label>
                <textarea
                  name="biography"
                  value={formData.biography}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3  text-sm  border border-[#172D6D] rounded-lg text-white  transition-all resize-none"
               
                />
              </div>

              {/* Save Changes Button */}
              <div className="flex justify-end pt-4">
              <Savebutton 
                identifier="" 
                buttonText="Save Changes" 
                onSubmit={handleSaveChanges}
                isLoading={false}
              />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
