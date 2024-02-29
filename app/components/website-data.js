import React from "react"
import OverviewTable from "./tables/overview";

const WebsiteData = (props) => {

    const { activeWebsiteData } = props;
    // console.log(activeWebsiteData);

    return(
        <>
            {!activeWebsiteData&&
                <div className="bg-[#F3F9F9]">
                    <div className="main pt-8 min-h-screen text-gray-500">
                        No website selected :(
                    </div>
                </div>
            }
            {activeWebsiteData &&
                <section className="bg-[#F3F9F9]">
                    <div className="main pt-8">
                        <h2 className={`font-semibold uppercase text-4xl mt-6 pb-8`}>
                            {activeWebsiteData.website_group.replace(/[^a-zA-Z0-9 ]/g, " ")}
                        </h2>
                        <OverviewTable pages={activeWebsiteData.pages}/>
                    </div>
                </section>
            }
        </>
    )

}
export default WebsiteData