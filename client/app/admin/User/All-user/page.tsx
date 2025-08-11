"use client";

import { useState } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { FaSearch } from "react-icons/fa";


const AllUsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock user data
  const users = [
    {
      id: "1",
      userImage: "/images/sample-img.jpg",
      userName: "John Smith",
      email: "john.smith@email.com",
      role: "Admin"
    },
    {
      id: "2",
      userImage: "/images/sample-img.jpg",
      userName: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      role: "User"
    },
    {
      id: "3",
      userImage: "/images/sample-img.jpg",
      userName: "Michael Brown",
      email: "michael.brown@email.com",
      role: "Moderator"
    },
    {
      id: "4",
      userImage: "/images/sample-img.jpg",
      userName: "Emily Davis",
      email: "emily.davis@email.com",
      role: "User"
    },
    {
      id: "5",
      userImage: "/images/sample-img.jpg",
      userName: "David Wilson",
      email: "david.wilson@email.com",
      role: "Admin"
    },
    {
      id: "6",
      userImage: "/images/sample-img.jpg",
      userName: "Lisa Anderson",
      email: "lisa.anderson@email.com",
      role: "User"
    },
    {
      id: "7",
      userImage: "/images/sample-img.jpg",
      userName: "Robert Taylor",
      email: "robert.taylor@email.com",
      role: "Moderator"
    },
    {
      id: "8",
      userImage: "/images/sample-img.jpg",
      userName: "Jennifer Martinez",
      email: "jennifer.martinez@email.com",
      role: "User"
    },
    {
      id: "9",
      userImage: "/images/sample-img.jpg",
      userName: "Christopher Garcia",
      email: "christopher.garcia@email.com",
      role: "Admin"
    },
    {
      id: "10",
      userImage: "/images/sample-img.jpg",
      userName: "Amanda Rodriguez",
      email: "amanda.rodriguez@email.com",
      role: "User"
    },
  ];

  // Enhanced filtering logic
  const filteredUsers = users.filter((user) => {
    // User name search
    const nameMatches =
      searchTerm === "" ||
      (user.userName &&
        user.userName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    // Email search
    const emailMatches =
      searchTerm === "" ||
      (user.email &&
        user.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    // Role search
    const roleMatches =
      searchTerm === "" ||
      (user.role &&
        user.role
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    return nameMatches || emailMatches || roleMatches;
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
                   Users
                 </h1>
                 <span className="text-[17px] text-[#E5E5E5] font-semibold sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[20px] mt-2">
                   All User
                 </span>
              </div>
            </div>

            <div className=" grid flex-wrap gap-4 sm:flex sm:gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users..."
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
            <DataTable columns={columns} data={filteredUsers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsersTable;
