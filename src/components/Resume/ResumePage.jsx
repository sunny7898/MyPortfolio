import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import resumePdf from "../../assets/Sunny_Goswami_CV.pdf";
import "./ResumePage.css";
import { FaDownload } from "react-icons/fa6";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set the worker to the pdfjs-dist worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function ResumePage() {
  const [scale, setScale] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateDimensions() {
      const width = window.innerWidth;
      setWindowWidth(width);

      function updateScale() {
        const pdfPageWidth = 612; // Width in pixels for a standard PDF page (US Letter)
        const newScale = width / pdfPageWidth;
        setScale(newScale);
      }

      if (width > 1440) {
        setScale(2);
      } else if (width > 1024) {
        setScale(1.5);
      } else if (width > 768) {
        setScale(1.1);
      } else if (width > 480) {
        updateScale();
      } else {
        setScale(0.6);
      }
    }

    updateDimensions();

    // Update scale on resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="resume-container">
      <DownloadButton />
      <div className="showcase-section">
        <Document file={resumePdf}>
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
      {windowWidth > 768 && <DownloadButton />}{" "}
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
