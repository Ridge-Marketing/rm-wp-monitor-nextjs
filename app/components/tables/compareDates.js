import React from "react";

const CompareDates = (props) =>{
    const {data} = props;

    let optionsDay = { year: "numeric", month: "numeric", day: "numeric" };
    let optionsTime = { hour: "2-digit", minute: "2-digit" };

    let dateStrings = [];
    data.forEach((e) => {
      dateStrings.push(e.last_updated);
    });
    let lastUpdated = compareDates(dateStrings);

    function compareDates(dateStrings) {
        return dateStrings.reduce((mostRecent, currentDate) => {
        if (currentDate.localeCompare(mostRecent) === 1) {
            return currentDate;
        } else {
            return mostRecent;
        }
        }, dateStrings[0]);
    }

    return(
        <time>
            <span className="block">
                {new Date(lastUpdated).toLocaleDateString([], optionsDay)}
            </span>
            <span>
                {new Date(lastUpdated).toLocaleTimeString([], optionsTime)}
            </span>
        </time>
    )
}
export default CompareDates;