import React from 'react'
import Credential from './Credential'
import Shipping from './Shipping'
import Savebutton from './Savebutton'
function page() {
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
            <h2 className="text-2xl font-bold text-[#E5E5E5] mt-4">James Bond</h2>
          </div>

          {/* Credential Section */}
          <Credential />

          {/* Shipping Address Section */}
          <Shipping />

           {/* Save Button */}
        <div className="flex justify-end mt-6">
        <Savebutton identifier="add-product-btn" buttonText="Save Changes" />
        </div>
        </div>

       
      </div>
    </div>
  )
}

export default page
