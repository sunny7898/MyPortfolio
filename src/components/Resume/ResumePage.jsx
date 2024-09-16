// src/components/ResumeViewer.js
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
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-container">
      {/* Download button at the top */}
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

      {/* PDF Viewer */}
      <div className="showcase-section">
        <Document file={resumePdf}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />{" "}
        </Document>
      </div>

      {/* Download button at the bottom */}
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
    </div>
  );
}

export default ResumePage;
