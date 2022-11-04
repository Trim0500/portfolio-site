import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function SinglePage(props) {
    const [pdf, setPdf] = useState(props.pdf);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [cvHref, setCvHref] = useState("/Lafleur_CV.pdf");

    const onDocumentLoad = ({numPages}) => {
        setNumPages(numPages);
        setPageNumber(pageNumber);
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

    const switchPdfDocument = (fileDir) => {
        setCvHref(fileDir);
        setPdf(process.env.PUBLIC_URL + fileDir);
    }

    return(
        <>
            <Document file={pdf} options={{workerSrc: "/pdf.worker.js"}} onLoadSuccess={onDocumentLoad}>
                <Page pageNumber={pageNumber} />
            </Document>

            <div className="center">
                <p>Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}</p>
                <div id="CV_Switch_Btn_Group">
                    <button className="btn btn-primary-pdf" type="button" disabled={cvHref === "/Lafleur_CV.pdf"} onClick={() => switchPdfDocument('/Lafleur_CV.pdf')}>Fullstack Developer</button>
                    <button className="btn btn-primary-pdf" type="button" disabled={cvHref === "/Lafleur_CV_Game_Design.pdf"} onClick={() => switchPdfDocument('/Lafleur_CV_Game_Design.pdf')}>Game Designer</button>
                </div>
                <br/>
                <div id="Page_Btn_Switch_Group">
                    <button className="btn btn-primary-pdf" type="button" disabled={pageNumber <= 1} onClick={previousPage}>Previous Page</button>
                    <button className="btn btn-primary-pdf" type="button" disabled={pageNumber >= numPages} onClick={nextPage}>Next Page</button>
                </div>
            </div>
            
            <div className="center">
                <a className="a-pdf-download" href={cvHref} download>Download CV</a>
            </div>
        </>
    )
}