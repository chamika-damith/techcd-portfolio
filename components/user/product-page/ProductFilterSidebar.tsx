import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type ProductFilterSidebarProps = {
  categories: Array<{ name: string; subCategories: string[] }>;
  selectedFilters: string[];
  handleFilterChange: (subCategory: string) => void;
};

const ProductFilterSidebar: React.FC<ProductFilterSidebarProps> = ({
  categories,
  selectedFilters,
  handleFilterChange,
}) => {
  const [expanded, setExpanded] = useState<string[]>([categories[0]?.name]);

  const handleToggle = (catName: string) => {
    setExpanded((prev) =>
      prev.includes(catName)
        ? prev.filter((name) => name !== catName)
        : [...prev, catName],
    );
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    catName: string,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(catName);
    }
  };

  return (
    <div className="bg-foreground/10 border-foreground/30 h-fit rounded-[1em] border p-[1em] text-[13px] sm:text-[15px] md:text-[17px] lg:col-span-1 lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
      <h2 className="mb-[0.5em] font-semibold">CATEGORY</h2>
      <div className="space-y-[0.5em]">
        {categories.map((cat) => {
          const isOpen = expanded.includes(cat.name);
          return (
            <div key={cat.name}>
              <button
                className="mb-[0.5em] flex w-full items-center justify-between rounded py-[0.5em] font-semibold"
                aria-expanded={isOpen}
                aria-controls={`cat-panel-${cat.name}`}
                tabIndex={0}
                onClick={() => handleToggle(cat.name)}
                onKeyDown={(e) => handleKeyDown(e, cat.name)}
                type="button"
              >
                <span>{cat.name}</span>
                <span
                  className="transition-transform"
                  style={{
                    transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </button>
              {isOpen && (
                <div
                  className="space-y-[0.5em]"
                  id={`cat-panel-${cat.name} border-b`}
                >
                  {cat.subCategories.map((sub) => (
                    <div key={sub}>
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-blue-500"
                          checked={selectedFilters.includes(sub)}
                          onChange={() => handleFilterChange(sub)}
                          aria-label={`Filter by ${sub}`}
                          tabIndex={0}
                        />
                        <span>{sub}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
