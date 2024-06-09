import resume from "../assets/docs/myresume.pdf"
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { useState } from "react";
import { Download, ZoomIn, ZoomOut } from "lucide-react";

// Set the workerSrc to the proper location
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
//console.log(resume);
const [scale, setScale] = useState(1.0); // Initial scale

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.2, 2.0)); // Increase scale by 0.2
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.2, 1.0)); // Decrease scale by 0.2, with a minimum of 0.5
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'sahil-ahmed.pdf';
    link.click();
  };

  return (
    <div className="bg-[#f5f5b2] dark:bg-black gridLinesBackground w-full h-full pt-[5rem]">
      <div className="flex justify-center pt-[1rem] gap-3 my-[1rem]">
        <button onClick={zoomIn} className="border border-black dark:border-white rounded-[3px] p-1">
          <ZoomIn className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>
        <button onClick={zoomOut} className="border border-black dark:border-white rounded-[3px] p-1">
        <ZoomOut className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>
      </div>
      <div className="flex justify-center mb-[1.5rem] px-[0.5rem] lg:mx-0">
        <Document file={resume}>
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
      <div className="flex justify-center pb-[1.5rem]">
        <button onClick={downloadPDF} className="flex items-center gap-2 text-sm lg:text-lg font-mukta font-semibold bg-emerald-500 px-8 py-2 lg:px-12 lg:py-4 rounded-md ring-1 ring-emerald-700">
          <Download className="w-5 h-5 lg:w-8 lg:h-8" />
          Download
        </button>
      </div>
    </div>
  )
}

export default Resume