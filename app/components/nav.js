import React from "react";
import RMselect from "./selects";

const RMNav = (props) =>{

    const { websites, activeWebsite, handleChange, loaded } = props;

    return(
        <div className="sticky top-0 bg-white mb-0 main">
            <nav className="pb-5 mb-4 pt-6 lg:mt-4 ml-4 flex">
                <p className="font-bold flex items-center mr-8">{loaded} WEBSITES LOADED</p>
                <RMselect websites={websites} activeWebsite={activeWebsite} handleChange={handleChange}/>
            </nav>
        </div>
    )
}
export default RMNav;