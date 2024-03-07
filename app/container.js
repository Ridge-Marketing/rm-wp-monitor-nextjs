'use client'
import React from "react"
import RMNav from "./components/nav";
import WebsiteData from "./components/website-data";

import { useState } from 'react'

const RMcontainer = (props) => {
    const {websites, migrations}  = props;
    let { prod, stage, dev } = "";
    const [activeWebsite, setActiveWebsite] = useState('');

    const handleChange = (event) => {
        setActiveWebsite(event.target.value);
    }

    const activeWebsiteData = websites.find(website => website.website_group === activeWebsite);

    migrations.forEach(migration => {
        const sanitizedMigrationWebsite = migration.website_group.replace(/[^a-zA-Z0-9 ]/g, " ");
        const sanitizedActiveWebsite = activeWebsite.replace(/[^a-zA-Z0-9 ]/g, " ");
        
        if (sanitizedMigrationWebsite === sanitizedActiveWebsite) {
            switch (migration.siteType) {
                case "prod":
                    prod = migration;
                    break;
                case "stage":
                    stage = migration;
                    break;
                case "dev":
                    dev = migration;
                    break;
                default:
                    break;
            }
        }
    });

    return(
        <>
             <RMNav websites={websites} loaded={websites.length} activeWebsite={activeWebsite} handleChange={handleChange} />
             <WebsiteData activeWebsiteData={activeWebsiteData} prod={prod} stage={stage} dev={dev} />
             {/* <pre>{JSON.stringify( stage, null, 4)}</pre> */}
        </>
    )
}
export default RMcontainer