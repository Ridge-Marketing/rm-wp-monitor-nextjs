'use client'
import React from "react"
import OverviewTable from "./tables/overview";
import PagesTable from "./tables/pages";

const WebsiteData = (props) => {

    const { activeWebsiteData, prod, stage, dev, environments} = props;

    return(
        <>
            {!activeWebsiteData&&
                <div className="bg-[#F3F9F9] -mt-12">
                    <div className="main pt-20 min-h-screen text-center block opacity-50">
                        No website selected
                    </div>
                </div>
            }
            {activeWebsiteData &&
                <section className="bg-[#F3F9F9] pb-10 -mt-12">
                    <div className="main pt-12 lg:pt-20">
                        <h2 className={`font-semibold uppercase text-4xl mt-6 pb-10 text-center`}>
                            {activeWebsiteData.website_group.replace(/[^a-zA-Z0-9 ]/g, " ")}
                        </h2>
                        <OverviewTable pages={activeWebsiteData.pages} prod={prod} stage={stage} dev={dev} environments={environments}/>
                        <PagesTable pages={activeWebsiteData.pages} environments={environments} />
                        {/* <PagesTable pages={activeWebsiteData.pages} fetchJson={restData}/> */}
                    </div>
                </section>
            }
        </>
    )

}
export default WebsiteData



    // const [search, setSearch] = useState([]);
    // const [postTypes, setPostTypes] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://awakenedfilms.com/wp-json/wp/v2/types');
    //             const data = await response.json();
    //             setSearch(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    
    //     fetchData();
    // }, []); 

    // useEffect(() => {
    //     const types = Object.values(search).map(post => post.slug);
    //     setPostTypes(types);
    // }, [search]);

    // const temp = []
    // const types = ['prod','dev','stage']
    // if(activeWebsiteData){ 
    //     types.forEach(envType => {
    //         activeWebsiteData.pages[envType].forEach(page => {
    //             if (page.post_type) {
    //                 if(postTypes.includes(page.post_type)){
    //                     if(!temp.includes(page.post_type)){
    //                         temp.push(page.post_type);
    //                     }
    //                 }
    //             }
    //         })
    //     })
    // }
    // const restData = [];
    // async function getNewData(){ 
    //     for(let i =0; i < temp.length; i++){
    //         if(temp[i] == 'post'){
    //             const data = await getEndpoint('posts');
    //             data.forEach((item) =>{
    //                 restData.push(item);
    //             })
    //         }else if(temp[i] == 'page'){
    //             const data =  await getEndpoint('pages');
    //             data.forEach((item) =>{
    //                 restData.push(item);
    //             })
    //         }else{
    //             const data = await getEndpoint(temp[i]);
    //             data.forEach((item) =>{
    //                 restData.push(item);
    //             })
    //         }
    //     }
    // }
    // getNewData();