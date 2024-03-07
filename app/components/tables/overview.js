import React from "react";
import CompareDates from "./compareDates";

const OverviewTable = (props) =>{
    const {pages, prod, stage, dev, local} = props;
    return(
        <div>
            <div className="flex w-full justify-between info-overview">
                <h3 className="text-xl">OVERVIEW</h3>
                <p className="font-bold">Content Modified On Site</p>
                <p className="font-bold">Database Pushed</p>
                <p className="font-bold">Filesystem Pushed</p>
            </div>
            <ul className="info-container w-full bg-white mt-2 rounded-md">
                <li className="flex justify-between items-center">
                    <h4>Production</h4>
                    <div>
                        {pages.prod&&
                            <CompareDates data={pages.prod} />
                        }
                    </div>
                    <div>
                        {prod&&
                            <>
                                {new Date(stage.database_Update_Date).toLocaleDateString([])}
                                <small className="block">{stage.developerName}</small>
                            </>
                        }
                        {!prod&&
                            <>No Data</>
                        }
                    </div>
                    <div>
                        {prod&&
                            <>
                                {new Date(stage.fileSystem_Update_Date).toLocaleDateString([])}
                                <small className="block">{stage.developerName}</small>
                            </>
                        }
                        {!prod&&
                            <>No Data</>
                        }
                    </div>
                </li>
                <li className="flex justify-between items-center">
                    <h4>Staging</h4>
                    <div>
                        {pages.stage&&
                            <CompareDates data={pages.stage} />
                        }
                    </div>
                    <div>
                        {stage&&
                            <>
                                {new Date(stage.database_Update_Date).toLocaleDateString([])}
                                <small className="block">{stage.developerName}</small>
                            </>
                        }
                        {!stage&&
                            <>No Data</>
                        }
                    </div>
                    <div>
                        {stage&&
                            <>
                                {new Date(stage.fileSystem_Update_Date).toLocaleDateString([])}
                                <small className="block">{stage.developerName}</small>
                            </>
                        }
                        {!stage&&
                            <>No Data</>
                        }
                    </div>
                </li>
                <li className="flex justify-between items-center">
                    <h4>Development</h4>
                    <div>
                        {pages.dev&&
                            <CompareDates data={pages.dev} />
                        }
                    </div>
                    <div>
                        {dev&&
                            <>
                                {new Date(dev.database_Update_Date).toLocaleDateString([])}
                                <small className="block">{dev.developerName}</small>
                            </>
                        }
                        {!dev&&
                            <>No Data</>
                        }
                    </div>
                    <div>
                        {dev&&
                            <>
                                {new Date(dev.fileSystem_Update_Date).toLocaleDateString([])}
                                <small className="block">{dev.developerName}</small>
                            </>
                        }
                        {!dev&&
                            <>No Data</>
                        }
                    </div>
                </li>
                <li className="flex justify-between items-center">
                    <h4>Local</h4>
                    <div>
                        {pages.local&&
                            <CompareDates data={pages.local} />
                        }
                    </div>
                    <div>
                        {local&&
                            <>
                                {new Date(local.database_Update_Date).toLocaleDateString([])}
                                <small className="block">{local.developerName}</small>
                            </>
                        }
                        {!local&&
                            <>No Data</>
                        }
                    </div>
                    <div>
                        {local&&
                            <>
                                {new Date(local.fileSystem_Update_Date).toLocaleDateString([])}
                                <small className="block">{local.developerName}</small>
                            </>
                        }
                        {!local&&
                            <>No Data</>
                        }
                    </div>
                </li>
            </ul>
            {/* <pre>{JSON.stringify( pages, null, 4)}</pre> */}
        </div>
    )
}
export default OverviewTable;