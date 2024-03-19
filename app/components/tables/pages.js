'use client'
import { env } from "@/next.config";
import React from "react";
import { useState, useEffect } from "react";

const PagesTable = (props) =>{
    const {pages, environments} = props;

    // SORT SUPABASE ENTRIES
    let allPages   = []
    allPages = allPages.concat(pages.prod, pages.dev, pages.stage);

    allPages.sort(function(a,b){
        return new Date(b.last_updated) - new Date(a.last_updated);
    });


    //COMPARE TO REST API
    const [updatedPages, setUpdatedPages] = useState([]);
    useEffect(() => {
        async function fetchUpdatedPages() {
            const allPages = pages.prod.concat(pages.dev, pages.stage);
            const updatedItems = await getRestAPI(allPages, environments);
            setUpdatedPages(updatedItems);
        }
        if(environments){
            if(allPages[0].website_group === environments.site_name){
                fetchUpdatedPages();
            }
        }
        // console.log(allPages, environments);
    }, [pages, environments]); 


    //BUTTONS
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
                <p className="font-bold">Modified Date</p>
                <p className="font-bold">Environment</p>
                <p className="font-bold">Compare</p>
            </div>
            <ul className="info-container w-full bg-white mt-2 rounded-md">
                {allPages&&<>
                {allPages.slice(startIndex, endIndex).map((page, index) => (
                    <li key={index} className="flex">
                        {/* <pre>{JSON.stringify( page, null, 4)}</pre> */}
                        <a href={page.url} target="blank" className="underline">{page.page_name.substring(0, 50)}</a>
                        <time>
                            {new Date(page.last_updated).toLocaleDateString([])} 
                            {/* {new Date(page.last_updated).toLocaleTimeString([], optionsTime)} */}
                        </time>
                        <div>
                            <span className="block">
                                {page.SiteType == 'Prod'&&  <span>Production</span>}
                                {page.SiteType == 'Stage'&& <span>Staging</span>}
                                {page.SiteType == 'Dev'&&   <span>Development</span>}
                                {page.SiteType == 'Local'&& <span>Local</span>}
                            </span>
                            <small>Editor <b>{page.editor}</b></small>
                        </div>

                        {page.allRestData&&
                            <div>
                                {page.SiteType !== 'Prod'&&
                                    <>
                                    {page.allRestData.dataProd&&
                                        <>
                                            <span className="block w-full min-w-full">Production Modified</span>
                                            {page.allRestData.dataProd.modified&&
                                                <time>

                                                    { ( (new Date(page.last_updated)) > (new Date(page.allRestData.dataProd.modified)) ) && 
                                                        <small style={{ color:'red'}}>
                                                            Behind:&nbsp;
                                                        </small>
                                                    }

                                                    { ( (new Date(page.last_updated)) < (new Date(page.allRestData.dataProd.modified)) ) && 
                                                        <small style={{ color:'green'}}>
                                                            Ahead:&nbsp;
                                                        </small>
                                                    }

                                                    {new Date(page.allRestData.dataProd.modified).toLocaleDateString([])} 
                                                </time>
                                            }
                                            {!page.allRestData.dataProd.modified&&
                                                <>Does not exist on Production.</>    
                                            }
                                        </>
                                    }
                                    </>
                                }
                                {page.SiteType !== 'Stage'&&
                                    <>
                                    {page.allRestData.dataStage&&
                                        <>
                                            <span className="block w-full min-w-full">Staging Modified</span>
                                            {page.allRestData.dataStage.modified&&
                                                <time>
                                                    { ( (new Date(page.last_updated)) > (new Date(page.allRestData.dataStage.modified)) ) && 
                                                        <small style={{ color:'red'}}>
                                                            Behind:&nbsp;
                                                        </small>
                                                    }

                                                    { ( (new Date(page.last_updated)) < (new Date(page.allRestData.dataStage.modified)) ) && 
                                                        <small style={{ color:'green'}}>
                                                          Ahead:&nbsp;
                                                        </small>
                                                    }
                                                    {new Date(page.allRestData.dataStage.modified).toLocaleDateString([])} 
                                                </time>
                                            }
                                            {!page.allRestData.dataStage.modified&&
                                                <>Does not exist on Staging.</>    
                                            }
                                        </>
                                    }
                                    </>
                                }
                                {page.SiteType !== 'Dev'&&
                                    <>
                                    {page.allRestData.dataDev&&
                                        <>
                                            <span className="block w-full min-w-full">Development Modified</span>
                                            {page.allRestData.dataDev.modified&&
                                                <time>
                                                    { ( (new Date(page.last_updated)) > (new Date(page.allRestData.dataDev.modified)) ) && 
                                                        <small style={{ color:'red'}}>
                                                        Behind:&nbsp;
                                                        </small>
                                                    }<br/>

                                                    { ( (new Date(page.last_updated)) < (new Date(page.allRestData.dataDev.modified)) ) && 
                                                        <small style={{ color:'green'}}>
                                                            Ahead:&nbsp;
                                                        </small>
                                                    }<br/>
                                                    {new Date(page.allRestData.dataDev.modified).toLocaleDateString([])} 
                                                </time>
                                            }
                                            {!page.allRestData.dataDev.modified&&
                                                <>Does not exist on Development.</>    
                                            }
                                        </>
                                    }
                                    </>
                                }
                            </div>
                        }{!page.allRestData&& <>Loading!</>}
     
                    </li>
                ))}
                </>}
                {!allPages&& <>Loading!</>}
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


//LOAD REST API
async function getCustomEndpoint(post_type, id, url) {
    try {
        if (post_type && id) {
            if (url) {
                if (url.charAt(url.length - 1) == '/') {
                    const response = await fetch(`${url}wp-json/wp/v2/${post_type}/${id}`);
                    return await response.json();
                } else {
                    url += '/';
                    const response = await fetch(`${url}wp-json/wp/v2/${post_type}/${id}`);
                    return await response.json();
                }
            } else {
                return;
            }
        }
    } catch (error) {
        console.error("Error occurred while fetching data:", error);
        throw error;
    }
}



//PAGES TO LOAD
async function getRestAPI(allPages, environments) {
    const updatedItems = await Promise.all(allPages.map(async (item) => {
        // console.log(item);
        if (item.post_type === 'post') {
            let dataDev, dataProd, dataStage;
            if(environments){
                if(environments.prod_url){
                    dataProd  = await getCustomEndpoint('posts', item.page_id, environments.prod_url);
                }
                if(environments.stage_url){
                    dataStage = await getCustomEndpoint('posts', item.page_id, environments.stage_url);
                }
                if(environments.dev_url){
                    dataDev   = await getCustomEndpoint('posts', item.page_id, environments.dev_url);
                }
            }
            item.allRestData = {dataProd, dataStage, dataDev}; 
        } else if (item.post_type === 'page') {
            let dataDev, dataProd, dataStage;
            if(environments){
                if(environments.prod_url){
                    dataProd  = await getCustomEndpoint('pages', item.page_id, environments.prod_url);
                }
                if(environments.stage_url){
                    dataStage = await getCustomEndpoint('pages', item.page_id, environments.stage_url);
                }
                if(environments.dev_url){
                    dataDev   = await getCustomEndpoint('pages', item.page_id, environments.dev_url);
                }
            }
            item.allRestData = {dataProd, dataStage, dataDev}; 
        } else {
            let dataDev, dataProd, dataStage;
            if(environments){
                if(environments.prod_url){
                    dataProd  = await getCustomEndpoint(item.post_type, item.page_id, environments.prod_url);
                }
                if(environments.stage_url){
                    dataStage = await getCustomEndpoint(item.post_type, item.page_id, environments.stage_url);
                }
                if(environments.dev_url){
                    dataDev   = await getCustomEndpoint(item.post_type, item.page_id, environments.dev_url);
                }
            }
            item.allRestData = {dataProd, dataStage, dataDev}; 
        }
        return item;
    }));

    return updatedItems;
}












// ///////////////////////////////////////////////////////////////////////////////////////////////////////
{/* {fetchJson&& fetchJson.map((item, index) => {
    if((page.page_id == item.id) && (page.post_type == item.type)){
        return(
            <div key={index}>
                {item.id}
                {item.type}
                { (page.page_id == item.id) && (page.post_type == item.type) &&
                    <div>
                        Match!
                    </div>
                }
            </div>
        )
    }
})} */}