"use client";

import React, { useState } from 'react';
import SaveButton from './Savebutton';
import TwoFASidebar from './TwoFASidebar';
import PhoneNumberForm from './PhoneNumberForm';
import PasswordChangeForm from './PasswordChangeForm';
import UsernameChangeForm from './UsernameChangeForm';
import EmailChangeForm from './EmailChangeForm';

const CredentialTab = () => {
  const [show2FASidebar, setShow2FASidebar] = useState(false);
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showUsernameForm, setShowUsernameForm] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [selected2FA, setSelected2FA] = useState('none');
  const [phoneData, setPhoneData] = useState({ countryCode: 'US +1', phoneNumber: '' });

  const handle2FAChange = () => {
    setShow2FASidebar(true);
  };

  const handlePhoneChange = () => {
    setShowPhoneForm(true);
  };

  const handlePasswordChange = () => {
    setShowPasswordForm(true);
  };

  const handleUsernameChange = () => {
    setShowUsernameForm(true);
  };

  const handleEmailChange = () => {
    setShowEmailForm(true);
  };

  const handleCloseSidebar = () => {
    setShow2FASidebar(false);
  };

  const handleClosePhoneForm = () => {
    setShowPhoneForm(false);
  };

  const handleClosePasswordForm = () => {
    setShowPasswordForm(false);
  };

  const handleCloseUsernameForm = () => {
    setShowUsernameForm(false);
  };

  const handleCloseEmailForm = () => {
    setShowEmailForm(false);
  };

  const handleSave2FA = () => {
    // Handle save logic here
    console.log('Selected 2FA:', selected2FA);
    setShow2FASidebar(false);
  };

  const handleSavePhone = (data: { countryCode: string; phoneNumber: string }) => {
    setPhoneData(data);
    console.log('Phone data:', data);
    setShowPhoneForm(false);
  };

  const handleSavePassword = (data: { currentPassword: string; newPassword: string; confirmPassword: string }) => {
    console.log('Password data:', data);
    setShowPasswordForm(false);
  };

  const handleSaveUsername = (data: { newUsername: string; currentPassword: string }) => {
    console.log('Username data:', data);
    setShowUsernameForm(false);
  };

  const handleSaveEmail = (data: { newEmail: string; currentPassword: string }) => {
    console.log('Email data:', data);
    setShowEmailForm(false);
  };

  // Show 2FA options when Change button is clicked
  if (show2FASidebar) {
    return (
      <TwoFASidebar
        isOpen={show2FASidebar}
        onClose={handleCloseSidebar}
        selected2FA={selected2FA}
        onSelect2FA={setSelected2FA}
        onSave={handleSave2FA}
      />
    );
  }

  // Show phone number form when Add phone number is clicked
  if (showPhoneForm) {
    return (
      <PhoneNumberForm
        onClose={handleClosePhoneForm}
        onSave={handleSavePhone}
      />
    );
  }

  // Show password change form when Change password is clicked
  if (showPasswordForm) {
    return (
      <PasswordChangeForm
        onClose={handleClosePasswordForm}
        onSave={handleSavePassword}
      />
    );
  }

  // Show username change form when Change username is clicked
  if (showUsernameForm) {
    return (
      <UsernameChangeForm
        onClose={handleCloseUsernameForm}
        onSave={handleSaveUsername}
      />
    );
  }

  // Show email change form when Change email address is clicked
  if (showEmailForm) {
    return (
      <EmailChangeForm
        onClose={handleCloseEmailForm}
        onSave={handleSaveEmail}
      />
    );
  }

  // Show original credential form
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Email Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            Email
          </label>
          <button 
            className="text-[#028EFC] text-xs sm:text-sm font-medium transition-colors self-start sm:self-auto"
            onClick={handleEmailChange}
          >
            Change email address
          </button>
        </div>
        <input
          type="email"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        />
      </div>

      {/* Username Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            Username
          </label>
          <button 
            className="text-[#028EFC] text-xs sm:text-sm font-medium transition-colors self-start sm:self-auto"
            onClick={handleUsernameChange}
          >
            Change username
          </button>
        </div>
        <input
          type="text"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        />
      </div>

      {/* Password Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            Password
          </label>
          <button 
            className="text-[#028EFC] text-xs sm:text-sm font-medium transition-colors self-start sm:self-auto"
            onClick={handlePasswordChange}
          >
            Change password
          </button>
        </div>
        <input
          type="password"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
        />
      </div>

      {/* Phone Number Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            Phone number
          </label>
          <button 
            className="text-[#028EFC] text-xs sm:text-sm font-medium transition-colors self-start sm:self-auto"
            onClick={handlePhoneChange}
          >
            Add phone number
          </button>
        </div>
        <input
          type="tel"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          placeholder={phoneData.phoneNumber || "No phone number added"}
          disabled
        />
      </div>

      {/* 2-Factor Authentication Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
          <label className="block text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-medium">
            2-factor authentication
          </label>
          <button 
            className="text-[#028EFC] text-xs sm:text-sm font-medium transition-colors self-start sm:self-auto"
            onClick={handle2FAChange}
          >
            Change
          </button>
        </div>
        <input
          type="text"
          className="w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base placeholder:text-lg sm:placeholder:text-xl border border-[#172D6D] rounded-xl text-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          placeholder={selected2FA === 'none' ? 'None' : 'Email Verification'}
          disabled
        />
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end pt-4 sm:pt-6">
        <SaveButton identifier="add-product-btn" buttonText="Save Changes" />
      </div>
    </div>
  );
};

export default CredentialTab; 
