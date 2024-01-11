import React from "react";

const LastUpdated = (props) => {
  let siteType = props.siteType;
  let lastUpdated = props.lastUpdated;

  let optionsDay = { year: "numeric", month: "long", day: "numeric" };
  let optionsTime = { hour: "2-digit", minute: "2-digit" };

  return (
    <section className="pb-1 mb-6 border-b-2 border-solid border-[#F3F9F9]">
      {siteType.toLowerCase() !== "local" && (
        <h3 className="leading-6 basic-sans text-lg lg:pr-4 xl:w-[65%] pb-4">
          Client Last Modified Content:
        </h3>
      )}
      {siteType.toLowerCase() == "local" && (
        <h3 className="leading-6 basic-sans text-lg lg:pr-4 xl:w-[65%] pb-4">
          Ridge Last Modified Content:
        </h3>
      )}
      {lastUpdated && (
        <>
          <time class="text-xl font-bold basic-sans pr-4 block">
            {new Date(lastUpdated).toLocaleDateString([], optionsDay)}
          </time>
          <time class="text-lg font-bold basic-sans pr-4 block mb-8">
            {new Date(lastUpdated).toLocaleTimeString([], optionsTime)}
          </time>
        </>
      )}
      {!lastUpdated && (
        <>
          <span className="text-xl font-bold basic-sans pr-4 block">
            No Date Data
          </span>
          <span className="text-lg font-bold basic-sans pr-4 block mb-8">
            No Time Data
          </span>
        </>
      )}
    </section>
  );
};
export default LastUpdated;
