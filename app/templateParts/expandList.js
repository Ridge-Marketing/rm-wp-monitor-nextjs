import React from "react";

const ExpandList = (props) => {
  let pages = props.pages;
  let optionsDay = { year: "numeric", month: "long", day: "numeric" };
  let optionsTime = { hour: "2-digit", minute: "2-digit" };

  return (
    <details className="text-black mb-6">
      <summary>Expand List of Pages</summary>
      <div className="bg-white text-black pt-5">
        <ol className="mb-4">
          {pages.map((page) => (
            <li key={page.page_name + page.url} className="mb-4">
              <details className="w-full cursor-pointer">
                <summary className="">
                  <span className="font-bold">{page.page_name}</span>
                  <span className="block text-sm">
                    {new Date(page.last_updated).toLocaleDateString(
                      [],
                      optionsDay
                    )}
                  </span>
                </summary>
                <div className="border-l border-solid border-black pb-5">
                  <div className="pl-5">
                    <span className="block mt-4 text-sm">Page Name:</span>
                    <h4 className="font-bold mb-1">{page.page_name}</h4>
                  </div>

                  <div className="pl-5 pt-5 ">
                    <span className="block text-sm">Last Edited:</span>
                    <time className="block font-bold">
                      {new Date(page.last_updated).toLocaleDateString(
                        [],
                        optionsDay
                      )}
                    </time>
                    <time className="block mb-1 font-bold">
                      {new Date(page.last_updated).toLocaleTimeString(
                        [],
                        optionsTime
                      )}
                    </time>
                  </div>

                  <div className="pl-5 pt-5">
                    <span className="block text-sm">Editor:</span>
                    <p className="mb-1 font-bold">{page.editor}</p>
                  </div>

                  <div className="pl-5 pt-5">
                    <span className="block text-sm">Post Type:</span>
                    <p className="mb-1 font-bold">{page.post_type}</p>
                  </div>

                  <div className="pl-5 pt-5">
                    <span className="block text-sm">Page Url:</span>
                    <a
                      className="font-bold hover:underline"
                      href={page.url}
                      target="_blank"
                    >
                      {page.url}
                    </a>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
};
export default ExpandList;
