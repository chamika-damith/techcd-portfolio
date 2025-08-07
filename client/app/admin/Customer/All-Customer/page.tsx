"use client";

import { useState } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { FaSearch } from "react-icons/fa";


const AllCustomersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock customer data
  const customers = [
    {
      id: "1",
      customerImage: "/images/sample-img.jpg",
      customerName: "John Smith",
      phone: "+1 (555) 123-4567",
      email: "john.smith@email.com",
      
    },
    {
      id: "2",
      customerImage: "/images/sample-img.jpg",
      customerName: "Sarah Johnson",
      phone: "+1 (555) 234-5678",
      email: "sarah.johnson@email.com",
      
    },
    {
      id: "3",
      customerImage: "/images/sample-img.jpg",
      customerName: "Michael Brown",
      phone: "+1 (555) 345-6789",
      email: "michael.brown@email.com",
     
    },
    {
      id: "4",
      customerImage: "/images/sample-img.jpg",
      customerName: "Emily Davis",
      phone: "+1 (555) 456-7890",
      email: "emily.davis@email.com",
      
    },
    {
      id: "5",
      customerImage: "/images/sample-img.jpg",
      customerName: "David Wilson",
      phone: "+1 (555) 567-8901",
      email: "david.wilson@email.com",
     
    },
    {
      id: "6",
      customerImage: "/images/sample-img.jpg",
      customerName: "Lisa Anderson",
      phone: "+1 (555) 678-9012",
      email: "lisa.anderson@email.com",
     
    },
    {
      id: "7",
      customerImage: "/images/sample-img.jpg",
      customerName: "Robert Taylor",
      phone: "+1 (555) 789-0123",
      email: "robert.taylor@email.com",
  
    },
    {
      id: "8",
      customerImage: "/images/sample-img.jpg",
      customerName: "Jennifer Martinez",
      phone: "+1 (555) 890-1234",
      email: "jennifer.martinez@email.com",
   
    },
    {
      id: "9",
      customerImage: "/images/sample-img.jpg",
      customerName: "Christopher Garcia",
      phone: "+1 (555) 901-2345",
      email: "christopher.garcia@email.com",
      
    },
    {
      id: "10",
      customerImage: "/images/sample-img.jpg",
      customerName: "Amanda Rodriguez",
      phone: "+1 (555) 012-3456",
      email: "amanda.rodriguez@email.com",
    
    },
  ];

  // Enhanced filtering logic
  const filteredCustomers = customers.filter((customer) => {
    // Customer name search
    const nameMatches =
      searchTerm === "" ||
      (customer.customerName &&
        customer.customerName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    // Email search
    const emailMatches =
      searchTerm === "" ||
      (customer.email &&
        customer.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    // Phone search
    const phoneMatches =
      searchTerm === "" ||
      (customer.phone &&
        customer.phone
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    return nameMatches || emailMatches || phoneMatches;
  });
  return (
    <div>
      <div className="container mx-auto">
        {/* Customer Table with Sorting & Search */}
        <div className="mt-6 rounded-2xl   sm:gap-0">
          <div className="grid flex-wrap gap-4 sm:mb-6 sm:items-center sm:justify-between sm:gap-2 md:flex">
            <div>
              <div className="flex items-center gap-4">
                                 <h1 className="text-[28px] font-bold sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-[#E5E5E5]">
                   Customers
                 </h1>
                 <span className="text-[17px] text-[#E5E5E5] font-semibold sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[20px] mt-2">
                   All customers
                 </span>
              </div>
            </div>

            <div className=" grid flex-wrap gap-4 sm:flex sm:gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[220px] rounded-3xl bg-[#0B1739]  px-3 pl-10 py-3 md:w-[250px] lg:w-[280px] xl:w-[285px] 2xl:w-[285px] border-[#FFFFFF33]/20 text-[14px]"
                />
                                 <FaSearch className="absolute top-1/2 left-3 xl:-translate-y-1 -translate-y-1/2 transform text-[#AEB9E1] text-[14px]" />
              </div>

              {/* Status Filter */}
              {/* <div className="relative mt-[7px] mr-[50px] rounded-2xl bg-[#F9FBFF]">
                <label className="text-[12px]">Status:</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="items-center bg-[#F9FBFF] px-3 py-1 text-[12px]"
                >
                  <option value="all">All</option>
                  <option
                    value="Pending"
                    className="font-poppins text-[#0F5FC2]"
                  >
                    Pending
                  </option>
                  <option
                    value="Accepted"
                    className="font-poppins text-[#00AC4F]"
                  >
                    Accepted
                  </option>
                  <option
                    value="Declined"
                    className="font-poppins text-[#D0004B]"
                  >
                    Declined
                  </option>
                </select>
              </div> */}

              {/* Class Filter */}
              {/* <div className="relative mt-[7px] mr-[50px] rounded-2xl bg-[#F9FBFF]">
                <label className="text-[12px]">Class:</label>
                <select
                  value={classFilter}
                  onChange={(e) => setClassFilter(e.target.value)}
                  className="font-poppins items-center bg-[#F9FBFF] px-2 py-1 text-[12px]"
                >
                  <option value="all" className="font-poppins">
                    All Classes
                  </option>
                  <option value="18_24_MONTHS">Month(18-24)</option>
                  <option value="TODDLER">Toddler(2-3)</option>
                  <option value="PRE_K1">Pre K1(3-4)</option>
                  <option value="SECOND_YEAR">2nd Year(4-5)</option>
                  <option value="THIRD_YEAR">Kindergarten(5-6)</option>
                </select>
              </div> */}
            </div>
          </div>

          <div className="mt-[10px] sm:mt-0">
            <DataTable columns={columns} data={filteredCustomers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCustomersTable;
