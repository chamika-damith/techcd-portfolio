import React from "react";

import { Product } from "@/lib/types";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";

type ProductGridAreaProps = {
  products: Product[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  total: number;
};

const ProductGridArea: React.FC<ProductGridAreaProps> = ({
  products,
  currentPage,
  setCurrentPage,
  total,
}) => {
  const pageSize = 12;
  const totalPages = Math.ceil(total / pageSize);
  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="text-[13px] sm:text-[15px] md:text-[17px] lg:col-span-4 lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
      <div className="mb-[1em] font-medium">
        Showing {total} t-shirts matching your filters
      </div>
      <ProductGrid products={paginatedProducts} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default ProductGridArea;
