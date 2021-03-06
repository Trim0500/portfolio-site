import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function SinglePage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const { pdf } = props;

    const onDocumentLoad = ({numPages}) => {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const changePage = (offset) => {
        setPageNumber(prevPageNum => prevPageNum + offset);
    }

    const previousPage = () => {
        changePage(-1);
    }

    const nextPage = () => {
        changePage(1);
    }

    return(
        <>
            <Document file={pdf} options={{workerSrc: "/pdf.worker.js"}} onLoadSuccess={onDocumentLoad}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div className="center">
                <p>Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}</p>
                <button className="btn btn-primary-pdf" type="button" disabled={pageNumber <= 1} onClick={previousPage}>Previous Page</button>
                <button className="btn btn-primary-pdf" type="button" disabled={pageNumber >= numPages} onClick={nextPage}>Next Page</button>
                {/* <a className="a-pdf-download" href="/Lafleur_CV.pdf" download>Download CV</a> */}
            </div>
            <div className="center">
                <a className="a-pdf-download" href="/Lafleur_CV.pdf" download>Download CV</a>
            </div>
        </>
    )
}