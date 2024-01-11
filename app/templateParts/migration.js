import React from "react";

const Migration = (props) => {
  
  let migration   = props.migration;
  let optionsDay = { year: "numeric", month: "long", day: "numeric" };
  let optionsTime = { hour: "2-digit", minute: "2-digit" };

  return (
    <div className="pb-1 mb-6 border-b-2 border-solid border-[#F3F9F9]">
      <h3 className="leading-6 basic-sans text-xl lg:pr-4 xl:w-[70%] pb-4">
        Ridge Last Modified Content:
      </h3>
      <span className="leading-6 basic-sans text-lg lg:pr-4 xl:w-[70%] pb-4">
        Database:
      </span>
      <time class="text-xl font-bold basic-sans pr-4 block">
        {new Date(migration.database_Update_Date).toLocaleDateString(
          [],
          optionsDay
        )}
        <br />
        {new Date(migration.database_Update_Date).toLocaleTimeString(
          [],
          optionsTime
        )}
      </time>

      <span className="leading-6 basic-sans text-lg lg:pr-4 xl:w-[70%] mt-4 block">
        FileSystem:
      </span>
      <time class="text-xl font-bold basic-sans pr-4 block mb-8">
        {new Date(migration.fileSystem_Update_Date).toLocaleDateString(
          [],
          optionsDay
        )}
        <br />
        {new Date(migration.fileSystem_Update_Date).toLocaleTimeString(
          [],
          optionsTime
        )}
      </time>
    </div>
  );
};
export default Migration;
