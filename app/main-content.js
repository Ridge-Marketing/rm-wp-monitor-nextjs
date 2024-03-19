import React from "react";

import supabaseServer from "./supabaseServer";
import RMcontainer from "./container";

export default async function MainContent() {
    const { data: Sites } = await supabaseServer()
    .from("Sites")
    .select()
    .order("last_updated", { ascending: false });

  let groupedSites;
  groupSites(Sites);

  function groupSites(sites) {
    const groupedData = {};

    sites.forEach((item) => {
      const websiteGroup = item.website_group;
      if (!groupedData[websiteGroup]) {
        groupedData[websiteGroup] = {
          dev: [],
          prod: [],
          stage: [],
          local: [],
        };
      }
      let lowercaseSiteType = item.SiteType.toLowerCase();
      groupedData[websiteGroup][lowercaseSiteType].push(item);
    });

    groupedSites = Object.entries(groupedData).map(
      ([groupName, groupItems]) => ({
        website_group: groupName,
        pages: groupItems,
      })
    );

    groupedSites.sort((a, b) => a.website_group.localeCompare(b.website_group));
  }


  const { data: Migrations } = await supabaseServer()
    .from("Migrations")
    .select("*");
  let migrations = Migrations;

  let { data: EnvURLs } = await supabaseServer()
  .from('EnvURLs')
  .select('*')
  let environments = EnvURLs;


  return (
      <RMcontainer websites={groupedSites} migrations={migrations} environments={environments}  />
  )
}