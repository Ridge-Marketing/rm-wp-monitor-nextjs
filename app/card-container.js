import React from "react";
import BasicCard from "./components/basic-card";

// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

import supabaseServer from "./supabaseServer";
import RMNav from "./components/nav";

// const supabase = createServerComponentClient({ cookies });

import { useRouter } from 'next/navigation'

export const revalidate = 10


export default async function CardContainer(){
    const { data: Sites } = await supabaseServer()
    .from('Sites')
    .select()
    .order('last_updated',{ ascending: false })

    let groupedSites;
    groupSites(Sites);
 

    // const router = useRouter();

    // setInterval(router.refresh(),90000); 

    function groupSites(sites) {
        const groupedData = {};

        sites.forEach(item => {
            const websiteGroup = item.website_group;
            if (!groupedData[websiteGroup]) {
                groupedData[websiteGroup] = {
                    dev: [],
                    prod: [],
                    stage: [],
                    local: []
                };
            }
            let lowercaseSiteType = item.SiteType.toLowerCase();
            groupedData[websiteGroup][lowercaseSiteType].push(item);
        });
    
        groupedSites = Object.entries(groupedData).map(([groupName, groupItems]) => ({
            website_group: groupName,
            pages: groupItems
        }));

        groupedSites.sort((a,b) => a.website_group.localeCompare(b.website_group)); 
    }

    return(
        <>
            <RMNav loaded={groupedSites.length} />
            {groupedSites?.map((Category) => (
                <section key={Category.website_group} className="mb-10 md:mb-16 lg:mb-20 bg-white px-8 pt-1">
                    <h2 className={`font-semibold uppercase text-3xl mt-6 pb-10 mb-4 border-b-2 border-solid border-[#F3F9F9]`}>{Category.website_group.replace(/[^a-zA-Z0-9 ]/g, ' ')}</h2>
                    <div className="flex justify-between">
                        <BasicCard siteType={'PRODUCTION'}      pages={Category.pages.prod}/>
                        <BasicCard siteType={'STAGING'}         pages={Category.pages.stage}/>
                        <BasicCard siteType={'DEVELOPMENT'}     pages={Category.pages.dev}/>
                        <BasicCard siteType={'LOCAL'}           pages={Category.pages.local}/>
                    </div>
                </section>
            ))}
        </>
    )
}