import React from 'react';

const Shipping = () => {
  return (
    <div>
      <h3 className="text-[32px] font-semibold text-[#E5E5E5] mb-6">Shipping Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">First Name</label>
          <input
            type="text"
            className="w-full px-4 py-1 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"
      
          />
        </div>
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-1  border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"

          />
        </div>
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">Phone number</label>
          <input
            type="tel"
            className="w-full px-4 py-1 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"
   
          />
        </div>
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">City</label>
          <input
            type="text"
            className="w-full px-4 py-1  border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"

          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[#FFFFFF] text-[17px] mb-2">Address</label>
          <textarea
            className="w-full px-4 py-1 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none h-20 resize-none"
         
          />
        </div>
        <div>
          <label className="block text-[#FFFFFF] text-[17px] mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-1 border border-[#172D6D] rounded-md text-white focus:border-[#028EFC] focus:outline-none"

          />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
