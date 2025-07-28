"use client";

import { useState } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { FaSearch } from "react-icons/fa";


const StudentAdmissionTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [classFilter, setClassFilter] = useState("all");

  // Mock data
  const students = [
    {
      id: "1",
      studentFirstName: "John",
      studentLastName: "Doe",
      classApplyingFor: "PRE_K1",
      parentPhone: "123-456-7890",
      parentEmail: "john.doe@example.com",
      status: "Pending" as const,
    },
    {
      id: "2",
      studentFirstName: "Jane",
      studentLastName: "Smith",
      classApplyingFor: "TODDLER",
      parentPhone: "098-765-4321",
      parentEmail: "jane.smith@example.com",
      status: "Accepted" as const,
    },
  ];

  // Enhanced filtering logic
  const filteredStudents = students.filter((student) => {
    // Status filter
    const statusMatches =
      statusFilter === "all" || student.status === statusFilter;

    // Class filter
    const classMatches =
      classFilter === "all" ||
      student.classApplyingFor.toLowerCase() === classFilter.toLowerCase();

    // Name search (searches both first and last names)
    const nameMatches =
      searchTerm === "" ||
      (student.studentFirstName &&
        student.studentFirstName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (student.studentLastName &&
        student.studentLastName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    return statusMatches && classMatches && nameMatches;
  });
  return (
    <div>
      <div className="container mx-auto">
        {/* Student Table with Sorting & Search */}
        <div className="mt-6 rounded-2xl  p-6 sm:gap-0">
          <div className="grid flex-wrap gap-4 sm:mb-6 sm:items-center sm:justify-between sm:gap-2 md:flex">
            <div>
              <h1 className="ml-[10px] text-[28px] font-bold sm:text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[22px]">
                All Admissions
              </h1>
            </div>

            <div className="mr-[50px] grid flex-wrap gap-4 sm:flex sm:gap-4">
              {/* Search Bar */}
              <div className="relative mr-[100px]">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[220px] rounded-2xl bg-[#F9FBFF]  px-3 pl-10 md:w-[250px] lg:w-[280px] xl:w-[285px] 2xl:w-[305px]"
                />
                <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-black" />
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
            <DataTable columns={columns} data={filteredStudents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAdmissionTable;
