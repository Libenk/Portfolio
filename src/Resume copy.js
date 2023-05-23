import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const PDFImageViewer = () => {
    const pdfURL = './Resume.pdf'; // Replace with the URL or path to your PDF file
    const [numPages, setNumPages] = React.useState(null);
  
    const handleLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
  
    return (
      <div>
        <h1>PDF Image Viewer</h1>
        <Document
          file={pdfURL}
          onLoadSuccess={handleLoadSuccess}
          renderMode="svg"
        >
          <Page pageNumber={1} width={600} />
        </Document>
      </div>
    );
  };
  
  export default PDFImageViewer;