import React from "react";
import RMselect from "./selects";

const RMNav = (props) =>{

    const { websites, activeWebsite, handleChange, loaded } = props;

    return(
        <div className="sticky top-2 bg-white mb-0 main rounded-full drop-shadow-sm w-max px-4">
            <nav className="px-4 pb-5 mb-4 pt-6 lg:mt-4 flex ml-auto mr-auto w-max">
                <p className="font-bold flex items-center mr-8">{loaded} WEBSITES LOADED</p>
                <RMselect websites={websites} activeWebsite={activeWebsite} handleChange={handleChange}/>
            </nav>
        </div>
    )
}
export default RMNav;