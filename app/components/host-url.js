import React from "react";

const HostUrl = (props) =>{

    let domain = `https://${ new URL(props.domain).hostname}/`;
    
    return(
        <a href={domain} className="mr-4 lg:mr-6" target="_blank">
            <svg width="15" height="15" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">					
                <path d="M13.75 0.75H20.625H22V2.125V9V10.375H19.25V9V5.47656L10.5703 14.1133L9.625 15.1016L7.64844 13.125L8.63672 12.1797L17.2734 3.5H13.75H12.375V0.75H13.75ZM1.375 2.125H6.875H8.25V4.875H6.875H2.75V20H18.2188V15.875V14.5H20.9688V15.875V21.375V22.75H19.5938H1.375H0V21.375V3.5V2.125H1.375Z" fill="black"/>
            </svg>
        </a>
    )
}
export default HostUrl;