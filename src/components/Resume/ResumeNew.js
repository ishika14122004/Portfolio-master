import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume_Ishika_Barnwal.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import SpaceButton from "../Contact/SpaceButton"; // Make sure this path is correct

// Setup PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <SpaceButton style={{
              maxWidth: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}>
              <AiOutlineDownload />
              Download CV
            </SpaceButton>
          </a>
        </Row>

        {/* PDF Viewer */}
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <SpaceButton style={{
              maxWidth: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}>
              <AiOutlineDownload />
              Download CV
            </SpaceButton>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
