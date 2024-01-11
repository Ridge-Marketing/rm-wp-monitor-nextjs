import React from "react";
import Link from "next/link";
import HostUrl from "./host-url";
import ExpandList from "../templateParts/expandList";
import LastUpdated from "../templateParts/lastUpdated";
import Migration from "../templateParts/migration";

const BasicCard = (props) => {
  let siteType = props.siteType;
  let pages = props.pages;
  let migration = props.migration;

  let domain = false;
  if (pages.length > 0) {
    domain = pages[0].url;
  }

  let dateStrings = [];
  pages.forEach((e) => {
    dateStrings.push(e.last_updated);
  });
  let lastUpdated = compareDates(dateStrings);

  return (
    <article className={`${siteType.toLowerCase()}-container bg-transparent text-white mb-4 lg:w-1/4`}>
      <div className="flex justify-between w-full items-center pb-2 border-b-2 mb-6 border-solid border-[#F3F9F9]">
        <h3 className={`${siteType.toLowerCase()} text-base lg:text-xl font-bold my-2`}>
          {siteType.toUpperCase()}
        </h3>
        {domain && <HostUrl domain={domain} color={siteType.toLowerCase()} />}
      </div>
      <div className="flex flex-col bg-white text-black">
        <LastUpdated siteType={siteType} lastUpdated={lastUpdated} />
        {migration && <Migration migration={migration} />}
      </div>
      <ExpandList pages={pages} />
    </article>
  );
};

//compare dates
function compareDates(dateStrings) {
  return dateStrings.reduce((mostRecent, currentDate) => {
    if (currentDate.localeCompare(mostRecent) === 1) {
      return currentDate;
    } else {
      return mostRecent;
    }
  }, dateStrings[0]);
}

export default BasicCard;
