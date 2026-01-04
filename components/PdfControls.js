"use client";

import { useState } from "react";

export default function PdfControls({ numPages, pageNumber, setPageNumber, scale, setScale }) {
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));

  const handlePrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-2">

      {/* Zoom Out */}
      <button
        onClick={handleZoomOut}
        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
      >
        -
      </button>

      {/* Zoom In */}
      <button
        onClick={handleZoomIn}
        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
      >
        +
      </button>

      {/* Page navigation */}
      <button
        onClick={handlePrevPage}
        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
      >
        ◀
      </button>
      <span className="px-2 font-medium text-gray-700">
        {pageNumber} / {numPages}
      </span>
      <button
        onClick={handleNextPage}
        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
      >
        ▶
      </button>
    </div>
  );
}
