"use client";

import React, { useState } from "react";
import ProductFilterSidebar from "./ProductFilterSidebar";
import ProductGridArea from "./ProductGridArea";

// Mock data for categories and products
const mockCategories = [
  {
    name: "Men's",
    subCategories: ["T-Shirts", "Hoodies", "Jackets"],
  },
  {
    name: "Women's",
    subCategories: ["T-Shirts", "Hoodies", "Dresses"],
  },
  {
    name: "Kids",
    subCategories: ["T-Shirts", "Hoodies"],
  },
];

const mockProducts = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: i % 2 === 0 ? "Black T-Shirt" : "White T-Shirt",
  image: "/images/home-page/store/t-shirt.png",
  price: 23,
  isNew: i < 3,
  color: i % 2 === 0 ? "Black" : "White",
  category: i % 3 === 0 ? "Men's" : i % 3 === 1 ? "Women's" : "Kids",
  subCategory: "T-Shirts",
}));

const ProductArea = () => {
  // State for selected filters and pagination
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Handle filter change
  const handleFilterChange = (subCategory: string) => {
    setCurrentPage(1);
    setSelectedFilters((prev) =>
      prev.includes(subCategory)
        ? prev.filter((f) => f !== subCategory)
        : [...prev, subCategory],
    );
  };

  // Filter products by selected sub-categories
  const filteredProducts =
    selectedFilters.length === 0
      ? mockProducts
      : mockProducts.filter((p) => selectedFilters.includes(p.subCategory));

  // Pagination
  const total = filteredProducts.length;

  return (
    <section>
      <div className="px-container relative container mx-auto py-[2em]">
        <div className="grid grid-cols-1 gap-[1.5em] lg:grid-cols-5">
          <ProductFilterSidebar
            categories={mockCategories}
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
          />

          <ProductGridArea
            products={filteredProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={total}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
