"use client";

import { useState } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { FaSearch } from "react-icons/fa";
import AddButton from './AddButton'
import AddCouponModal from './AddCouponModal'

const AllProductsTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mock coupon data
    const products = [
        {
            id: "1",
            discount: "20% OFF",
            couponTitle: "Summer Sale Coupon",
            code: "SUMMER2024",
            productType: "Electronics",
            startDate: "June 1, 2024",
            status: "Active",
        },
        {
            id: "2",
            discount: "15% OFF",
            couponTitle: "Winter Collection",
            code: "WINTER2024",
            productType: "Clothing",
            startDate: "December 1, 2024",
            status: "Active",
        },
        {
            id: "3",
            discount: "25% OFF",
            couponTitle: "Spring Special",
            code: "SPRING2024",
            productType: "Home & Garden",
            startDate: "March 1, 2024",
            status: "Expired",
        },
        {
            id: "4",
            discount: "30% OFF",
            couponTitle: "Autumn Deals",
            code: "AUTUMN2024",
            productType: "Sports",
            startDate: "September 1, 2024",
            status: "Active",
        },
        {
            id: "5",
            discount: "10% OFF",
            couponTitle: "Holiday Season",
            code: "HOLIDAY2024",
            productType: "Books",
            startDate: "November 1, 2024",
            status: "Expired",
        },
        {
            id: "6",
            discount: "50% OFF",
            couponTitle: "Flash Sale",
            code: "FLASH2024",
            productType: "Fashion",
            startDate: "July 15, 2024",
            status: "Active",
        },
        {
            id: "7",
            discount: "35% OFF",
            couponTitle: "Clearance Event",
            code: "SALE2024",
            productType: "Beauty",
            startDate: "August 1, 2024",
            status: "Active",
        },
        {
            id: "8",
            discount: "40% OFF",
            couponTitle: "End of Season",
            code: "CLEARANCE2024",
            productType: "Toys",
            startDate: "October 1, 2024",
            status: "Expired",
        },
    ];

    // Enhanced filtering logic
    const filteredProducts = products.filter((product) => {
        // Coupon title search
        const nameMatches =
            searchTerm === "" ||
            (product.couponTitle &&
                product.couponTitle
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()));

        return nameMatches;
    });
    return (
        <div>
            <div className="container mx-auto">
                {/* Student Table with Sorting & Search */}
                <div className="mt-6 rounded-2xl   sm:gap-0">
                    <div className="grid flex-wrap gap-4 sm:mb-6 sm:items-center sm:justify-between sm:gap-2 md:flex">
                        <div>
                            <div className="flex items-center gap-4">
                                <h1 className="text-[28px] font-bold sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-[#E5E5E5]">
                                    Products
                                </h1>
                                <span className="text-[17px] text-[#E5E5E5] font-semibold sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[20px] mt-2">
                                    All products
                                </span>
                            </div>
                        </div>

                        <div className=" grid flex-wrap gap-4 sm:flex sm:gap-4">
                            {/* Search Bar */}
                            <div className="relative">
                                                                 <input
                                     type="text"
                                     placeholder="Search For..."
                                     value={searchTerm}
                                     onChange={(e) => setSearchTerm(e.target.value)}
                                     className="w-[180px] rounded-3xl bg-[#0B1739] px-3 pl-10 py-3 md:w-[250px] lg:w-[280px] xl:w-[285px] 2xl:w-[285px] border-[#FFFFFF33]/20 text-[14px]"
                                 />
                                <FaSearch className="absolute top-1/2 left-3 xl:-translate-y-1 -translate-y-1/2 transform text-[#AEB9E1] text-[14px]" />
                            </div>

                            {/* Status Filter */}
                            <div className="relative mt-[7px] md:w-[170px] w-[150px]  md:py-0 py-2  px-3 rounded-3xl bg-[#0B1739]">
                                <label className="text-[12px]">Status:</label>
                                <select

                                    className="items-center  px-3 py-1 text-[12px]"
                                >
                                    <option value="all">All</option>
                                    <option
                                        value="Pending"
                                        className="font-poppins text-[#0F5FC2]"
                                    >
                                        Active
                                    </option>
                                    <option
                                        value="Accepted"
                                        className="font-poppins text-[#00AC4F]"
                                    >
                                        Expired
                                    </option>

                                </select>
                            </div>

                            {/* Add button */}
                            <div className="relative mt-[7px]  ">
                                <AddButton 
                                    identifier="add-product" 
                                    buttonText="Add Coupon" 
                                    onClick={() => setIsModalOpen(true)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-[10px] sm:mt-0">
                        <DataTable columns={columns} data={filteredProducts} />
                    </div>
                </div>
            </div>

            {/* Add Coupon Modal */}
            <AddCouponModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
};

export default AllProductsTable;
