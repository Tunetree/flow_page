"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function KRAListPage() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-gray-50 min-h-screen w-full flex flex-col">
      {/* Main Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-6">
        {/* Main Content */}
        <main className="col-span-12 bg-white rounded-xl shadow flex flex-col">
          {/* Table Wrapper */}
          <div className="flex-1 overflow-x-auto overflow-y-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="sticky top-0 bg-gray-100 shadow-sm z-10">
                <tr className="text-left text-gray-600">
                  <th className="p-3 border-b">
                    <input type="checkbox" />
                  </th>
                  {["KRA", "DEPARTMENT", "DESCRIPTION", "STATE", "COMMENT", "ACTION"].map(
                    (heading) => (
                      <th key={heading} className="p-3 border-b font-medium">
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    <div className="flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mb-2 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7h18M3 12h18M3 17h18"
                        />
                      </svg>
                      No Data Available
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-wrap gap-3 items-center justify-between mt-4 px-4 py-3 border-t bg-white sticky bottom-0">
            <div className="flex items-center gap-3 text-sm">
              Rows per page:
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {[5, 10, 20].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <span>
                {currentPage}-{rowsPerPage} of 13
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`p-1 border rounded hover:bg-gray-100 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="p-1 border rounded hover:bg-gray-100"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
