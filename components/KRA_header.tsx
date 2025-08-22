"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  Printer,
  FileText,
  RefreshCw,
  Menu,
  ChevronDown,
  EllipsisVertical,
} from "lucide-react";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";

export default function KRAListPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-gray-50 w-full">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 md:p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Menu size={20} /> KRA List
        </h1>
        <div className="flex flex-wrap gap-3">
          <Button title="Refresh">
            <RefreshCw size={20} />
          </Button>
          <Button
            variant="outline"
            className="bg-gray-100 hover:bg-gray-200 flex gap-2 items-center"
          >
            <ChevronDown size={20} /> Create
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            + Add New KRA
          </Button>
          <button className="p-2 rounded hover:bg-gray-100">
            <EllipsisVertical size={20} className="text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-6">
        {/* Main Content */}
        <main className="col-span-12 bg-white rounded-xl p-4 shadow">
          {/* Search & Filters */}
          <div className="flex flex-wrap gap-2 mb-4 w-full">
            {/* Search Input */}
            <div className="relative flex w-full lg:w-[70%]">
              <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search KRAs..."
                className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500"
              />
              <button
                className="flex items-center w-full px-3 py-2 border rounded-lg text-sm hover:bg-gray-100 ml-2"
                onClick={() => setIsFilterOpen(true)}
              >
                <FiFilter className="mr-1" /> All Departments
              </button>
            </div>

            {/* Extra Filters */}
            <div className="hidden lg:flex gap-2 justify-end">
              <button className="flex items-center gap-1 px-3 py-2 border rounded-lg text-sm hover:bg-gray-100">
                <FiFilter /> Filter <FiX />
              </button>
              <button className="flex items-center gap-1 px-3 py-2 border rounded-lg text-sm hover:bg-gray-100">
                <FiX /> Last Update on
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {["All", "Branch", "Self"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 rounded-lg text-sm font-medium ${
                    tab === "All"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
              <Button
                variant="outline"
                size="sm"
                className="text-green-600 border-green-600 hover:bg-green-50"
              >
                <Download className="w-4 h-4 mr-1" />
                Excel
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-orange-600 border-orange-600 hover:bg-orange-50"
              >
                <Printer className="w-4 h-4 mr-1" />
                Print
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <FileText className="w-4 h-4 mr-1" />
                PDF
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
