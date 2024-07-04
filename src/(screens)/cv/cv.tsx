import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'tailwindcss/tailwind.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded bg-white p-4 shadow-md">
        <Document
          file="/cv.pdf"
          onLoadSuccess={({numPages}) => console.log(`Number of pages: ${numPages}`)}
          onLoadError={console.error}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};

export default CV;
