"use client";

import { getPdfBlob } from "../utils/pdfStore";

export default function PdfActions() {
  const handleDownload = () => {
    const blob = getPdfBlob();
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Texela-${new Date().toISOString()}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleDownload}
        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 cursor-pointer"
      >
        Download PDF
      </button>

      <button className="w-full border py-2 rounded-lg opacity-60 cursor-not-allowed">
        Edit (Coming soon)
      </button>

      <button className="w-full border py-2 rounded-lg opacity-60 cursor-not-allowed">
        Merge (Coming soon)
      </button>
    </div>
  );
}
