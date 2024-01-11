import React from "react";
import BasicCard from "./components/basic-card";

import supabaseServer from "./supabaseServer";
import RMNav from "./components/nav";

export default async function CardContainer(){
    const { data: Sites } = await supabaseServer()
    .from('Sites')
    .select()
    .order('last_updated',{ ascending: false })

    let groupedSites;
    groupSites(Sites);

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


    const { data: Migrations } = await supabaseServer()
    .from('Migrations')
    .select('*')

    let migrations = Migrations;
    let prod = ''; let stage = ''; let dev = '';

    return(
        <>
            <RMNav loaded={groupedSites.length} />
            {groupedSites?.map((Category) => (
                <section key={Category.website_group} className="mb-10 md:mb-16 lg:mb-20 bg-white px-8 pt-1">
                    <h2 className={`font-semibold uppercase text-4xl mt-6 pb-8`}>{Category.website_group.replace(/[^a-zA-Z0-9 ]/g, ' ')}</h2>
                    {migrations.map( (migration) => {
                            if( (Category.website_group.replace(/[^a-zA-Z0-9 ]/g, ' ')) == (migration.website_group.replace(/[^a-zA-Z0-9 ]/g, ' ')) ){
                                if(migration.siteType == 'prod'){
                                    prod = migration;
                                }
                                if(migration.siteType == 'stage'){
                                    stage = migration;
                                }
                                if(migration.siteType == 'dev'){
                                    dev = migration;
                                }
                            }
                        })
                    }
                    <div className="flex justify-between">
                        <BasicCard siteType={'PRODUCTION'}   pages={Category.pages.prod}   migration={prod}/>
                        <BasicCard siteType={'STAGING'}      pages={Category.pages.stage}  migration={stage}/>
                        <BasicCard siteType={'DEVELOPMENT'}  pages={Category.pages.dev}    migration={dev}/>
                        <BasicCard siteType={'LOCAL'}        pages={Category.pages.local}  migration={''}/>
                    </div>
                </section>
            ))}
        </>
    )
}