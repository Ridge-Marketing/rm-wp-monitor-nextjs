import React from "react";
import CompareDates from "./compareDates";

const OverviewTable = (props) =>{
    const {pages} = props;
    return(
        <div>
            <div className="flex w-full justify-between">
                <h3 className="text-xl">OVERVIEW</h3>
                <p className="font-bold">Content Modified On Site</p>
                <p className="font-bold">Database Pushed</p>
                <p className="font-bold">Filesystem Pushed</p>
            </div>
            <ul className="info-container w-full bg-white mt-2 p-4 px-4 rounded-md">
                <li className="flex justify-between items-center">
                    <h4>Production</h4>
                    <div>
                        {pages.prod&&
                            <CompareDates data={pages.prod} />
                        }
                    </div>
                </li>
            </ul>
            <pre>{JSON.stringify( pages, null, 4)}</pre>
        </div>
    )
}
export default OverviewTable;