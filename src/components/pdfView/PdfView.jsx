import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

// Important: You need to set the worker source URL for pdfjs
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
    return (
        <div className='view'>
            <Document file={pdfUrl}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}

export default PdfViewer;
