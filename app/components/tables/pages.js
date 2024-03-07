'use client'
import React from "react";
import { useState } from "react";

const PagesTable = (props) =>{
    const {pages} = props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
      };
    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
      };

    let optionsTime = { hour: "2-digit", minute: "2-digit" };
    
    return(
        <div className="mt-16">
            <div className="flex w-full justify-between info-overview">
                <h3 className="text-xl">ACTIVE PAGES</h3>
                <p className="font-bold">Time</p>
                <p className="font-bold">Environment</p>
                <p className="font-bold">Author</p>
            </div>
            <ul className="info-container w-full bg-white mt-2 rounded-md">
            {/* <pre>{JSON.stringify( pages, null, 4)}</pre> */}
            {pages.prod.slice(startIndex, endIndex).map((page, index) => (
                <li key={index} className="flex">
                    <a href={page.url} target="blank" className="underline">{page.page_name.substring(0, 50)}</a>
                    <time>
                        {new Date(page.last_updated).toLocaleDateString([])} • 
                        {new Date(page.last_updated).toLocaleTimeString([], optionsTime)}
                    </time>
                    {page.SiteType == 'Prod'&& <span>Production</span>}
                    {page.SiteType == 'Stage'&& <span>Staging</span>}
                    {page.SiteType == 'Dev'&& <span>Development</span>}
                    {page.SiteType == 'Local'&& <span>Local</span>}
                    {page.editor}
                    {/* {page.url} */}
                </li>
            ))}
            </ul>
            <nav className="flex justify-end">
                { !(currentPage - 1) <= 0 && (
                    <button className="mt-4" onClick={handlePrevPage}>LOAD PREVIOUS</button>
                )}
                {pages.prod.length > endIndex && (
                    <button className="mt-4 ml-4" onClick={handleNextPage}>LOAD MORE</button>
                )}
            </nav>            
        </div>
    )

}
export default PagesTable