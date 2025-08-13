"use client";

import React, { useState } from 'react'
import Credential from './Credential'
import Shipping from './Shipping'
import Savebutton from './Savebutton'

function Page() {
  const [formData, setFormData] = useState({
    // Credential fields
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    phoneNumber: '',
    password: '',
    // Shipping fields
    shippingFirstName: '',
    shippingLastName: '',
    shippingPhone: '',
    address: '',
    city: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'username', 'password'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setMessage({
        type: 'error',
        text: `Please fill in required fields: ${missingFields.join(', ')}`
      });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('http://localhost:3000/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Customer created successfully!'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          username: '',
          phoneNumber: '',
          password: '',
          shippingFirstName: '',
          shippingLastName: '',
          shippingPhone: '',
          address: '',
          city: ''
        });
      } else {
        setMessage({
          type: 'error',
          text: result.message || 'Failed to create customer'
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Network error. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  text-white ">
      {/* Header */}
      <div className="flex items-center gap-4">
      <h1 className="text-[28px] font-bold sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-[#E5E5E5]">
            Customer
          </h1>
          <span className="text-[17px] text-[#E5E5E5] font-semibold sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[20px] mt-2">
            Add Customer
          </span>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`mb-4 p-4 rounded-md ${
          message.type === 'success' 
            ? 'bg-green-500/20 border border-green-500 text-green-300' 
            : 'bg-red-500/20 border border-red-500 text-red-300'
        }`}>
          {message.text}
        </div>
      )}

      {/* Form Sections */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0000004D]/30 backdrop-blur-[500px] rounded-xl p-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#334155] border-2 border-[#028EFC] flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#475569] flex items-center justify-center">
                  <span className="text-2xl text-[#94A3B8]">👤</span>
                </div>
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#028EFC] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✏️</span>
              </button>
            </div>
            <h2 className="text-2xl font-bold text-[#E5E5E5] mt-4">
              {formData.firstName && formData.lastName 
                ? `${formData.firstName} ${formData.lastName}` 
                : 'New Customer'
              }
            </h2>
          </div>

          {/* Credential Section */}
          <Credential 
            formData={{
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              username: formData.username,
              phoneNumber: formData.phoneNumber,
              password: formData.password
            }}
            onInputChange={handleInputChange}
          />

          {/* Shipping Address Section */}
          <Shipping 
            formData={{
              shippingFirstName: formData.shippingFirstName,
              shippingLastName: formData.shippingLastName,
              shippingPhone: formData.shippingPhone,
              address: formData.address,
              city: formData.city
            }}
            onInputChange={handleInputChange}
          />

           {/* Save Button */}
        <div className="flex justify-end mt-6">
        <Savebutton 
          identifier="add-product-btn" 
          buttonText="Save Changes" 
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        </div>
        </div>

       
      </div>
    </div>
  )
}

export default Page
