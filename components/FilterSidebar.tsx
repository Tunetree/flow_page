"use client";

import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

interface FiltersSidebarProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  isFilterOpen,
  setIsFilterOpen,
}) => {
  const filters = ["View By", "Assigned to", "Created by", "Shared by"];

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: isFilterOpen ? 0 : -300, opacity: isFilterOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`
        fixed top-0 left-0 h-full bg-white shadow-xl z-50 p-5
        w-full sm:w-[70%] md:w-[50%] lg:static lg:h-auto lg:w-[30%] lg:block lg:rounded-xl lg:shadow-md
        ${isFilterOpen ? "block" : "hidden lg:block"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
        <button
          className="lg:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setIsFilterOpen(false)}
        >
          <FiX size={22} />
        </button>
      </div>

      {/* Filters */}
      <div className="space-y-5">
        {filters.map((label) => (
          <div key={label} className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              {label}
            </label>
            <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-200">
              <option value="">Select {label}</option>
              <option value="option1">{label} Option 1</option>
              <option value="option2">{label} Option 2</option>
            </select>
          </div>
        ))}
      </div>
    </motion.aside>
  );
};

export default FiltersSidebar;
