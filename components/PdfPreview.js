"use client";

import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useEffect, useState } from "react";
import { getPdfBlob } from "../utils/pdfStore";
import PdfControls from "./PdfControls"

// ensure this runs only on the browser
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}

export default function PdfPreview() {
  const [blob, setBlob] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setBlob(getPdfBlob());
  }, []);

  if (!blob) return <p className="p-4">No PDF found</p>;

  // Called when PDF is loaded
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="h-full overflow-auto flex flex-col items-center p-4 space-y-4">
      <Document file={blob} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          // <Page 
          //   key={`page_${index + 1}`} 
          //   pageNumber={index + 1} 
          //   width={600} // adjust based on your layout
          // />
          <Page key={`page_${index + 1}`} pageNumber={pageNumber} scale={scale} />
        ))}
      </Document>
      {/* Controls overlay */}
      {/* <PdfControls
        numPages={numPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        scale={scale}
        setScale={setScale}
      /> */}
    </div>
  );
}
