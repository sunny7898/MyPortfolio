import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import resumePdf from "../../assets/Sunny_Goswami_CV.pdf";
import "./ResumePage.css";
import { FaDownload } from "react-icons/fa6";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set the worker to the pdfjs-dist worker - use min.mjs in place min.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function ResumePage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      if (window.innerWidth > 1440) {
        setScale(2);
      } else if (window.innerWidth > 1024) {
        setScale(1.35);
      } else if (window.innerWidth > 769) {
        setScale(1);
      } else if (window.innerWidth > 481) {
        setScale(0.65);
      } else if (window.innerWidth > 320) {
        setScale(0.5);
      } else if (window.innerWidth > 280) {
        setScale(0.25);
      } else {
        setScale(1.5);
      }
    }
    updateScale();

    // Add event listener to update scale on resize
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="resume-container">
      <DownloadButton />
      <div className="showcase-section">
        <Document file={resumePdf}>
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
      <DownloadButton />
    </div>
  );
}

function DownloadButton() {
  return (
    <div className="download-cv">
      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="download-cv-link"
      >
        <FaDownload />
        &nbsp; Download CV
      </a>
    </div>
  );
}

export default ResumePage;
