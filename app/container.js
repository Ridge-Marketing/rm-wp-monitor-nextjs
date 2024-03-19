'use client'
import React from "react"
import RMNav from "./components/nav";
import WebsiteData from "./components/website-data";
import { useState, useEffect } from 'react'

const RMcontainer = (props) => {
    const {websites, migrations, environments}  = props;
    let { prod, stage, dev } = "";

    //state handle
    const [activeWebsite, setActiveWebsite] = useState('');
    const handleChange = (event) => {
        setActiveWebsite(event.target.value);
    }

    //set the active website data for the tables 
    const activeWebsiteData = websites.find(website => website.website_group === activeWebsite);

    //set the migration data
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

    //set the env data
    const [activeEnv, setActiveEnv] = useState(null);
    useEffect(() => {

        environments.forEach(env => {
            const envSiteName = env.site_name.replace(/[^a-zA-Z0-9 ]/g, " ");
            const sanitizedActiveWebsite = activeWebsite.replace(/[^a-zA-Z0-9 ]/g, " ");

            if (envSiteName === sanitizedActiveWebsite) {
                setActiveEnv(env);
            }

        });
    }, [activeWebsite]);

    return (
        <>
          <RMNav websites={websites} loaded={websites.length} activeWebsite={activeWebsite} handleChange={handleChange} />
          <WebsiteData activeWebsiteData={activeWebsiteData} prod={prod} stage={stage} dev={dev} environments={activeEnv} />
        </>
      );
}
export default RMcontainer

    {/* <pre>{JSON.stringify( websites, null, 4)}</pre> */}
    {/* <pre>{JSON.stringify( posts, null, 4)}</pre>  */}

        // useEffect(() => {
    //     const fetchPostData = async (postType) => {
    //       try {
    //         let endpoint = postType;
            
    //         if (postType === 'page') {
    //           endpoint = 'pages';
    //         }  
    //         if (postType === 'post') {
    //           endpoint = 'posts';
    //         }
            
    //         const response = await fetch(`https://awakenedfilms.com/wp-json/wp/v2/${endpoint}`);
    //         const data = await response.json();
    //         setPostTypeEnd(data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
      
    //     postTypesToUse.map((postType) => {
    //       fetchPostData(postType);
    //     });
    //   }, []);