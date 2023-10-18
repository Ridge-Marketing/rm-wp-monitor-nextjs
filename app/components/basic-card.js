import React from "react";
import Link from "next/link";
import HostUrl from "./host-url";

const BasicCard = (props) =>{

    let siteType    = props.siteType;
    let pages       = props.pages;

    // console.log(pages);

    let domain      = false;
    if(pages.length > 0){
        domain = pages[0].url;
    }

    let dateStrings  = [];
    pages.forEach(e => {
        // console.log(e.last_updated);
        dateStrings.push(e.last_updated);
    });
    let lastUpdated = compareDates(dateStrings);
    let optionsDay = { year: 'numeric', month: 'long', day: 'numeric'  };
    let optionsTime = {hour: '2-digit', minute:'2-digit'};

    return(
        <article className={`${siteType.toLowerCase()}-container bg-transparent text-white mb-4 lg:w-1/4`}>
            <div className="flex justify-between w-full items-center pb-2 border-b-2 mb-6 border-solid border-[#F3F9F9]">
                <h3 className={`${siteType.toLowerCase()} text-base lg:text-lg font-bold my-2`}>{siteType.toUpperCase()}</h3>
                {domain &&
                    <HostUrl domain={domain}/>
                }
            </div>
            <div className="flex flex-col bg-white text-black">
                <div className="pb-1 mb-6 border-b-2 border-solid border-[#F3F9F9]">
                    <h3 className="leading-5 font-normal basic-sans">Content Modified</h3>
                    {lastUpdated&&
                        <>
                            <time class="font-bold text-xl basic-sans pr-4 block">{new Date(lastUpdated).toLocaleDateString([],optionsDay)}</time>
                            <time class="font-bold text-lg basic-sans pr-4 block mb-8">{new Date(lastUpdated).toLocaleTimeString([],optionsTime)}</time>
                        </>
                    }
                    {!lastUpdated&&
                        <>
                            <span className="font-bold text-lg block">No Date Data</span>
                            <span className="font-bold text-lg mb-8 block">No Time Data</span>
                        </>
                    }
                </div>
                {/* <div className="pb-1 mb-6 border-b-2 border-solid border-[#F3F9F9]">
                    <time class="font-bold uppercase text-xl basic-sans">DATE</time>
                    <h3 className="mb-4 leading-5 font-normal basic-sans">Last RM Database/Code Push</h3>
                </div> */}
            </div>
            <details className="text-black mb-6">
                <summary>Expand List of Pages</summary>
                <div className="bg-white text-black  border-l border-solid border-black  pt-5">
                    <ol className="mb-4">
                        {pages.map((page) => (
                            <li key={page.page_name+page.url} className="mb-4 border-b border-b-gray-200">
                                <details className="w-full cursor-pointer">
                                    <summary className="border-b border-solid border-black pl-5 pb-5">
                                        <span className="font-bold">{page.page_name}</span>
                                        <span className="block text-sm">{new Date(page.last_updated).toLocaleDateString([],optionsDay)}</span>
                                    </summary>
                                    <div className="border-l border-solid pb-5">
                                        
                                        <div className="pl-5">
                                            <span className="block mt-4 text-sm">Page Name:</span>
                                            <h4 className="font-bold mb-4">{page.page_name}</h4>
                                        </div>
                                        
                                        <div className="pl-5  pt-5 ">
                                            <span className="block text-sm">Last Edited:</span>
                                            <time className="block font-bold">
                                                {new Date(page.last_updated).toLocaleDateString([],optionsDay)}
                                            </time>
                                            <time className="block mb-4 font-bold">
                                                {new Date(page.last_updated).toLocaleTimeString([],optionsTime)}
                                            </time>
                                        </div>
                                        
                                        <div className="pl-5 pt-5">
                                            <span className="block text-sm">Editor:</span>
                                            <p className="mb-4 font-bold">{page.editor}</p>
                                        </div>

                                        <div className="pl-5 pt-5">
                                            <span className="block text-sm">Page Url:</span>
                                            <a className="font-bold hover:underline" href={page.url} target="_blank">{page.url}</a>
                                        </div>
                                    </div>
                                </details>
                            </li>
                        ))}
                    </ol>
                </div>
            </details>
        </article>
    )
}

//compare dates
function compareDates(dateStrings){
    return dateStrings.reduce((mostRecent, currentDate) => {
        if (currentDate.localeCompare(mostRecent) === 1) {
        return currentDate;
        } else {
        return mostRecent;
        }
    }, dateStrings[0]);
}

export default BasicCard;